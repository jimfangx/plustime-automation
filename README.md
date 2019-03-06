# plustime-automation
The Plus Time automation tool is an auto [Plus Time](https://plustimenetwork.org/) signup tool made using [Puppeteer](https://pptr.dev/). Currently The Plus Time automation tool is still in beta, meaning there is limited to no testing, and documentation has not been verified by the majority. Also, this tool is made based on the Plus Time signup site for [Canyon Middle School](https://canyon.pltime.net), your signup site may have different HTML tags, which means that you may need to edit parts of this tool to make it compatiable for your signup site.

# Setup - Method 1: Self Hosting (Only working option as of 3/6/2019)
You can host Plus Time automation tool on a raspberry pi, or on cloud computing servicies like Amazon AWS or Heroku. However, you will need someting that has a task schduling tool, ex: cron on Unix or task schduler on Windows. For this guide, I am only going to go over hosting on a local computer. 

  * __**Prerequisites:**__
    * A computer that has command line access, meaning a computer that has command prompt, or terminal access, etc.
    * A computer that has node installed (This guide will not go over on how to install and setup node. Hint: Google will help a lot!), and the ability to install npm modules.
    * Know the basics of how to use a .json file. (Really this does not matter, I wil go over how to, but it is good to know). 
    
  * __**Instructions:**__
    * Download the Plus Time automation tool from GitHub in a zip, then unzip it. 
    * Delete the node_modules folder & the .vscode folder (if applicable).
    * Open your command line, and navigate (cd) over to the directory that contains the code.
    * Type `npm install` - This will install all the nessary packages for the code to run.
    * Use `node .` in the terminal to run. There are no outputs, and the program will automatically end once it has finished.
    * THIS FILE IS AN ACTIVE WORK IN PROGRESS. PLEASE IGNORE EVERYTHING IN THIS FILE! * 
    
    
   
