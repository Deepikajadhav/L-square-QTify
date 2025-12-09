import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Hero from './Components/Hero/Hero';
import Navbar from "./Components/Navbar/Navbar"; 
import AlbumDetail from './Components/AlbumDetails/AlbumDetails';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import Landing from './Landing';
import './App.css';

function App() {
  return (
     
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes>
       <Route path='/' Component={Landing}></Route>
       <Route path='/AlbumDetail/:Album_id' Component={AlbumDetail}></Route>
       </Routes>
       <AudioPlayer/>  
        </div>
        </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./Landing";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
