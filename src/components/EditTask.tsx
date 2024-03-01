import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Task } from './AddTask'; 
import { useGlobalState } from "../state/GlobalState";



const EditTask = () => {
    const { id } = useParams();
    const { currentTask, setCurrentTask } = useGlobalState();
    const navigation = useNavigate();

    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        if (currentTask && currentTask.id.toString() === id) {
            setTask(currentTask);
        } else {
            navigation("/");
        }
    }, [id, currentTask, navigation]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setTask(prev => {
            if (prev === null) return null; 
            return {
                ...prev,
                [name]: value
            } as Task; 
        });
    };

    const handleSave = () => {
        setCurrentTask(task);
        navigation("/");
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div id='editContainer'>
            <div id='editForm'>
                <input
                    id='editTaskname'
                    type="text"
                    name="nameValue" 
                    value={task.nameValue}
                    onChange={handleChange}
                />
                <textarea
                    id='editTaskcontent'
                    name="contentValue" 
                    value={task.contentValue}
                    onChange={handleChange}
                />
                <button onClick={handleSave}>Save Task</button>
            </div>
        </div>
    );
};

export default EditTask;