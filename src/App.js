import React from "react";

import { Container } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import Bugs from "./components/Bugs";
import Compaigns from "./components/Compaigns";
// import QandAList from "./components/QandAList";
// import BountyWinners from "./components/BountyWinners";
import Footer from "./components/Footer";
import DetailQandA from "./components/DetailQandA";
import Dashboard from "./Dashboard";
import {
       Routes,
    Route,
  }from "react-router-dom";
import DashboardNav from "./components/DashboardNav";
import FormModal from "./components/FormModal";
import ParticipateForm from "./components/ParticipateForm";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <>

      {/* <Navbar />
      <Container>
        <Intro />
        <Bugs />
        <QandAList />
        <BountyWinners />
      </Container> */}

<Container>
<DashboardNav />
   <Routes>
   <Route path="bounty/*" element={<Compaigns />} />
   <Route path="Participate-form/*" element={< ParticipateForm />} />
          <Route path="Q&A/*" element={<DetailQandA />}/> 
          <Route path="Question-form/*" element={< FormModal />} />

           <Route path="/" element={<Dashboard/>} />
          
        </Routes> 

        </Container>

        <Footer />



 </>

  );
};

export default App;
