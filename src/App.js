import "./App.css";

import Navbar from "./components/Navbar";
import MedicineCards from "./pages/MedicineCard";
import MainPage from "./pages/MainPage";
import FaqSection from "./pages/FaqSection ";
import FeatureBadges from "./pages/FeatureBadges ";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "120px" }}>
        <MainPage />
        <MedicineCards />
        <FaqSection />
        <FeatureBadges />
        <Footer />
      </div>
    </div>
  );
}

export default App;
