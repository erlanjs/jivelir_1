import Header from "./components/Home/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      {/* <Caregory /> */}
    </div>
  );
}

export default App;
