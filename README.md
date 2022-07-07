# J-Clock

## Documentation
- This program was created by Jacky He on 01/03/2022.
> *“Better three hours too soon than a minute too late.”*

## Description 
- This project is an implementation of a clock that shows time both through the sun & moon (like traditional 'times') or on the implemented clock. 
- For the sun, moon, and other small stars, I used **Three.js** to create both the models and, hopefully, its movements. 
- This project is still in progress as you will later see in the ‘Snapshots’ section. However, I do plan on implementing a functional clock that tells accurate time as well as having the sun & moon move accordingly. 

## Tools Used
- ViteJS
- Three.js
> This repository does not include these modules.

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run these following commands:

``` bash

# Install dependencies (only for first time)
npm init @vitejs/app
npm install three

# Serve at localhost:3000
npm run dev

```
- *You can adjust the array size on line 135 of jClock.js for that amount of stars to display on the screen.*

## Bugs & Temporary Solutions
- There may be a bug after running ``` npm run dev ``` that reads the following:

``` bash

The following dependencies are imported but could not be resolved:

  regClock.js (imported by /Users/Jack/Downloads/Jacky_Code/J-Clock/index.html)

Are they installed?

```
To fix this:
- type (CTRL + C) in terminal
- comment out line 55 on index.html
- move regClock.js to the Temp_Bug_Fix Folder
- run ``` bash npm run dev ``` again. 
- Then just simply 'un-comment' line 55 in index.html and move regClock.js out of the folder.
> *Current working on a solution to this issue.*

## Use of Project
- This project is straightforward with its intended purpose, to tell time. You can just look at the clock to tell you the time, however, when do you ever get the opportunity to practice telling time when no presence of time is available? This will hopefully present a challenge to you. 

# Snapshots of Current Version

![Screenshot 2022-07-05 at 7 15 33 PM](https://user-images.githubusercontent.com/78707612/177444765-67e6e813-eb5b-4348-b3cf-96ab3cbc4d13.png)
![Screenshot 2022-07-05 at 7 16 05 PM](https://user-images.githubusercontent.com/78707612/177444778-926f9d6e-07d8-49b5-9257-2837a0c2b79a.png)
> 10,000 stars displayed on these images.


