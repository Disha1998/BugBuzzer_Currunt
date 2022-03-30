import React from 'react'
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Bugs from './components/Bugs';
import Compaigns from './components/Compaigns';
import QandAList from './components/QandAList';
import BountyWinners from './components/BountyWinners';
import Footer from './components/Footer';
// import DetailBounties from './components/DetailBounties';
import DetailQandA from './components/DetailQandA';
import {Routes,Route,}from "react-router-dom";
import DashBoard from './Dashboard'
import DashboardNav from './components/DashboardNav';
import Detailbutton from './components/Detailbutton';
import QandAform from './components/QandAform';

const App = () => {
  return (
    <>

 {/* <Navbar /> */}

{/* <Intro />
<Bugs />
<Compaigns />
<QandAList />
<BountyWinners /> */}
<Container>
<DashboardNav/>
  <Routes>
          <Route path="Q&A/*" element={<DetailQandA />}/>
          <Route path="Compaigns/*" element={<Compaigns/>}/>
         <Route path="Detailbutton/*" element={<Detailbutton />} />

          <Route path="/" element={  <DashBoard />}/>
           {/* <Route path="/bounty" element={<DetailBounties />} /> */}
        </Routes>
        </Container>
        <Footer /> 

 </>
    )
}

export default App

  
