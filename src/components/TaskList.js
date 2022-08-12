
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

export const TaksList = () => {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Tasks {tasks.length}</h1>
        <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>
          Create task
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>
        {tasks.map(task => (
          <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
            <header className='flex justify-between'>
              <h3>{task.title}</h3>
              <div className='flex gap-x-2'>
                <Link className='bg-zinc-600 px-2 py-1 text-xs rounded-md' to={`/edit-task/${task.id}`}>Edit</Link>
                <button 
                  className='bg-red-500 px-2 py-1 text-xs rounded-md' 
                  onClick={() => handleDelete(task.id)}
                >delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
