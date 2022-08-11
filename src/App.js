import './App.css';
import { TaksForm } from './components/TaskForm';
import { TaksList } from './components/TaskList';


function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaksForm />
      <TaksList />
    </div>
  );
}

export default App;
