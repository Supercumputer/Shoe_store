import Home from "../page/Home/Home"
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout'
import Product from "../page/Product/Product"
import Contact from "../page/Contact/Contact"
import NewSpay from "../page/NewSpay/NewSpay"
import Login from "../page/Login/Login"
import Register from "../page/Register/Register"

export const publicRouter = [
    {
        path: '/login',
        component: Login,
    }, 
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
    {
        path: '/products',
        component: Product,
        layout: DefaultLayout
    },
    {
        path: '/contact',
        component: Contact,
        layout: DefaultLayout
    },
    {
        path: '/newspay',
        component: NewSpay,
        layout: DefaultLayout
    }
]

export const privateRouter = [
   
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
]