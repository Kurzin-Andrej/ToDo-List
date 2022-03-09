import React from "react";
import {useState} from "react";


let keys = 0;
if(localStorage.lenght!==0){
  keys = localStorage.length;
}


function App(){
  let [arr, setArr] = useState([]);
 /* if(localStorage.length!==0){
    for(let i = 0; i<localStorage.length; i++){
      setArr([...arr, localStorage.getItem(i)])
    }
  }*/
  let [value, setValue] = useState('');

  
  

  function add(){
    if(!value){
      return;
    }
    setArr([...arr, value]);
    localStorage.setItem(keys, value); 
    keys++;
  }
   

  function inputValue(event){
    setValue(event.target.value);
  }
  
  /*for(let i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(i))
  }
*/

  function remove(){
    //arr.splice(0, 1)
    let elem = document.getElementById("pic");
    elem.remove()
   }

  return (
  <div>
     <h1>Список дел</h1>
    <input value={value} onChange={inputValue} />
    <button onClick={add}> Добавить </button>
    {arr.map((element, index) => {
      return(
        <div id="pic" key={index}> 
          {element}
          <button className={index} onClick={remove} >Delete</button>
        </div>
      )
    })}
    
  </div>
  )

}


export default App




