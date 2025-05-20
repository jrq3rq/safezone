import React from 'react';
import RHAPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  return (
    <RHAPlayer
      src={src}
      autoPlay={false}
      showJumpControls={false}
      customAdditionalControls={[]}
      className="custom-audio-player"
      aria-label="PulseFlow audio session player"
    />
  );
};

export default AudioPlayer;