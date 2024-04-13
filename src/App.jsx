import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
};

export default App;
