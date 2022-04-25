import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableData from './screen/TableData';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TableData />} />
          </Routes>
        </Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;
