import { createBrowserRouter,redirect } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashboardContent from '../pages/Dashboard'
import UsersContent from "../pages/UserContents";
import SettingsContent from "../pages/SetingsContent";
import ReportsContent from "../pages/ReportsContent";
import QuestionManagement from "../pages/ManagementSoal";
import QuestionDetail from "../pages/QuestionDetails";


const router = createBrowserRouter([
   {
     element : <MainLayout/>,
     children : [
        {
            element : <DashboardContent/>,
            path : '/'
        },
        {
         element : <UsersContent/>,
         path : '/user'
        },
        {
         element : <ReportsContent/>,
         path : '/Try-out'
        },
        {
         element : <SettingsContent/>,
         path : '/setings'
        },
        {
         element : <QuestionManagement/>,
         path : '/management/questions'
        },
        {
         element : <QuestionDetail/>,
         path : "/questions/:id"
        }
     ]
   }
])

export default router