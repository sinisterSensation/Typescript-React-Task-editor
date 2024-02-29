import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PathConsts } from "../routes/routes";

export type Task = {
    id: number;
    nameValue: string;
    contentValue: string;
}

const AddTask = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [id, setId] = useState<number>(1);
    const [nameValue, setNameValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>('');

    const navigation = useNavigate()

    const addTask = () => {
        const newTask = {id, nameValue, contentValue }; 
        setTasks([...tasks, newTask]); 
        setId(id + 1);
        setNameValue('');
        setContentValue('');
    };

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    const removeAllTasks = () => {
        setTasks([]);
    }

    return (
        <div>
            <div style={{display: 'flex', gap: 10}}> 
                <input  
                    disabled
                    type="number" 
                    value={id} 
                    onChange={e => setId(Number(e.target.value))}
                />
                <input  
                    type="text" 
                    value={nameValue} 
                    placeholder="Write task name..."
                    onChange={e => setNameValue(e.target.value)}
                />
                <textarea 
                    placeholder="Write task content..."
                    value={contentValue}
                    onChange={e => setContentValue(e.target.value)}
                />
                <button onClick={() => addTask()}>Add task</button>
                <button onClick={() => removeAllTasks()}>Remove all tasks</button>
                
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div 
                        id="taskCard"
                        style={{border: "1px solid rgb(17, 167, 218)", borderRadius: 7, marginTop: 5, padding: 5}}
                        key={index}
                        onClick={() => navigation(PathConsts.EDIT)}
                    >
                        <h2>{task.id}</h2>
                        <h2>{task.nameValue}</h2>
                        <div>{task.contentValue}</div>
                        <button onClick={() => removeTask(task.id)}>Remove this task</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddTask;