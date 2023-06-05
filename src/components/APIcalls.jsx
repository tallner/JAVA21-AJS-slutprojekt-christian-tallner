import React, { useState } from "react";

export default function APIcall(props) {
  // my states
  const [apiData, setApiData] = useState(null);
  const [employeeId, setEmployeeId] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');

  // Event handlers for the states
  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // my api calles
  function getAllEmployees(event) {
    event.preventDefault(); // Prevent the form submission from refreshing the page
    
    fetch('http://tallner2.chickenkiller.com/api/getallemployees')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function addRandomEmployees(event) {
    event.preventDefault(); // Prevent the form submission from refreshing the page

    fetch('http://tallner2.chickenkiller.com/api/addmanyrandomemployees')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function getOneEmployee(event) {
    event.preventDefault(); // Prevent the form submission from refreshing the page

    fetch(`http://tallner2.chickenkiller.com/api/getoneemployees/${employeeId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function deleteOneEmployee(event) {
    event.preventDefault(); // Prevent the form submission from refreshing the page

    fetch(`http://tallner2.chickenkiller.com/api/deleteemployee/${employeeId}`,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function addEmployee(event){
    event.preventDefault(); // Prevent the form submission from refreshing the page

    const employeeData = {
      age: parseInt(age),
      city,
      namn: name
    };

    fetch('http://tallner2.chickenkiller.com/api/addemployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  function updateEmployee(event){
    event.preventDefault(); // Prevent the form submission from refreshing the page

    const employeeData = {
      age: parseInt(age),
      city,
      namn: name
    };

    fetch(`http://tallner2.chickenkiller.com/api/updateemployee/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }



  

  return (
    <div>
      <div>

        <form key="apiForm" onSubmit={getOneEmployee}>
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
          <button type="submit">Get One Employee</button>
        </form>

        <form key="apiFormDelete" onSubmit={deleteOneEmployee}>
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
          <button type="submit">Delete Employee</button>
        </form>

        <button type="submit" onClick={getAllEmployees}>
            getAllEmployees
        </button>

        <button type="submit" onClick={addRandomEmployees}>
            addRandomEmployees
        </button>

        <form onSubmit={addEmployee}>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <button type="submit">Add Employee</button>
      </form>

      <form onSubmit={updateEmployee}>
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <button type="submit">Update Employee</button>
      </form>

      </div>
      
      
      <textarea value={apiData ? JSON.stringify(apiData) : ''} readOnly />
    </div>
  );
}
