import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import RootLayout from "./components/rootLayout";
import BlogPage from "./pages/blog";
import ProfilePage from "./pages/profile";
import Protected from "./gards/protectedRout";
import { useState } from "react";
import type { IUser } from './shared/interfaces/userInterface'

function App() {
  const navigate = useNavigate()
  const [user, SetUser] = useState<IUser | null>(null);

  const handleLogin = () => {
    SetUser({ name: "Avazbek", id: '1' })
  }

  const handleLogout = () => {
    SetUser(null)
  }

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      {user ? <button onClick={handleLogout}>LogOut</button> : <button onClick={handleLogin}>Login</button>}
      <button onClick={handleClick}> Go Back</button>

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog/:userId" element={<BlogPage />} />
          <Route element={<Protected user={user} />}>
            <Route path="profile" element={<ProfilePage />}>
              <Route index element={<h1>Pleace select option</h1>} />
              <Route path="settings" element={<h1>Settings page</h1>} />
              <Route path="info" element={<h1>Info page</h1>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
