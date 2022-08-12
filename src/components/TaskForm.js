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
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label htmlFor="title" className='block text-xs font-bold mb-2'>Task:</label>
      <input name='title' className='w-full p-2 rounded-md bg-zinc-600 mb-2' type="text" placeholder='title' value={task.title} onChange={handleChange} />
      <label htmlFor="description" className='block text-xs font-bold mb-2'>Description:</label>
      <textarea name="description" className='w-full p-2 rounded-md bg-zinc-600 mb-2' placeholder="description" value={task.description} onChange={handleChange}></textarea>
      <button className='bg-indigo-600 px-2 py-1'>save</button>
    </form>
  )
}
