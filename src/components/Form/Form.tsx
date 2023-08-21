import styles from './Form.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

// FastAPI API url link
const API_URL: string = 'http://127.0.0.1:8000/api/';

const Form: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [isUrlValid, setIsUrlValid] = useState<boolean>(true);
  const [downloadedFileURL, setDownloadedFileURL] = useState<string>();
  const [descriptionText, setDescriptionText] = useState<React.JSX.Element>();

  // Set video url in input
  const onSetVideoUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  // Submit handler on submition the form
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Check if url is valid
    if (videoUrl?.startsWith('https://www.youtube.com/watch?v=')) {
      setIsUrlValid(true);
      setDescriptionText(<p>Your video is loading...</p>);

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
          setDescriptionText(
            <p className={`${styles['description-success']} fw-bold`}>
              Your video has been downloaded successfully!
            </p>
          );
        })
        .catch(error => setDescriptionText(
          <p className={`${styles['description-fail']} fw-bold`}>
            Oops...something went wrong. We couldn't download a file.
          </p>
        ));
    } else {
      setIsUrlValid(false);
      setDescriptionText(
        <p className={`${styles['description-fail']} fw-bold`}>
          You've entered an unvalid URL. Enter valid url.
        </p>
      )
    }
  }

  return (
    <React.Fragment>
      <form
        className='col-lg-3 d-flex justify-content-center mt-5'
        onSubmit={submitFormHandler}
        method="post">
        <input
          type="url"
          onChange={onSetVideoUrlHandler}
          name="video-url-input"
          placeholder='Paste your url'
          value={videoUrl}
          className={isUrlValid ? 'form-control mr-2' : `form-control mr-2 is-invalid`} />
        <Button type='submit'>Submit</Button>
      </form>
      <div className="col-lg-12 mt-4 d-flex justify-content-center">
        {descriptionText}
        {downloadedFileURL && <a href={downloadedFileURL} target='blank' download>Here is a link</a>}
      </div>
    </React.Fragment>
  )
};

export default Form;
