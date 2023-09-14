// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  // RouterProvider,
  Route,
  Routes,
  // Switch,
  Link,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050223";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils -Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1300);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };

  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/* <Navbar title="TextUtils " aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            {/* <Home /> */}
          </Routes>

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
