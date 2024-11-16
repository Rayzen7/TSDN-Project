import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../layouts/Home"
import Machine from "../layouts/Machine"
import ScrollTop from "../components/ScrollTop"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <ScrollTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/machine" element={<Machine/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router