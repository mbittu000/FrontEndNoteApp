import './App.css';
import Home from'./Home'
import Edit from'./Edit'
import View from'./View'
import Write from'./Write'
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
      <Route path="/view" element={<View/>}/>
      <Route path="/write" element={<Write/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
