import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from './Pages/Home.js';
import Login from './Pages/login.js';
import Signup from "./Pages/signup.js";
import Dashboard from "./Views/Dashboard.js";
const TaskPage = lazy(() => import("./Views/TaskPage.js"));




function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/app" element={<TaskPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
