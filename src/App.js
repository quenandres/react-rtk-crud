import './App.css';
import { TaksForm } from './components/TaskForm';
import { TaksList } from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaksList />} />
            <Route path='/create-task' element={<TaksForm />} />
            <Route path='/edit-task/:id' element={<TaksForm />} />
          </Routes>            
        </BrowserRouter>
      </div>          
    </div>
  );
}

export default App;
