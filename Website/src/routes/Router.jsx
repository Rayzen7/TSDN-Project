import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../layouts/Home"
import Machine from "../layouts/Machine"
import ScrollTop from "../components/ScrollTop"
import Application from "../layouts/Application"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <ScrollTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/machine" element={<Machine/>}/>
                <Route path="/application" element={<Application/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router