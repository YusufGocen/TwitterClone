import {createBrowserRouter} from 'react-router-dom'
import Home from '../Components/MenuBar/Home'
import Explore from '../Components/MenuBar/Explore'
import Notification from '../Components/MenuBar/Notification'
import MainLayout from '../Components/MainLayout'
import Message from '../Components/MenuBar/Message'
import List from '../Components/MenuBar/List'
import Premium from '../Components/MenuBar/Premium'
import Profil from '../Components/MenuBar/Profil'
import Trends from '../Components/RightBar/Trends'
import ConnectPeople from '../Components/RightBar/ConnectPeople'


const routes=createBrowserRouter(
    [
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'explore',
                    element:<Explore/>
                },
                {
                    path:'notification',
                    element:<Notification/>
                },
                {
                    path:'message',
                    element:<Message/>
                },
                {
                    path:'List',
                    element:<List/>
                },
                {
                    path:'premium',
                    element:<Premium/>
                },
                {
                    path:'profil',
                    element:<Profil/>
                }
                ,
                {
                    path:'Trends',
                    element:<Trends/>
                },
                {
                    path:'ConnectPeople',
                    element:<ConnectPeople/>
                }
            ]
        },
        
    ]
)
export default routes;