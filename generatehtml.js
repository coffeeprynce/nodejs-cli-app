const fs = require('fs');

function generatehtml(teamMembers) {
    for(let i = 0; i < teamMembers.length; i++) {
        if(engineer)
        generateEngineerCard(engineer)
        else if(manager)
        generateManagerCard(manager)
        else if(intern)
        generateInternCard(intern)


        fs.writeFile(fileName, generatehtml(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        )
}
};



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