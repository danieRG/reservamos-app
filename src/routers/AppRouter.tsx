import { Routes, Route, Link } from "react-router-dom";
import { Places, PlaceDetail } from "../components/places";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Places />} />
        <Route path="detail" element={<PlaceDetail />} />
  </Routes>
  )
}
