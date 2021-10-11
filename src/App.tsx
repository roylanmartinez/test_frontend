import React, {useState} from 'react';
import './App.scss';
import AppContext from './AppContext'
import Navvar from './components/Navbar'

function App() {
    const [mainState, setMainState] = useState({})

    const context = {
        mainState,
        setMainState
    }

    

    return (
        <AppContext.Provider value={context}>
           
            <Navvar ></Navvar>
        </AppContext.Provider>
        
    );
}

export default App;