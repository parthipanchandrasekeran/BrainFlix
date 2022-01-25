import "./App.css";
import VideoDetails from "./components/VideoList/VideoDetails";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoInfo from "./components/VideoInfo";

function App() {
  return (
    <div>
      <Header />
      <HeroVideo />
      <VideoInfo />
      <VideoDetails />
    </div>
  );
}

export default App;
