import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Wilders from "./pages/Wilders";
import CreateOrEditWilder from "./pages/CreateOrEditWilder";
import Wilder from "./pages/Wilder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wilders" element={<Wilders />} />
          <Route path="wilders/:id" element={<Wilder />} />
          <Route path="wilders/:id/edit" element={<CreateOrEditWilder />} />
          <Route path="wilders/create" element={<CreateOrEditWilder />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
