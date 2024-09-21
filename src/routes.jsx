import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Home/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
