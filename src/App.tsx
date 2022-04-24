import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableData from './screen/TableData';
import {Provider} from 'react-redux'
import store from './redux/store';



function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TableData />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;