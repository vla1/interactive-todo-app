
import "./Todo.css"
const Todo=({text, completed, todo,todos,setTodos})=>{
    const handleCompletedTodo=()=>{
        setTodos(todos.map((x)=>{
            if(x.id === todo.id){
                return {
                    ...x, completed:!x.completed
                }
            }
            return x
        }))
    }
    const handleDeleteTodo=()=>{
        setTodos(todos.filter((x)=> x.id !== todo.id))
    }
    return(
        <li className={`todo-item ${todo.completed ? "completed": ''}`}>
            <p>{text}</p>
            <div className="btn-interaction">
                <button className="btn complete-btn" onClick={handleCompletedTodo}> <i className="fas fa-check" /></button>
                <button className="btn trash-btn" onClick={handleDeleteTodo}><i className="fas fa-close" /></button>
            </div>
        </li>
    )
}
export default Todo