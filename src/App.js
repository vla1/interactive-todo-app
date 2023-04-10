import { useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
function App() {
  const [inputText, setInputText]= useState([])
  const [todos, setTodos]= useState([])
  const [filteredTodos, setFilteredTodos]= useState([])
  const [status,setStatus]= useState('all')
  const [themeDark, setThemeDark]= useState(false)
  const [count, setCount]= useState(0)

  const filterHandle=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=> todo.completed===true))
      break;
      case 'incompleted':
        setFilteredTodos(todos.filter((todo)=>todo.completed ===false))
      break;
        default:
          setFilteredTodos(todos)
        break;
    }
  }

  const handleTheme=()=>{
    setThemeDark(!themeDark)
  }
  const countTodos=()=>{
    const remainTodos=todos.filter((todo)=> !todo.completed)
    setCount(remainTodos)
  }

  useEffect(()=>{
    filterHandle()
    countTodos()
  },[todos, status])

  return (
    <main className={`App ${themeDark? ("dark-mode") : "light-mode"}`}>
      <section className='container'>
     <Header
     handleTheme={handleTheme}
     themeDark={themeDark}/>
        <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        />

        <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        status={status}
        setStatus={setStatus}
        count={count}
        />
       
      </section>
    </main>
  );
}

export default App;
