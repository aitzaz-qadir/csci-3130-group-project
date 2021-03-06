# **CSCI 3130 - Group Project - Group 13**

This is the main repository for the CSCI 3130 group project (Summer 2021). 
We will be working on creating a functional Google Chrome Extension that 
allows users to scrape websites for media content and download files to 
their local device. As extended functionality, we intend on including a 
signup and login <br />

# Group 13 Members:
__Brynn Haley(Team Leader): B00851599__  <br />
__James McLean(Developer): B00509771__  <br />
__Emma Mensah(Developer): B00834434__  <br />
__Aitzaz Qadir Khowaja(Developer): B00853169__  <br />
__Wangwenzan Zhou(Developer): B00827960__  <br />

# GitLab repository:
> https://git.cs.dal.ca/bhaley/csci-3130-group-project.git 

# NOTICES
 
##Purpose of README.md
This README file is for team members to document processes or work items 
that caused difficulties in order to provide a well documented guide for
programmers who may later want to use or modify this code.

## Draw.io
NB - Preferably use draw.io for simple design docs so they can be easily 
shared on a repository  

# Information About Project Setup

## How to set up a Chrome Extension
src: https://developer.chrome.com/docs/extensions/mv3/getstarted/ <br />

-Provides boilerplate code that allows for a basic setup of a Google 
Chrome extension

## Blob URL

The extraction of a blob URL from videos being visited by the browser
works by using the function vid_find() in content.js, it selects all the
video tags in the document and pushes their sources into an array of all
the video sources. Usually it only initiates on the video that is 
currently being accessed. We believe that the extraction of the blob
URLs will be crucial for implementing the downloading functionality in
the 2nd iteration. 

## Azure Board

<p>Azure is a Microsoft project management and devops platform that allows for 
quick and efficient communication between team members, and provides a 
centralized interface for workflow, version control, process automation, and has
a number of useful tools and extensions to aid different types of stakeholders
in successfully managing a project. </p>

# References

1. ???Create an Extension Tutorial Part 1???. Microsoft Docs. Microsoft.com. Published January 10th 2021. <br />
URL: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension??? <br />

2. ???Getting Started???. Chrome Developers. Google Inc. Published February 28th 2014. <br />
URL:???https://developer.chrome.com/docs/extensions/mv3/getstarted/ <br />

3. ???What are Chrome Extensions????. Chrome Developers. Google Inc. Overview???Published February 21st 2013. <br />
URL: https://developer.chrome.com/docs/extensions/mv3/overview/??? <br />

4. ???JavaScript HTML DOM Document???. W3Schools. 2021. <br />
URL: https://www.w3schools.com/js/js_htmldom_document.asp <br />

5. ???Download a File Using JavaScript???. DelftStack. Published March 21st 2021. <br />
URL: https://www.delftstack.com/howto/javascript/javascript-download/ <br />

6. ???popup.js???. The Chromium Authors, 2012. Updated February 5th 2021. <br />
URL: https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/downloads/download_links/popup.js <br />

7. Draw.io was used for creating logos. URL: https://app.diagrams.net/ <br />

8. Google Material Theme  <br />

9. Icons from Google Material Icons  <br />

 
 
# Additional Cat
 
 
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