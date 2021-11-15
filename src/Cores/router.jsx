import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'Pages/MainPage';
import VideoPage from 'Pages/VideoPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
