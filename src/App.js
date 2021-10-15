import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componnents/Navbar";
import Header from "./componnents/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
