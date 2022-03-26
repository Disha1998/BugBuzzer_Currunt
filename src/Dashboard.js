import React from 'react'
import DashboardNav from './components/DashboardNav'
import Intro from './components/Intro';
import Bugs from './components/Bugs';
import QandAList from './components/QandAList';
import Compaigns from './components/Compaigns';
import BountyWinners from './components/BountyWinners'

const Dashboard = () => {
  return (
      <>
     <DashboardNav />
    <Intro />
    <Bugs />
    <Compaigns />
    <QandAList />
    <BountyWinners />
      
      </>   
 
    )
}

export default Dashboard