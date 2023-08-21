import React from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="containter-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div className='text-center'>
              <h1>YT-sounds.io</h1>
              <h3>Download your favorite video or music from YouTube!</h3>
              <h4>Paste video url to download</h4>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </React.Fragment>
  )
};

export default App;
