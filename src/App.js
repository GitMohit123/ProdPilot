import './App.css';
import {Routes,Route} from "react-router-dom"
import "./index.css"
import Main from './Pages/Main';
import Home from './Pages/Home';

function App() {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center">
     <Routes>
      <Route path='/*' element={<Main/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
