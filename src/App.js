import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Header /> {/* Always visible */}
        <AppBody>
          <SideBar /> {/* Always visible */}
          <Routes>
            <Route path="/" element={ <></> }/>
            <Chat />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

// Styled Components for layout
const AppBody = styled.div`
  display: flex;
  height: 100vh; /* Takes up remaining space below the header */
`;
