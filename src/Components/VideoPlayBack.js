import React, { useState } from 'react';
// import './VideoUpload.css';

const VideoPlayBack = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      const fileURL = URL.createObjectURL(file);
      setVideoSrc(fileURL);
    }
  };

  const handleDownload = () => {
    if (videoFile) {
      const link = document.createElement('a');
      link.href = videoSrc;
      link.download = videoFile.name;
      link.click();
    }
  };

  return (
    <div className="container">
      <div className="upload-box">
        <h2>Upload and Play Video Locally</h2>
        
        {/* Custom styled upload button */}
        <label className="custom-file-upload">
          Choose File
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </label>
        {videoFile && <p>{videoFile.name}</p>}
      </div>

      {/* Video Player */}
      {videoSrc && (
        <div className="video-preview">
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Download Button */}
      {videoSrc && (
        <button onClick={handleDownload} className="download-button">
          Download Video
        </button>
      )}
    </div>
  );
};

export default VideoPlayBack;
