
const Todos = ({removeTodo, todos}) => {
    
    
  return (
      <div>

          {todos.map((todo, i) => (
            <div className="row align-items-center m-1 p-1">
                <div className="col bg-primary border border-dark rounded">
                    <h2 key={i} id={i}>{todo.text} </h2>
                </div>
                <div className="col-1">
                    <i className="bi bi-trash3-fill text-danger" onClick={removeTodo}></i>
                </div>
                
                
            </div>
            
          ))}
          
      </div>
  )
}


