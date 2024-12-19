import React,{useState} from "react";

function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState();
    function update(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
        setTasks(c=>[...c,newTask]);
        setNewTask("")}
    }
    function deleteTask(index){
        const temp = tasks.filter((_,i)=>i!==index);
        setTasks(temp);
    }
    function moveUp(index){
        if(index>0){
            let temp = [...tasks];
            [temp[index],temp[index-1]] = [temp[index-1],temp[index]];
            setTasks(temp);
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            let temp = [...tasks];
            [temp[index],temp[index+1]] = [temp[index+1],temp[index]];
            setTasks(temp);
        }
    }
    return (<>
        <h1>To.Do.List</h1>
        <div className="inputEl">
            <input tyep= "text" placeholder="Type in the task" value={newTask} onChange={update}></input>
            <button className="add" onClick={addTask}>Add</button>
            <button className="delA" onClick={()=>setTasks(c=>[])}>Delete all</button>
        </div>
        <div>
            <ol>
                {tasks.map((task, index) => <li key = {index}  >
                    <span className="tasksEl">{task}  </span>
                        <button className ="del" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className ="up" onClick={()=>moveUp(index)}>⬆</button>
                        <button className ="down" onClick={()=>moveDown(index)}>⬇</button>
                  
                    </li>

                )}
            </ol>
        </div>
    </>)
}
export default ToDoList
