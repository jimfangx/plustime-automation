# plustime-automation
The Plus Time automation tool is an auto [Plus Time](https://plustimenetwork.org/) signup tool made using [Puppeteer](https://pptr.dev/). Currently The Plus Time automation tool is still in beta, meaning there is limited to no testing, and documentation has not been verified by the majority. Also, this tool is made based on the Plus Time signup site for [Canyon Middle School](https://canyon.pltime.net), your signup site may have different HTML tags, which means that you may need to edit parts of this tool to make it compatiable for your signup site. You can learn more about the Plus Time Program [here](http://plustimenetwork.org).

# Setup - Method 1: Build from source (Only working option as of 3/6/2019)
You can host Plus Time automation tool on a raspberry pi, or on cloud computing servicies like Amazon AWS or Heroku. However, you will need someting that has a task schduling tool, ex: cron on Unix or task schduler on Windows. For this guide, I am only going to go over hosting on a local computer. 

  * __**Prerequisites:**__
    * A computer that has command line access, meaning a computer that has command prompt, or terminal access, etc.
    * A computer that has node installed (This guide will not go over on how to install and setup node. Hint: Google will help a lot!), and the ability to install npm modules.
    * Know the basics of how to use a .json file. (Really this does not matter, I wil go over how to, but it is good to know). 
    
  * __**Instructions:**__
    * Download the Plus Time automation tool from GitHub in a zip, then unzip it. 
    * Register for Pushbullet [here](http://pushbullet.com)
    * Download the Pushbullet phone app.
    * Delete the node_modules folder & the .vscode folder (if applicable).
    * Find config-example.json and rename it to config.json
    * Open config.json and fill in the missing data in between the quotes ("<DATA HERE>"), then delete everything after the double slashes (everything after the //)
    * Don't fill in iftttURL right now, we will fill it in later.
    * Keyword1 is your first class selection.
    * If keyword1 cannot be found in the avaliable classes, it will try to find classes containing keyword2
    * Head to [here](https://ifttt.com/maker_webhooks) (Direct link: https://ifttt.com/maker_webhooks) then click connect and make sure you are able to use the webhooks function of IFTTT
    * Then create an applet like [this](http://prntscr.com/mvkzce). If receives POST request, push note to Pushbullet
    * Then go back to [here](https://ifttt.com/maker_webhooks) and find and click the "Settings" button
    * Copy and go to the URL. ** DO NOT GIVE THIS URL AWAY! IT IS CONFIDENTIAL.
    * Click "{event}" and type in "flextime" or what your event name was when you created the applet.
    * Copy the link at the bottom, without the "curl -X POST" and place it in the iftttURL back in the config.json file.
    * Open your command line, and navigate (cd) over to the directory that contains the code.
    * Type `npm install` - This will install all the nessary packages for the code to run.
    * Use `node .` in the terminal to run. There are no outputs, and the program will automatically end once it has finished. You will receive a notification on pushbullet if you were signed up to a flextime class.
    * Then use cron or task scheduler or a .bat file on start up to run the script. By "cd"ing to the right directory and then running `node .`
    * Done! 

# Plus Time Automation Features
  * Automatically sign up for a flextime class according to the keyword1 and keyword2.
    * If classes does not contain keyword1, it looks for classes containing keyword2.
  * Notifies you about what class you were signed up to by sending a notification to your phone 

# Authors
  * AirFusion45 - Owner

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
  Please keep in mind that the Flex Time Automation Program is still in beta, that means the program may be unstable. Use with caution. 