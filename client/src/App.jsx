import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import CodeEditor from "./pages/codeEditor";
import Profile from "./pages/profile";
import './index.css'

function App() {

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/codeEditor" element={<CodeEditor />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App
