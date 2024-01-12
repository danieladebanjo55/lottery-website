import "./App.css";
import ParticlesBg from "./Components/Particles/ParticlesBg";
import PreLoader from "./Preloader";

function App() {
  return (
    <>
      <ParticlesBg />
      <PreLoader />
      <div className="App">
        <h1>Hello Coders!</h1>
      </div>
    </>
  );
}

export default App;
