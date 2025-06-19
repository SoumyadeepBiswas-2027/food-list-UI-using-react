const ErrorMessage =({items})=>{
   // let foodItems =['dal','Green vegetable','Roti','Salad','Milk','Ghee','chole'];
  
   return <>{items.length===0 && <h3>No entries of healthy food</h3> } </>;
  };
  export default ErrorMessage;