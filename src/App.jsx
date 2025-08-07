import RenderRoutes from "./routes/RenderRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componments/headers/Navbar";
import MobileHeader from "./componments/headers/MobileHeader";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RenderRoutes />
      {/* <MobileHeader /> */}
    </BrowserRouter>
  );
}

export default App;
