import React from "react";

import { Container } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import Bugs from "./components/Bugs";
// import Compaigns from "./components/Compaigns";
// import QandAList from "./components/QandAList";
// import BountyWinners from "./components/BountyWinners";
import Footer from "./components/Footer";
import DetailQandA from "./components/DetailQandA";
import Dashboard from "./Pages/Dashboard";
import {
       Routes,
    Route,
  }from "react-router-dom";
import DashboardNav from "./Pages/DashboardNav";
const App = () => {
  return (
    <>

      {/* <Navbar />

      <Container>
        <Intro />
        <Bugs />
        <Compaigns />
        <QandAList />
        <BountyWinners />
      </Container> */}
<Container>
<DashboardNav />
   <Routes>
          <Route path="Q&A/*" element={<DetailQandA />}/> 

           <Route path="/" element={<Dashboard/>} />
          
        </Routes> 
        </Container>

        <Footer />


 </>

  );
};

export default App;
