import React, { useState } from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/esm/Button';

const App: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [isFileDownloaded, setIsFileDownloaded] = useState<boolean>(false);

  // JSON 
  interface VideoUrl {
    url: string
  }

  // Set video url in input
  const onSetVideoUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  // Submit handler on submition the form
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <h1 className={`${styles['font-default']}`}>YT-sounds.io</h1>
      <h3 className={`${styles['font-default']}`}>Download your favorite video or music from YouTube!</h3>
      <h4 className={`${styles['font-default']}`}>Paste video url to download</h4>
      <form onSubmit={submitFormHandler} method="post">
        <input type="url" onChange={onSetVideoUrlHandler} name="video-url-input" placeholder='Paste your url' />
        <Button type='submit'>Submit</Button>
      </form>
      <a href="http://127.0.0.1:8000/uploads/test.mp3" target='blank' download='govno.txt'>Download</a>
    </React.Fragment>
  )
};

export default App;
