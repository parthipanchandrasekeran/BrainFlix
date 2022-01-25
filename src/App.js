import "./App.css";
import VideoDetails from "./components/VideoList/VideoDetails";
import Header from "./components/Header";
import VideoInfo from "./components/VideoInfo";
import VideoContainer from "./components/VideoList/VideoContainer";

function App() {
  return (
    <div>
      <Header />
      <VideoContainer />
      <VideoInfo />
      <VideoDetails />
    </div>
  );
}

export default App;
