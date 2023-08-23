import './App.css';
import Button from './component.js/Button';
import Card from './component.js/Card';
import Input1 from './component.js/Input';
import Select from './component.js/Select';
import Table from './component.js/Table';

function App() {


  let btnclick1 = () => {
    console.log("BUTTON 1 Clicked")
  }
  let btnclick2 = () => {
    console.log("BUTTON 2 Clicked");
  };

  let arr = [
    {
      id: 1,
      userName: "Anas",
      age: 18,
      institute: "NED",
      isActive: true,
      category: "student",
    },
    {
      id: 2,
      userName: "Ali",
      age: 20,
      institute: "JP",
      isActive: false,
      category: "student",
    },
  ];


   const Change = (event) => {
     const newValue = event.target.value;
     console.log(newValue)


   };
  
   const options = [
     { value: "Apple" },
     { value: "Mango" },
     { value: "Banana"},
   ];
  const data = [
    { id: 1, name: "Anas", age: 21},
    { id: 2, name: "Ali", age: 12},
    { id: 3, name: "Shahid", age: 32},
  ];
   const data2 = [
     { id: 4, name: "Khalid", age: 25 },
     { id: 5, name: "Shoaib", age: 30 },
     { id: 6, name: "Afridi", age: 22 },
   ];

  
  return (
    <div className="App">
      <h3>BUTTON</h3>
      <Button label="Click 1" btnClick={btnclick1} />
      <Button label="Click 2" btnClick={btnclick2} />
      <hr></hr>

      <h3>CARDS</h3>
      <Card
        id={arr[0].id}
        username={arr[0].userName}
        age={arr[0].age}
        institute={arr[0].institute}
        isactive={arr[0].isActive}
        category={arr[0].category}
      />
      <Card
        id={arr[1].id}
        username={arr[1].userName}
        age={arr[1].age}
        institute={arr[1].institute}
        isactive={arr[1].isActive}
        category={arr[1].category}
      />

      <hr></hr>

      <h3>INPUT</h3>
      <Input1 values="type here" type="text" change={Change} />
      <Input1 values="2" type="number" change={Change} />
      <hr></hr>

      <h3>Select</h3>
      <Select options1={options} />
      <br></br>
      <hr></hr>
      <h1>Table</h1>
      <Table data={data} />
      <Table data={data2} />
    </div>
  );
}

export default App;
