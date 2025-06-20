import FoodItems from './components/FoodItems';
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';


function App() { 
//let foodItems =['dal','Green vegetable','Roti','Salad','Milk','Ghee'];
//let [textToShow ,setTextState] = useState();
let [foodItems, setFoodItems]=useState([]);

//console.log(`Current value of textState:${textToShow}`);

 const onKeyDown = (event)   =>    {
  if (event.key === 'Enter'){
    let newFoodItem = event.target.value;
    event.target.value = "";
    let newItems =[...foodItems, newFoodItem];
    setFoodItems(newItems);
   // console.log('Food value entered is ' +newFoodItem);
  }
};

  return ( 
    <>
  <Container>

  <h1 className="kg-heading">Healthy Food</h1>
 <FoodInput handleKeyDown={onKeyDown }></FoodInput>
 <ErrorMessage items={foodItems}></ErrorMessage>
  {/* <p>{textToShow}</p> */}
 <FoodItems items={foodItems}></FoodItems>

</Container>
</>

);
}
export default App;