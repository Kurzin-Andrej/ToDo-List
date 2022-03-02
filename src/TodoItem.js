import React from "react"

class TodoItem extends React.Component {
  render (){
    return (
      <div className="todo-item">   
        <ul>                     
            {this.props.items.map(item => 
              <li key={item.toString()}> 
                {item.text}
              </li>
            )}
          </ul>
      </div>
    )
  }  
}





export default TodoItem


























