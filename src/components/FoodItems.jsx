import Item from "./Item";
const FoodItems = ({items})=>{
  let foodItems =['dal','Green vegetable','Roti','Salad','Milk','Ghee','chole'];


return( 
<ul className="list-group">
  {items.map(item=>(
  <Item key={item} 
  foodItem={item} 
  handleBuyButton={() => console.log(`${item} bought`)}> </Item>
  ))}


</ul>
);
};
export default FoodItems;