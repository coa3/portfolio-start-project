import './App.css';
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {Skils} from "./layout/sections/skils/Skils";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skils/>
        </div>
    );
}

export default App;


    
