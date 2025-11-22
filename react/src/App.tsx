import { Route, Routes, useNavigate } from "react-router-dom";
import RootLayout from "./components/rootLayout";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="profile" element={<ProfilePage isActive={false} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
