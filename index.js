const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const generatehtml = require('./dist/generateindex.html');



function getEmployee() {
  inquirer
    .prompt(questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'identification',
        message: 'What is your id number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
    ])
  employee.writeFile(fileName, generatehtml(data), (err) =>
    err ? console.log(err) : console.log('success!')


  );
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
  if (data.role === 'manager') {

  .then((data) => {
    const fileName = `${data.title}`;



    manager.writeFile(fileName, generatehtml(data), (err) =>
      err ? console.log(err) : console.log('manager was chosen!')


    );
  } else  if (data.role === 'engineer') {

    .then((data) => {
    const fileName = `${data.title}`;



    engineer.writeFile(fileName, generatehtml(data), (err) =>
      err ? console.log(err) : console.log('engineer was chosen!')
    );
  } else if (data.role === 'intern') {

      .then((data) => {
    const fileName = `${data.title}`;



    intern.writeFile(fileName, generatehtml(data), (err) =>
      err ? console.log(err) : console.log('intern was chosen!')
    );
  })

        
  

});
  }



    // function init() {
    //     inquirer
    //       .prompt(questions = [
    //         {
    //           type: 'input',
    //           name: 'title',
    //           message: 'What is your name?',
    //         },
    //         {
    //           type: 'input',
    //           message: 'what is your email?',
    //           name: 'email',
    //         },
    //         {
    //           type: 'input',
    //           message: "job title",
    //           name: 'position'
    //         },
    //       ])
    //       .then((data) => {
    //         const fileName = `${data.title}`;



    //         fs.writeFile(fileName, generatehtml(data), (err) =>
    //           err ? console.log(err) : console.log('success!')


    //         );
    //       });
    //   }

    //   init();





    const employeeEl = document.getElementById('employee');
    const termButton = document.getElementById('term-btn');

    const getEmployee = () =>
      fetch('/api/employee', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((data) => data);

    const renderEmployee = (employee) => {
      const cardEl = document.createElement('div');
      const cardImageEl = document.createElement('img');
      const cardBodyEl = document.createElement('div');
      const cardBodyTitle = document.createElement('div');

      cardImageEl.classList.add('image', 'p-5');
      cardEl.classList.add('card', 'p-5');
      cardBodyEl.classList.add('card-body', 'p-5');
      cardBodyTitle.classList.add('card-header', 'card-title', 'link');

      cardImageEl.setAttribute('src', employee.image_url);
      cardBodyTitle.innerHTML = employee.name;
      cardBodyEl.innerText = employee.description;
      cardEl.appendChild(cardBodyTitle);
      cardEl.appendChild(cardBodyEl);
      cardEl.appendChild(cardImageEl);
      petEl.appendChild(cardEl);
    };

    const buttonHandler = () =>
      getEmployee().then((response) => response.forEach((item) => renderEmployee(item)));

    termButton.addEventListener('click', buttonHandler);


    const getRole = () =>
      fetch('api/manager', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((data) => data);