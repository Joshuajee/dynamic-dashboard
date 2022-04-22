import React from 'react';
import Dashboard from './components/Dashboard';
import Asset from './components/Asset';


const App = () => {
   
    return (
        <>
            <div className="navbar"> </div>

            <div className="app">
                <Asset />
                <Dashboard />
            </div>
        </>
    )
}

export default App