import './App.css';
import { useState } from 'react';
import Axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')

  const [employeesList, setEmployeesList ] = useState([])

  function AddEmployee() {
    console.log("name", name)
    Axios.post("http://localhost:3009/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary,
    }).then(() => {
      console.log("success")
    }).catch((err) => console.log(err))
  }

  const getEmployees = () => {
    Axios.get("http://localhost:3009/employees").then((response) => {
      setEmployeesList(response.data)
    })
  }

  return (
    <div className="App">
      <div className='info'>
      <label>Name: </label>
      <input 
      type='text'
      onChange={(e) => setName(e.target.value)}
      />
      <label>Age: </label>
      <input 
      type='number' 
      onChange={(e) => setAge(e.target.value)}
      />
      <label>Country: </label>
      <input 
      type='text' 
      onChange={(e) => setCountry(e.target.value)}
      />
      <label>Position: </label>
      <input 
      type='text' 
      onChange={(e) => setPosition(e.target.value)}
      />
      <label>Salary(per annum): </label>
      <input 
      type='text' 
      onChange={(e) => setSalary(e.target.value)}
      />
      <button onClick={AddEmployee}>Add Employee</button>
      </div>  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    <div className='employees'>
      <button onClick={getEmployees}>Show Employees</button>
    </div>
    {employeesList.map((val, key) => {
      return (<div className='employee'>
        <h4>Name: {val.name}</h4>
        <h4>Age: {val.age}</h4>
        <h4>Country: {val.country}</h4>
        <h4>Position: {val.position}</h4>
        <h4>Salary: {val.salary}</h4>
        </div>
    )})}
    </div>
  );
}

export default App;
