import io from "socket.io-client";

const socket = io("http://localhost:9999")


function App() {
  const conn = () => {
    

  }

  return (
    <div className="App">
      <button onClick={conn} className="button">connect</button>
    </div>
  );
}

export default App;
