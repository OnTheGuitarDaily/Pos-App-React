import { Provider } from "react-redux"
import store from "./App/Store"
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom'
import LandingPage from "./Components/LandingPage/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<LandingPage/>}></Route> 
  )
)

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
