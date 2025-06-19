import FoodItems from './components/FoodItems';
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';


function App() { 
let foodItems =['dal','Green vegetable','Roti','Salad','Milk','Ghee'];
let [textToShow ,setTextState] = useState("Food items entered by user");

console.log(`Current value of textState:${textToShow}`);

 const handleOnChange = (event)   =>    {
  console.log(event.target.value)
  setTextState(event.target.value);
};

  return ( 
    <>
  <Container>

  <h1 className="kg-heading">Healthy Food</h1>
   <ErrorMessage items={foodItems}></ErrorMessage>
 <FoodInput handleOnChange={handleOnChange}></FoodInput>
  <p>{textToShow}</p>
 <FoodItems items={foodItems}></FoodItems>

</Container>
</>

);
}
export default App;