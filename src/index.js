import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div>Hello React!</div>;
};

//React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before React 18
//ReactDOM.render(<App />)
