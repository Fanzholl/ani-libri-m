import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage.tsx';
import Layout from './components/Layout.tsx';
import VideoPlayer from './components/player/VideoPlayer.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path="/video/:id" element={<VideoPlayer />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
