const Form = ({addTodo}) => {

    const [value, setValue] = React.useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        addTodo(value);
        setValue('')
    }

  return (
    
    <form onSubmit={handleSubmit}>

         <div className="input-group">
            <input type="text" className="form-control input" aria-label="Username" value={value} placeholder ="Add Todo..." onChange={e => setValue(e.target.value)}/>
        </div>

    </form>
    
  )
}

