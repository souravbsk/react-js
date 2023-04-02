import './App.css';
import Mobile from './component/Mobile/Mobile';
import Todos from './component/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      {/* <Blog author ='neymar' heading="football" ></Blog>
      <Blog author ='cricket' heading="cricket"></Blog>
      <Blog author ='mortal' heading="pubg"></Blog> */}
      <Todos></Todos>
    </div>
  );
}

export default App;
