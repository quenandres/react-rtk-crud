import './App.css';
import { TaksForm } from './components/TaskForm';
import { TaksList } from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaksList />} />
          <Route path='/create-task' element={<TaksForm />} />
        </Routes>            
      </BrowserRouter>
    </div>
  );
}

export default App;
