const puppeteer = require('puppeteer');
const config = require('./config.json');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://canyon.pltime.net/users/sign_in');

    await page.screenshot({ path: 'Start.png' });
    await page.waitFor(500);
    await page.click('a.btn.btn-block.btn-google');
    await page.waitFor(2500);
    await page.type('#identifierId', config.email);
    await page.screenshot({ path: 'emailInput.png' });
    //await page.waitFor(500);
    await page.click('div.ZFr60d.CeoRYc');
    await page.waitFor(2700); // email input
    await page.type('input.whsOnd.zHQkBf', config.password);
    await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.click('div.ZFr60d.CeoRYc') // Clicking the link will indirectly cause a navigation
    ]);
    await page.waitFor(2500);

    await page.screenshot({ path: 'loginFinish.png' }); //Login oauth completed

    // for (var i = 0; i<5; i++) {
    // await page.select(`#student_assignments_attributes_${4}_event_id`, '252528')
    // await page.waitFor(1000);
    //  await page.click("#student_assignments_attributes_5_event_id");
    // const result = await page.evaluate(x => {
    //     return Promise.resolve(document.getElementsByClassName("input")[4].options[17].text);
    //   }, 7);
    //   console.log(result);
    await page.waitFor(700);
    var numDays = await page.evaluate(() => { //INIT DATAS
        return document.getElementsByClassName("input").length;
    });
 
    console.log(numDays);

    var selected = "";

    for (var i = 0; i < numDays; i++) { // # of days signup loop
        var numOptions = await page.evaluate(i => { //INIT DATAS
            return document.getElementsByClassName("input")[i].options.length;
        }, i); //init data for numOptions loop
        console.log("I IS: " + i)
        for (var j = 1; j < numOptions; j++) { // 17x options loop | Find study hall option loop
            console.log("J IS: " + j)
            var result = await page.evaluate(i => {
                 return document.getElementsByClassName("input")[i].options[j].value;
            }, i, j);
            console.log("SDFJSKDFJLSKDJF")
            var resultTxt = await page.evaluate(i => {
                 return document.getElementsByClassName("input")[i].options[j].text;
            }, i, j);

            if (resultTxt.toLowerCase().indexOf('study hall') != -1 || resultTxt.toLowerCase().indexOf('catch up on work') != -1) {
                selected = result;
                console.log("I AM IN STUDY HALL FUNC")
            } //choose study hall option
        }

             if (selected === undefined) selected = "";// break numOptions loop as there are none | no options avaliable

            // var result = await page.evaluate(document.getElementsByClassName("input")[4].options[17].text);

            console.log("RESULT" + result)
            console.log(`Selected: ${selected}`)

            await page.click(`body > div > article > div > div > div > section > div > table > tbody > tr:nth-child(${(2 * i) + 1}) > td:nth-child(2) > div > div > #student_assignments_attributes_${i}_event_id:nth-child(2)`) //click open signup tab
            console.log(`TOSFSJDFDLKSJDFLK: body > div > article > div > div > div > section > div > table > tbody > tr:nth-child(${(2 * i) + 1}) > td:nth-child(2) > div > div > #student_assignments_attributes_${i}_event_id:nth-child(2)`)

            await page.waitFor(500);
            await page.select(`select#student_assignments_attributes_${i}_event_id`, selected)
            // await page.waitFor(5000);
            // await page.screenshot({ path: `Signup.png` });
            await page.waitFor(5000);
        }

    // }

    await browser.close();
})();