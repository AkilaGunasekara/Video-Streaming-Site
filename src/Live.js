import React from 'react';
import VideoPlayer from './VideoPlayer';
import './styles.css';

const Live = () => {
  const hlsEndpoint1 = 'https://ccf3786b925ee51c.mediapackage.us-east-1.amazonaws.com/out/v1/30fad54c61b74a11b245a17c03feeea9/index.m3u8';
  const hlsEndpoint2 = 'https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/a3f05eb7b9f5400a91b062b8fc116486/index.m3u8';

  return (
    <div className="container">
        <header>
          <h1>Video Streaming Site</h1>
        </header>

        <div className="video-player">
        <h2>Video Streaming 1</h2>
                {<VideoPlayer hlsEndpoint={hlsEndpoint1} />}
        </div>


        <div className="video-player">
        <h2>Video Streaming 2</h2>
                {<VideoPlayer hlsEndpoint={hlsEndpoint2} />}
        </div>
      
    </div>

  );
  
};

export default Live;
