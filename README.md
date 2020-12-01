# Team Profile Generator

## Description
This is a command-line application build using Node.js that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The user is prompted for information about the team manager, name, ID, email address, and office number, and is then presented with a menu where they can choose to add an engineer or intern to the team, or finish building their team. When an engineer is added, the user is prompted to enter the engineer's name, ID, email, and GitHub username. When an intern is added, the user is prompted to enter the intern's name, ID, email, and school name. 

When the user is finished building their team, they answer 'No' when prompted if they want to add more members, and the HTML file is generated and stored in the dist/ folder, along with a CSS stylesheet. Open the HTML file in the browser to see the finished Team Profiles Webpage!

[Click here to watch the full video walk-through of the application](https://drive.google.com/file/d/1a9JQOnhElIGJl2iVHOuwTbHT6asMaKVE/view)

Example generated webpage:

<img width="1390" alt="Screen Shot 2020-12-01 at 1 02 03 PM" src="https://user-images.githubusercontent.com/70179648/100787439-42688d00-33d9-11eb-9dcc-3385216f9386.png">

User Prompted input:

![Prompts](https://user-images.githubusercontent.com/70179648/100787327-177e3900-33d9-11eb-9325-7668ce8f3442.gif)


## Installation
Clone this repository and from the command line, run

    npm install
  
  to bring in all the necessary node modules. 
  
  ## Usage 
  Ensure all of the files are in your directory, from your command line run
  
      node index.js
      
  Answer all of the prompted questions and when your team is completed, you will see the generated HTML webpage in the dist/ folder! Open the HTML in your browser to see the finished Team Profile webpage complete with CSS styling. 
  
  ## Tests
  npm run test- tests for Employee, Manager, Engineer, and Intern:
  
  ![npm run test](https://user-images.githubusercontent.com/70179648/100787127-cc642600-33d8-11eb-90bb-750e2ed6d497.gif)
  
  ## Contributing
  Made by Tatum Stafford
  
  ## Questions
  * [GitHub Profile](https://github.com/tmstafford)
  * If you have additional questions, please contact <tatumstafford1@gmail.com>.
