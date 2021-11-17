import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'Pages/MainPage';
import VideoPage from 'Pages/VideoPage';
import NotFound from 'Pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
