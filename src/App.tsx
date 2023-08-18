import React, { useState } from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/esm/Button';
import Navbar from './components/Navbar/Navbar';

// FastAPI API url link
const API_URL: string = 'http://127.0.0.1:8000/api/';

const App: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>();
  // const [isFileDownloaded, setIsFileDownloaded] = useState<boolean>(false);
  const [downloadedFileURL, setDownloadedFileURL] = useState<string>();
  const [descriptionText, setDescriptionText] = useState<string>();

  // Set video url in input
  const onSetVideoUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
    console.log(videoUrl);
  };

  // Submit handler on submition the form
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setDescriptionText('Your video is loading...');

    // POST request to the API
    fetch(`${API_URL}get_video/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: videoUrl
      }),
    }).then(res => {
      return res.json()
    })
      .then((data) => {
        setDownloadedFileURL(data.file_path);
        setDescriptionText('Your video has been downloaded successfully!');
      })
      .catch(error => console.log(error));
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="containter-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div className={`${styles['font-default']} text-center`}>
              <h1>YT-sounds.io</h1>
              <h3>Download your favorite video or music from YouTube!</h3>
              <h4>Paste video url to download</h4>
            </div>
          </div>
          <form
            className='col-lg-3 d-flex justify-content-center mt-5'
            onSubmit={submitFormHandler}
            method="post">
            <input
              type="url"
              onChange={onSetVideoUrlHandler}
              name="video-url-input"
              placeholder='Paste your url'
              className='form-control mr-2' />
            <Button type='submit'>Submit</Button>
          </form>
          <div className="col-lg-12 mt-4 d-flex justify-content-center">
            {descriptionText}
            {downloadedFileURL && <a href={downloadedFileURL} target='blank' download>Here is a link</a>}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default App;
