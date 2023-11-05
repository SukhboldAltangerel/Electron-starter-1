import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/home'
import Page1 from '../pages/page1/page1'
import Page2 from '../pages/page2/page2'

const router = createBrowserRouter([{
   path: '/',
   element: <Home />
}, {
   path: '/page1',
   element: <Page1 />
}, {
   path: '/page2',
   element: <Page2 />
}])

export default router
