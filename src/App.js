import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';


const App = () => {
   
    return (
        <>
            <Navbar />
            <div className="app">
                <SideBar />
                <Dashboard />
            </div>
        </>
    )
}

export default App