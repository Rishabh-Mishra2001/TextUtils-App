import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import { Routes, Route } from "react-router-dom";
// import About from "./components/About";

// import About from "./About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "rgb(213 221 228)";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#092544";
      showAlert("Dark mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact
          path="/"
          element={ */}
      <TextForm heading="Enter text to analyze" mode={mode} alert={showAlert} />
      {/* }
        ></Route>
      </Routes> */}
    </>
  );
}

export default App;
