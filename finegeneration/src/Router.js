import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import History from './components/History'
import App from './App'
import Fine from './components/Fine'
import Help from './components/Help'

const router = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path: '/history',
                element:<History/> ,
            },
            {
                path: '/fine',
                element:<Fine/>
            },
            {
                path: '/help',
                element: <Help/>
            }
        ]
    }
])
export default router