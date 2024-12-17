import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Videos from './pages/Videos';
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children:[
        { index:true, element: <Videos /> },
        { path: '/videos', element: <Videos /> },
        { path: '/videos/:keyword', element: <Videos /> },
        { path: '/videos/watch/:id', element: <Watch /> },
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}
// https://www.googleapis.com/youtube/v3/search
//   ?part=snippet
//   &relatedToVideoId={VIDEO_ID}
//   &type=video
//   &key={YOUR_API_KEY}