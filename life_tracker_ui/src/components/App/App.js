import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Activity from "../Activity/Activity";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<NotFound />} />
            {/* <Route path="/products/:productId" element={<ProductDetail product={products} />} /> */}
            <Route path="/activity" element={<Activity />} />
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
