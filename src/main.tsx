import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './_Components/Router/Router'
import { Toaster } from './components/ui/sonner'
import { Provider } from 'react-redux'
import { store } from './app/store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </StrictMode>
)
