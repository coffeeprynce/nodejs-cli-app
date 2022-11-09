const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const generatehtml = require('./dist/generateindex.html');



function getManager() {
  inquirer
    .prompt(questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your manager name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
      {
      type: 'input',
      name: 'number',
      message: 'what is your phone number?',
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.number);
      manager.push('officeNumber')

      getRole(data.input)
    });

};




function getRole() {
  inquirer
    .prompt(questions = [
      {
        type: 'list',
        message: 'what is your role?',
        choices: ['manager', 'engineer', 'intern'],
        name: 'role',

      }


    ])

  .then((data) => {
    if(data.role === 'manager') {
      addManager()
  } else  if (data.role === 'engineer') {
    addEngineer()

  } else if (data.role === 'intern') {
    addIntern()

    class manager extends Employee {
      constructor(name, id, email, number)
    }


        
  

};
  });
function createTeam() {
  

}







    