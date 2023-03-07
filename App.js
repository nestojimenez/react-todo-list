const App = () => {

    const [todos, setTodos] = React.useState([
        {
          text: 'learn react',
          isCompleted: false,
        },
        {
          text: 'meet friend for lunch',
          isCompleted: false,
        },
        {
          text: 'build todo app',
          isCompleted: false,
        }   ,
        {
            text: 'buy conveyor',
            isCompleted: false,
          }      
      ]);

     
      const addTodo = (text)=>{
        const newTodos = [...todos, {text: text, isCompleted:false}];
        setTodos(newTodos);  
      }
      

      const removeTodo = (e) =>{
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
      }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>

                <div className="col-4">
                    <h1 className="m-3 p-3 text-center">My Projects ToDo List</h1>
                    <Todos removeTodo={removeTodo} todos={todos}/>
                    <Form addTodo={addTodo}/>
                </div>
                
                <div className="col-4"></div>
                
            </div>
        </div>
        

    </div>
  )
}


