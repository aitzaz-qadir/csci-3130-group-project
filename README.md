# **CSCI 3130 - Group Project - Group 13**

This is the main repository for the CSCI 3130 group project (Summer 2021).<br /> 
We will be working on creating a functional Google Chrome Extension that <br />
allows users to scrape websites for media content and download files to <br />
their local device. As extended functionality, we intend on including a <br />
signup and login <br />

## Group 13 Members:
**Brynn Haley: B00851599** <br />
**James McLean: B00509771** <br />
**Emma Mensah: B00834434** <br />
**Aitzaz Qadir Khowaja: B00853169** <br />
**Wangwenzan Zhou: B00827960** <br />

## GitLab repository:
> https://git.cs.dal.ca/bhaley/csci-3130-group-project.git 

## NOTICE
 
This README file is for team members to document processes or work items <br />
that caused difficulties in order to provide a well documented guide for <br />
programmers who may later want to use or modify this code <br />

## Draw.io
NB - Preferably use draw.io for simple design docs so they can be easily <br />
shared on a repository <br />

## How to set up a Chrome Extension
src: https://developer.chrome.com/docs/extensions/mv3/getstarted/

-Provides boilerplate code that allows for a basic setup of a Google <br />
Chrome extension

## Blob URL

The extraction of a blob URL from videos being visited by the browser <br />
works by using the function vid_find() in content.js, it selects all the <br />
video tags in the document and pushes their sources into an array of all <br />
the video sources. Usually it only initiates on the video that is <br />
currently being accessed. We believe that the extraction of the blob <br />
URLs will be crucial for implementing the downloading functionality in <br />
the 2nd iteration. 

## Azure Board



### References

“Create an Extension Tutorial Part 1”. Microsoft Docs. Microsoft.com. Published January 10th 2021. <br />
URL: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension  <br />

“Getting Started”. Chrome Developers. Google Inc. Published February 28th 2014. <br />
URL: https://developer.chrome.com/docs/extensions/mv3/getstarted/ <br />

“What are Chrome Extensions?”. Chrome Developers. Google Inc. Overview Published February 21st 2013. <br />
URL: https://developer.chrome.com/docs/extensions/mv3/overview/  <br />

“JavaScript HTML DOM Document”. W3Schools. 2021. <br />
URL: https://www.w3schools.com/js/js_htmldom_document.asp <br />

“Download a File Using JavaScript”. DelftStack. Published March 21st 2021. <br />
URL: https://www.delftstack.com/howto/javascript/javascript-download/ <br />

“popup.js”. The Chromium Authors, 2012. Updated February 5th 2021. <br />
URL: https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/downloads/download_links/popup.js <br />

Draw.io was used for creating logos. URL: https://app.diagrams.net/ <br />

Google Material Theme  <br />

Icons from Google Material Icons  <br />

 
 
#### Additional Cat
 
 
ASCII Art Tiger
          ,.                 .,<br />
         ,: ':.    .,.    .:' :,<br />
         ,',   '.:'   ':.'   ,',<br />
         : '.  '         '  .' :<br />
         ', : '           ' : ,'<br />
         '.' .,:,.   .,:,. '.'<br />
          ,:    V '. .' V    :,<br />
         ,:        / '        :,<br />
         ,:                   :,<br />
          ,:       =:=       :,<br />
           ,: ,     :     , :,<br />
            :' ',.,' ',.,:' ':<br />
           :'                   ':WW::'   '.<br />
          .:'                 '::::'   ':<br />
          ,:                    '::::'    :,<br />
          :'                     ':::'    ':<br />
         ,:                        ':''     :.<br />
        .:'                          '.     ',.<br />
       ,:'                             ''     '.<br />
       .:'                       .',    ':<br />
      .:'                            .'.,     :<br />
      .:                .,''     :<br />
      ::                .,''    ,:<br />
      ::              .,'','   .:'<br />
    .,::'.           .,','     ::::.<br />
  .:'     ',.       ,:,       ,WWWWW,<br />
  :'        :       :W:'     :WWWWWWW,          .,.<br />
  :         ',      WWW      WWWWWWWWW          '::,<br />
  '.         ',     WWW     :WWWWWWWWW            '::,<br />
   '.         :     WWW     :WWWWWWWW'             :::<br />
    '.       ,:     WWW     :WWWWWWW'             .:::<br />
     '.     .W:     WWW     :WWWWWW'           .,:::'<br />
      '.   :WW:     WWW     :WWWWW'      .,,:::::''<br />
     .,'   ''::     :W:     :WWWWW.  .,::::''<br />
  ,'        ''','',',','','''WWWWW::::''<br />
   ':,,,,,,,':  :  : : :  :  :WWWW'''<br />
   
   UPDATE - Cat looks like Ostrich, fix in Iteration 2