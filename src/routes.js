import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./Pages/DashboardLayout";
import DashboardNav from "./Pages/DashboardNav";
import Lending from "./Pages/Lending";
import DetailQandA from "./Pages/Q&Adetail";
import QandAmodal from "./Pages/QandAmodal";
import BugCompaigns from "./Pages/BountyCompaigns";
import Detailbutton from './Pages/compaignsDetailbtn'
import Participatebtn from "./Pages/compaignsParticipatebtn";
import Leaderboard from './Pages/Leaderboard';
import Questiondetail from "./Pages/Questiondetail"
import User from "./Pages/user"
import UserProfile from "./Pages/userProfile";
export default function Router() {
  return useRoutes([
    // <DashboardNav />,

    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path:"/dashboard/userProfile" , element:<UserProfile />
      },
    { path: "/dashboard/QueAns", element: <DetailQandA /> },

    {
      path: "/dashboard/Question-form",
      element: <QandAmodal />,
    },

    {
      path: "/dashboard/bugcampaigns",
      element: <BugCompaigns />,
    },
    // { path: "/", element: <Navigate to="/dashboard/app" /> },
{
  path : "/dashboard/bugcampaigns/detailbtn", element:<Detailbutton />
},
{
path:"/dashboard/bugcampaigns/praticipatebtn", element:<Participatebtn />
},
{
path:"/dashboard/leaderboard", element:<Leaderboard />
},
{
path:"/dashboard/QueAns/questiondetail" , element:<Questiondetail />
},
    {
      path: "/",
      element: <Lending />,
    },
    // <Footer />,
  ]);
}
