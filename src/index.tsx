import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Members from './routes/Members';
import LessonNotes from './routes/lessonNotes';
import UsefulLinks from './routes/Useful';
import Others from './routes/Others';
import Lecture from './components/Lecture';
import Welcome from './routes/Welcome';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/harandaa'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/members' element={<Members />} />
          <Route path='/lessons' element={<LessonNotes />}>
            <Route path=':lectureId' element={<Lecture />} />
          </Route>
          <Route path='/useful' element={<UsefulLinks />} />
          <Route path='/others' element={<Others />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Sorry, this page is empty!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
