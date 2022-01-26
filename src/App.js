import "./App.css";
import Header from "./components/Header";
import VideoInfo from "./components/VideoInfo";
import VideoContainer from "./components/VideoList/VideoContainer";

function App() {
  return (
    <div>
      <Header />
      <VideoContainer />
      <VideoInfo />
    </div>
  );
}

export default App;
