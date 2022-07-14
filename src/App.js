import { Route, Routes, BrowserRouter } from "react-router-dom";
// COMPONENTS
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import { CategoryProvider } from "./context/categoryContext";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
