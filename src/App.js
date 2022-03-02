import React from "react"
import TodoItem from "./TodoItem";


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      items: [], 
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*chekChange(id){
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos :updateTodos
      }
    })
  }*/

  render(){
    return (
        <div className="todo-list">
          <h1>Список дел</h1>        
          <form onSubmit={this.handleSubmit}>          
            <input onChange={this.handleChange} value={this.state.text}/>
            <button> Добавить</button>          
          </form>
          <TodoItem items = {this.state.items} />
        </div>
    )
  }


  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text) {
      return;
    }
    let newItem = {
      text: this.state.text,  
     };
    
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
      
    }));
  }
}



/*
function App(){

  const [arr, setArr] = useState([' ']);
  const [value, setValue] = useState('');

  const result = arr.map((element, index) => {
    return  <p key={index}>{element}</p>;
  });

  function add(){
    setArr([...arr, value]);

  }

  function inputValue(event){
    setValue(event.target.value);
  }

  return (
  <div>
     <h1>Список дел</h1>
    <input value={value} onChange={inputValue} />
    <button onClick={add}> Добавить </button>
    {result}
  </div>
 
  )
}
*/
export default App