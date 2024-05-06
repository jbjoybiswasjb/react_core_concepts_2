import './App.css'
import Friends from './Friends';
import Players from './Players';
import State from './State';
import Users from './Users';

const HandleAlert = () => {
  alert('Alert.');
}

const HandleAlert1 = () => {
  alert('Alert 1.');
}

const HandleAddFive = (num) => {
  alert(5 + num);
}

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Players></Players>

      <State></State>

      <button onClick={HandleAlert}>Alert</button>
      <button onClick={HandleAlert1}>Alert</button>
      <button onClick={() => {HandleAddFive(2)}}>AddFive</button>
    </>
  )
}

export default App
