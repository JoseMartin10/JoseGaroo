import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Layout from "./layaout/layout"

function App() {
    return <>
    <Layout>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Sidebar />}/>
        <Route path="footer" element={<Footer />}/>
        <Route path="*" element={<Home />}/>
        </Routes>
        </Layout>
        </>
}
export default App