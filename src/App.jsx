// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="dark">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;