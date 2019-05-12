/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Jim Fang. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const puppeteer = require('puppeteer');
const config = require('./config.json');
const request = require('request');
var CronJob = require('cron').CronJob;

new CronJob(config.cron, function () {


    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://canyon.pltime.net/users/sign_in');
        await page.waitFor(500);
        await page.click('a.btn.btn-block.btn-google');
        await page.waitFor(2500);
        await page.type('#identifierId', config.email);
        await page.click('div.ZFr60d.CeoRYc');
        await page.waitFor(3100);
        await page.type('input.whsOnd.zHQkBf', config.password);
        await Promise.all([
            page.waitForNavigation(),
            page.click('div.ZFr60d.CeoRYc')
        ]);
        await page.waitFor(2500);
        //end of auth

        var numDays = await page.evaluate(() => { //INIT DATAS
            return document.getElementsByClassName("input").length;
        });
        var second = false;
        var selected = "";
        for (var i = 0; i < numDays; i++) { // # of days signup loop
            var disabled = await page.evaluate(i => {
                return document.getElementsByClassName("input")[i].disabled;
            }, i)
            if (!disabled) { //sign up
                var numOptions = await page.evaluate(i => { //INIT DATAS
                    return document.getElementsByClassName("input")[i].options.length;
                }, i); //init data for numOptions loop


                for (var j = 1; j < numOptions; j++) { // 17x options loop | Find study hall option loop

                    var result = await page.evaluate((i, j) => {
                        return document.getElementsByClassName("input")[i].options[j].value;
                    }, i, j);

                    var resultTxt = await page.evaluate((i, j) => {
                        return document.getElementsByClassName("input")[i].options[j].text;
                    }, i, j);

                    console.log("SECOND: " + second)
                    if (resultTxt.toLowerCase().indexOf(config.keyword1) != -1) {
                        second = true;
                        console.log("SECOND: " + second)
                        selected = result;
                        if (selected != "") break;
                    }
                } // if no 1st choice
                if (selected == "") { // second choice if selected still is nothing
                    for (var j = 1; j < numOptions; j++) {
                        var result = await page.evaluate((i, j) => {
                            return document.getElementsByClassName("input")[i].options[j].value;
                        }, i, j);

                        var resultTxt = await page.evaluate((i, j) => {
                            return document.getElementsByClassName("input")[i].options[j].text;
                        }, i, j);
                        console.log("SECOND: " + second)
                        if (resultTxt.toLowerCase().indexOf(config.keyword2) != -1) {
                            selected = result;
                            if (selected != "") break;
                        }
                    }
                }
                if (selected == "") {
                    for (var j = 1; j < numOptions; j++) {
                        var result = await page.evaluate((i, j) => {
                            return document.getElementsByClassName("input")[i].options[j].value;
                        }, i, j);

                        var resultTxt = await page.evaluate((i, j) => {
                            return document.getElementsByClassName("input")[i].options[j].text;
                        }, i, j);
                        console.log("SECOND: " + second)
                        if (resultTxt.toLowerCase().indexOf(config.keyword3) != -1) {
                            selected = result;
                            if (selected != "") break;
                        }
                    }
                }
                var date = await page.evaluate((i) => {
                    return document.querySelector(`body > div > article > div > div.grid > div > section > div > table > tbody > tr:nth-child(${(2 * i) + 1}) > td:nth-child(1)`).firstChild.nodeValue;
                }, i);
                if (selected === undefined) selected = ""; //make sure it does not crash :p
                await page.click(`body > div > article > div > div > div > section > div > table > tbody > tr:nth-child(${(2 * i) + 1}) > td:nth-child(2) > div > div > #student_assignments_attributes_${i}_event_id:nth-child(2)`) //click open signup tab
                await page.waitFor(500);
                await page.select(`select#student_assignments_attributes_${i}_event_id`, selected)
                await page.waitFor(5000);
                if (selected != "") { //ifttt request
                    console.log("MAKING REQUEST")
                    request({
                        url: `${config.iftttURL}`,
                        method: "POST",
                        json: {
                            'value1': resultTxt,
                            'value2': date,
                            'value3': "signed up for"
                        }
                    })
                }
                selected = "";
                second = false;
            }
            else { //assign
                var resultTxt = await page.evaluate(i => {
                    return document.getElementsByClassName("input")[i].value;
                }, i);
                var date = await page.evaluate((i) => {
                    return document.querySelector(`body > div > article > div > div.grid > div > section > div > table > tbody > tr:nth-child(${(2 * i) + 1}) > td:nth-child(1)`).firstChild.nodeValue;
                }, i);
                await page.waitFor(5000);
                request({
                    url: `${config.iftttURL}`,
                    method: "POST",
                    json: {
                        'value1': resultTxt,
                        'value2': date,
                        'value3': "assigned to"
                    },
                    function(error, response, body) {
                        if (error) {
                            return console.error("Failed: ", error)
                        }
                        console.log("SUCCESS: ", body)
                    }
                })
            }

        }

        await page.click('input.btn.btn-secondary')
        await page.waitFor(5000);
        await browser.close();
    })();
}, null, true, 'America/Los_Angeles');