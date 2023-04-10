const ButtonFilter=({status, setStatus})=>{
    const handleStatusButton=(stat)=>{
        setStatus(stat)
    }
    return(
        <div className="btn-filter">
            <button className={status === "all"? "btn active": "btn"}
            onClick={()=>handleStatusButton('all')}>All</button>

            <button className={status ==="completed" ? "btn active": "btn"}
            onClick={()=>handleStatusButton('completed')}>Completed</button>

            <button className={status === "incompleted" ? "btn active": "btn"}
            onClick={()=>handleStatusButton('incompleted')}>Incompleted</button>
        </div>
    )
}
export default ButtonFilter