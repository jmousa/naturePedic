This is a demo project to show my skills and ability in Cypress, 
the new GUI Framework that is taking the world by storm

The naturepedic.com website was chosen because it has most of the 
functionality of a typical enterprise website

The project was developed on a window 10 machine using JavaScript and VS code for an IDE, 
which is pretty typical for a development environment.

In order to create test data the chance module was used.

Installation instruction

1- open a command prompt and create a directory for your project.

    mkdir naturepedic

2- cd to the directory and install node.js if it is not installed
     See https://nodejs.org/en/   for instruction
    Node.js comes with npm which you can use to install other 
    modules

3- initialize your project as follow

   npm init

4- install cypress and the chance module using npm as follow

    npm install  cypress  --save-dev
    npm install  chance  --save-dev

5- Clone the repo

    git clone https://github.com/jmousa/naturePedic.git

6- cd to the integration directory and delete all the files in the
    example directory. You can also delete the example directory.

6- open cypress using the following command

    npm run start         this will open the cypress tools 

7- Click the "Run all spec" button to run all files.

8- To run all files in headless mode open cypress using the following command

    npm run test
