/*
* File: app.js
* Author: Nagy János
* Copyright: 2021, Nagy János
* Group: Szoft V
* Date: 2021-09-03
* Github: https://github.com/VivienCarmen/emp1.git
* Licenc: GNU GPL
*/
const tbody = document.querySelector('#tbody');

var empList = [
    {id:1, name: "Per Lajos" , city: 'Szeged', salary: 125, job: 'Munkanélküli'},
    {id:2, name: "Pista Péter" , city: 'Szeged', salary: 999, job: 'Chili paprika tesztelő'},
    {id:3, name: "Major Anna" , city: 'Miskolc', salary: 444, job:'Növény termesztő'},
    {id:4, name: "Beviz Elek" , city: 'Budapest', salary: 38500, job: 'Vízműves'},
    {id:5, name: "Nagy Béla" , city: 'Üröm', salary: 289, job: 'Gyári munkás'},
    {id:6, name: "Vagdalt Vilmos" , city: 'Szombathely', salary: 2001, job: 'Vagdalt'}
    
    
];
(function createTable() {
   empList.forEach((emp) => {
      console.log(emp.name)
      let tdId = document.createElement('td');
      let tdName = document.createElement('td');
      let tdCity = document.createElement('td');
      let tdSalary = document.createElement('td');
      let tdJob = document.createElement('td');

      let tr = document.createElement ('tr');

      tdId.textContent = emp.id;
      tdName.textContent = emp.name;
      tdCity.textContent = emp.city;
      tdSalary.textContent = emp.salary;
      tdJob.textContent = emp.job

      tbody.append(tr);
      tr.append(tdId);
      tr.append(tdName);
      tr.append(tdCity);
      tr.append(tdSalary);
      tr.append(tdJob);

   });
} )();
