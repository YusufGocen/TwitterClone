import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import './assets/css/tailwind.css'
import store from './store/store.jsx'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={routes}>
            <App />
        </RouterProvider>
    </Provider>

)
