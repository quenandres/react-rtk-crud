import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';


export const TaksForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();//Permite disparar eventos
  const navigate = useNavigate();
  const params   = useParams();
  const tasks    = useSelector(state => state.tasks);

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( params.id ) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }));
    }

    navigate('/');
  }

  useEffect(() => {
    if( params.id ) {
      const taskFound = tasks.find(task => task.id === params.id);
      if( taskFound ) {
        setTask( taskFound );
      } else {
        alert('Task not found');
        navigate('/');
      }
    }
  }, []);
  

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='title' value={task.title} onChange={handleChange} />
      <textarea name="description" placeholder="description" value={task.description} onChange={handleChange}></textarea>
      <button>save</button>
    </form>
  )
}
