import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App = ({ arg }) => {
  return <div> fsfsfsdf {`Hello, ${arg}!`}</div>;
};

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});