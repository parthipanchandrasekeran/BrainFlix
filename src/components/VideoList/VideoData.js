export default function VideoData(props) {
  return (
    <div>
      <h2>{props.VideoInfo.title}</h2>
      <h2>{props.VideoInfo.channel}</h2>
      <h2>{props.VideoInfo.image}</h2>
    </div>
  );
}
