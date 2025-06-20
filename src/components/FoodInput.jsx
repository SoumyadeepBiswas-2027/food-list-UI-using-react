import styles from "./FoodInput.module.css"
const FoodInput = ({ handleKeyDown }) =>{

// const handleOnChange = (event) =>{
//   console.log(event.target.value)
// };


return (
     <input 
        type="text" 
        placeholder="Enter Food Item here" 
        className={styles.foodInput}
        //onKeyDown={handleOnChange}  
        onKeyDown={handleKeyDown} 
        />
     );
};

export default FoodInput;