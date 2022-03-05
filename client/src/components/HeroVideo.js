export default function HeroVideo(props) {
  return (
    <div className="Hero-container__main">
      <video
        className="Hero-container__main-video"
        controls
        poster={props.mainVideo}
      >
        No Support for Hero Image
      </video>
    </div>
  );
}
