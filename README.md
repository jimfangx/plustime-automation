# plustime-automation
The Plus Time automation tool is an auto [Plus Time](https://plustimenetwork.org/) signup tool made using [Puppeteer](https://pptr.dev/). Currently the Plus Time automation tool is in its first official release, however there still could be a lot of bugs, so basically, don't expect it to always work. Also, this tool is made based on the Plus Time signup site for [Canyon Middle School](https://canyon.pltime.net), your signup site may have different HTML tags, which means that you may need to edit parts of this tool to make it compatiable for your signup site. 

# Setup - Method 1: Build from source
You can host Plus Time automation tool on a raspberry pi, or on cloud computing servicies like Amazon AWS or Heroku. For this guide, I am only going to go over hosting on a local computer. This computer has to be on 24/7; as soon as the computer shuts off, the script stops running. This script currently does not support non-server type usage (Hint: Will support this in a future update!).

  * __**Prerequisites:**__
    * A computer that has a CLI, meaning a computer that has command prompt, or terminal access, etc.
    * A computer that has node installed (This guide will not go over on how to install and setup nodejs. Hint: Google will help a lot!), and the ability to install npm modules.
    * Know the basics of how to use a .json file. (Really this does not matter, I wil go over how to, but it is good to know). 
    * Know the basics of how to use cron's schduling system * * * * * (ex: 0 22 * * 1)
    
  * __**Instructions:**__
    * Download the Plus Time automation tool from GitHub in a zip, then unzip it. Move to a optimal location if needed.
    * Register for Pushbullet [here](http://pushbullet.com)
    * Download the Pushbullet phone app.
    * Register for IFTTT [here](https://ifttt.com) & download the phone app if you want. It is not required, but tinker around w/ IFTTT, it's a really great service/tool!
    * Delete the node_modules folder & the .vscode folder (if applicable).
    * Find config-example.json and rename it to config.json
    * Open config.json and fill in the missing data in between the quotes ("<DATA HERE>"), then delete everything after the double slashes (everything after the //)
    * Don't fill in iftttURL right now, we will fill it in later.
    * Keyword1 is your first class selection.
    * If keyword1 cannot be found in the avaliable classes, it will try to find classes containing keyword2
    * Head to [here](https://ifttt.com/maker_webhooks) (Direct link: https://ifttt.com/maker_webhooks) then click connect and make sure you are able to use the webhooks function of IFTTT
    * Then create an applet like [this](https://prnt.sc/n87z66). If receives POST request, push note to Pushbullet
    * Then go back to [here](https://ifttt.com/maker_webhooks) and find and click the "Settings" button
    * Copy and go to the URL. ** DO NOT GIVE THIS URL AWAY! IT IS CONFIDENTIAL.
    * Also, do not click the "Settings" button again after setup (unless needed), it will change the key/URL, and you will have to replace it in the config.json file. 
    * Click "{event}" and type in "flextime" or what your event name was when you created the applet.
    * Copy the link at the bottom, without the "curl -X POST" and place it in the iftttURL back in the config.json file.
    * For the cron field in config.json, go to [crontab guru](https://crontab.guru/), and get the cron equivalent of when to run. (ex: run every monday @ 22:00 is 0 22 * * 1 in cron). Once you have gotten the cron equivalent of when to run, put this in the cron field in config.json. 
    * Save & close config.json
    * Open your CLI, and navigate (cd) over to the directory that contains the code.
    * Type `npm install` - This will install all the nessary packages for the code to run.
    * Use `node .` in the terminal to run. There are no outputs (if there are any, then please ignore), and the program will automatically end once it has finished. You will receive a notification on pushbullet if you were signed up OR assigned to a flextime class.
    * Done! 

# Plus Time Automation Features
  * Automatically sign up for a flextime class according to the keyword1 and keyword2.
    * If classes does not contain keyword1, it looks for classes containing keyword2.
  * Notifies you about what class you were signed up to OR assigned to (by a teacher) by sending a notification to your phone 

# Authors
  * AirFusion45 - Ownwer & Current maintainer

# Contributors
  * Tadashi Saito (Slack: tadd) - Helping with course selection problem on Puppeteer's Slack! Thanks!

# License
This Project is licensed under MIT License - see the LICENSE.md file for more details. The main points of the MIT License are:
  
  * This code can be used commercially
  * This code can be modified
  * This code can be distributed
  * This code can be used for private use
  * This code has no Liability
  * This code has no Warranty
  * When using this code, credit must be given to the author

# Credits
  * Code basics & structure from klamping's rain-puppet [here](https://github.com/klamping/rain-puppet) | Also from klamping's YouTube video [here](https://youtu.be/6IOrp8HgnJU)

# Contact Me
Feel free to contact me if you find bugs, license issues, missing credits, etc. I am currently only giving out my Discord contact information, but feel free to contact me via Discord. 

  * Email: jfang.cv.ca.us@gmail.com OR jim@jimfang.me
  * Discord: AirFusion#1706

# Notes
  Flex Time Automation is out of Alpha & Beta stages, and on its first non-alpha or beta release! There could still be lots of bugs, but it is at least stable. So don't be surprised if you did not get signed up! Thanks for understanding!