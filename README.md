# backend-Challenge

## Requirements
You must have node.js installed in order to run this project

## Instructions 
1. Git clone the project to your local machine
2. Run "npm start" in your terminal
3. Go to [http://localhost:3000/](http://localhost:3000/)
4. Now you are all set to check out the API. Have Fun!

## Contractor's Report 
This feature will allow you to search by a company's name, and return addresses of the projects they have worked on that had fire hazards.

* API Endpoint: '/contacts/:company'

1. In your URL Adress Bar, input the name of the company that you want to look up.
2. For Example: If you want to search the company "Capitol Electric Const"
3. You would go to http://localhost:3000/contacts/Capitol Electric Const

This should return you a JSON with the company's address information

![image](Users/isabelleyiu/Desktop/Contractors_Report.png?raw=true)

## City Report 
This feature will allow you to search by a block and a date, and return companies that has on-going projects near a fire violation 

* API Endpoint: '/permits/:block/:month/:date/:year'

1. In your URL Adress Bar, input the block and the date that you want to look up.
2. For Example: If you want to search the block 6178 with a date 03/06/2019
3. You would go to http://localhost:3000/permits/6178/03/06/2019

This should return you a JSON with the companies' contact information
