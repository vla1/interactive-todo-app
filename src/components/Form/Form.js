import './Form.css'

const Form=({inputText,setInputText, setTodos, todos})=>{

    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault()
        if(inputText !=='' && inputText !== ' ' && inputText.length>0){
            const todoObject={
                id:Math.random(),
                text:inputText,
                completed:false
            }
            setTodos([...todos,todoObject])
        }
        setInputText('')
    }

    return(
        <form id="form">
            <input
            type='text'
            className="input"
            value={inputText}
            onChange={inputTextHandler}
            placeholder='Create new todo'/>

            <button className="btn btn-submit" type='submit' onClick={submitTodoHandler}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </form>
    )
}
export default Form