import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableData from './screen/TableData';
import {Provider} from 'react-redux'
import store from './redux/store';
import CircularLoader from './components/loader/CircularLoader';



function App() {
  return (
    <React.Fragment>
      <Suspense
          fallback={
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
              <CircularLoader />
            </div>
          }
        >
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TableData />} />
          </Routes>
        </Provider>
      </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;