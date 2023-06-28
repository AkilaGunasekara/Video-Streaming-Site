import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ hlsEndpoint }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;

    const initializePlayer = () => {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(hlsEndpoint);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current.play();
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsEndpoint;
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.play();
        });
      }
    };

    initializePlayer();

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [hlsEndpoint]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
