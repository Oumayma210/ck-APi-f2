import "./App.css";
import UserList from "./Components/UserList";
import Navigation from './Components/Navigation';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Error from './Components/Error';

function App() {
    return (
        <div className="App">
            <Navigation />
           
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<Error/>}/>

              <Route path="/userlist" element={ <UserList />}/>
            </Routes>
        </div>
    );
}

export default App;
