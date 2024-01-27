import './App.css';
import Navbar from "./components/Navbar";
import Game from "./components/Game";

function App() {
  return (
    <div style={{position: "absolute", background: "black", width: "100%", height: "100%"}}>
         <Navbar />
         <Game />
      </div>
  );
}

export default App;
