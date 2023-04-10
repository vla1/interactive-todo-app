import Todo from "../../Todo/Todo"
import './TodoList.css'
import ButtonFilter from "../Button/ButtonFilter"
const TodoList=({todos, setTodos, filteredTodos,status, setStatus,count})=>{
    const handleClearCompletedTodos=()=>{
        const clear=todos.filter((todo)=>!todo.completed)
        setTodos(clear)
        setStatus("all")
    }
    return(
        <>
        <div className="todo-list-container">
            {filteredTodos.length === 0 ?
            (<p className="info-list">Empty Todo List</p>) :
                (<ul className="todo-list">
                    {filteredTodos.map((todo)=>(
                        <Todo
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
            </ul>)}
            <div className="buttons-filter buttons-filter-desktop">
                <div className="todos-count">{count.length} todos left</div>
                <div className="buttons-filter-component ">
                    <ButtonFilter
                    status={status}
                    setStatus={setStatus}
                    />
                </div>
                <div>
                    <button className="btn" onClick={handleClearCompletedTodos}>Clear Completed</button>
                </div>
            </div>
            </div>

             {/* Mobile */}
            <div className="buttons-filter-mobile">
                <div className="buttons-filter-component ">
                <ButtonFilter
                    status={status}
                    setStatus={setStatus}
                    />
                </div>
            </div>
        </>
    )
}
export default TodoList