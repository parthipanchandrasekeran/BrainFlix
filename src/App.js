import "./App.css";
import VideoDetails from "./components/VideoList/VideoDetails";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";

function App() {
  return (
    <div>
      <Header />
      <HeroVideo />
      <VideoDetails />
    </div>
  );
}

export default App;
