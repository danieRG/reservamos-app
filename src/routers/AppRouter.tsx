import { Routes, Route } from "react-router-dom";
import { Places, PlacesByName, PlaceDetail } from "../components/places";


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Places />} />
        <Route path="places/:name" element={<PlacesByName />} />
        <Route path="place/:name" element={<PlaceDetail />} />

    
  </Routes>
  )
}
