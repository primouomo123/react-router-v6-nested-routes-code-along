import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* I can use path="" as well to keep it relative to the parent*/}
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
