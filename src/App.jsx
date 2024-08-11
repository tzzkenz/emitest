import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Feature from "./pages/Feature";
import { Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
}

export default App;
