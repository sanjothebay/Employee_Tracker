# Employee_Tracker_HW

https://sanjothebay.github.io/Employee_Tracker_HW/

https://github.com/sanjothebay/Employee_Tracker_HW


# Table of contents

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
3. [Tables](#Tables)
4. [INSERT INTO VALUES](#INSERT_INTO_VALUES)
5. [Submission Video](#Submission_Video)



## Instruction <a name="Instruction"></a>

![image](https://user-images.githubusercontent.com/67298961/103254681-e8150a80-494b-11eb-9f0a-e9c68ef25874.png)

Build a Team Profile Tracker command line application. The application will prompt the user If they would like To :
```
  * View All Emloyee`s,
  * View All Emloyee`s Roles,
  * Add Epmloyee To DataBase,
  * Update Employee`s Role ID,
  * Update Emplpoyee`s Manager ID,
  * Remove Emplpoyee From DataBase,
  * Remove Emplpoyee`s Role",
  * Exit,
  
```
The user can add a member to the Database. Update Roles ID and Managers ID.
They can also Remove an Employee from teh DataBase and or a Role Id.
When the user has completed building the team Member being added, 
The application will create an Table file that displays a nicely formatted team roster based on the information provided by the user. 


##User Concept:

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

##The application is using:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
The Inquirer Packet will need ot be exported you can do this by npm i 

The application will be invoked by using the following command:

```bash
node app.js  To run the App
npm run test To run t he tests 
```
* The App is Using the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user with question to procced with te application 

* The App Creates a command-line application that dynamically generates a professional `TABLE` file from a user's input using the 
[Inquirer package](https://www.npmjs.com/package/inquirer).

* The dependencies are, [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.
		[inquirer](https://www.npmjs.com/package/mysql) MYSQL Server Access.

![image](https://user-images.githubusercontent.com/67298961/103260703-42ba6080-4964-11eb-9d54-8d520b681bc2.png)

* The App is runing Node CLI to gather information about each employee.

* Below is an example of what the application looks like. when the Questions are competed.

![image](https://user-images.githubusercontent.com/67298961/103259053-6c23be00-495d-11eb-8770-a73fa29849b2.png)

![4rzin3](https://user-images.githubusercontent.com/67298961/103324466-48b84c00-4a0d-11eb-9906-c9ca092b468d.gif)

## Getting Started <a name="Getting_Started"></a>

* Created a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` so that the directory isn't tracked or uploaded to GitHub. 
this was done before installing any npm dependencies.

* This is where i Created the array of questions and exported the packages to use for the application.

![image](https://user-images.githubusercontent.com/67298961/103260796-9af16280-4964-11eb-9b73-fccdb4bfbe8c.png)

![image](https://user-images.githubusercontent.com/67298961/103260820-b0ff2300-4964-11eb-9602-3496ffa5bd37.png)

* included a `package.json` with the required dependencies. this was create by running `npm init` when the first set up of the project, before installing any 
dependencies.

* A walkthrough video that demonstrates the functionality of the Application `schemaCrude.js` and the Creation of the `TABLES` a link to the video is included.

 ---

##directory structure:

```
node_modeule 
.getignore/
package-lock.json/
package.json/
README.md/
schemaCrud.js
schemaSeed.sql
```

### Tables <a name="Tables"></a>
```
employee
roles
department
```

![image](https://user-images.githubusercontent.com/67298961/103255596-7a6add80-494f-11eb-8413-f7a50ae21f83.png)


### INSERT INTO VALUES <a name="INSERT_INTO_VALUES"></a>
```
INSERT INTO employee
INSERT INTO roles
INSERT INTO department
```
![image](https://user-images.githubusercontent.com/67298961/103255699-ed745400-494f-11eb-8303-32b83eef25b4.png)



## Submission Video <a name="Submission_Video"></a>

* Link to video demonstrating the entirety of the app's functionality 

Click Here:
[Project explanation]()



