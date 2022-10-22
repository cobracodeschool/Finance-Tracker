import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import './App.css'

function App() {
  return (
    <div id='app' className="grid grid-cols-1.5 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-4/5 sm:max-w-4xl sm:grid-cols-3 lg:grid-cols-3">
      <Main />
      <div>
      <div className="income"><Details title="Income" /></div>
      <div className="expense"><Details title="Expense" /></div>
      </div>
      
    </div>
  );
}

export default App;
