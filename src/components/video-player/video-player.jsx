import React from "react";

const VideoPlayer = React.forwardRef((props, ref) => {
  return (
    <video
      ref={ref}
      width="280"
      height="175"
    />
  );
});

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;
