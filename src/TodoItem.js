import React from "react"

class TodoItem extends React.Component {
  constructor(){
    super();
    this.state = {
      key: [],
    }
    this.delSubmit = this.delSubmit.bind(this);
  }

  

  render (){
    return (
      <div className="todo-item">           
          <ul >                            
            {this.props.items.map(item =>
              <li key={item.text}> 
              {item.text}
              <form onSubmit={this.delSubmit}>
                <input type='button' value='Delete'/>
              </form> 
              </li> 
              
            )}              
          </ul>          
      </div>
    )    
  }  

  delSubmit(){
    this.setState(state =>({
      key: state.key(Math.random()),
    }))
  }

}





export default TodoItem


























