import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import '@/assets/css/reset.css';
import '@/assets/css/fonts.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
