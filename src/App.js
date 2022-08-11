import './App.css';
import {useSelector} from 'react-redux';
import { TaksForm } from './components/TaskForm';


function App() {

  const tasksState = useSelector(state => state.tasks);
  console.log('App');
  console.log(tasksState);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaksForm />
    </div>
  );
}

export default App;
