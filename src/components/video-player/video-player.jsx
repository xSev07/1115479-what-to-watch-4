import React from "react";
// import PropTypes from "prop-types";

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

// VideoPlayer.propTypes = {
//   poster: PropTypes.string.isRequired,
//   videoPreview: PropTypes.string.isRequired,
//   isMuted: PropTypes.bool,
//   isPlaying: PropTypes.bool,
// };
