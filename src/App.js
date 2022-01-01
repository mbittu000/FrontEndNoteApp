import './App.css';
import Home from'./Home'
import Edit from'./Edit'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">


    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
