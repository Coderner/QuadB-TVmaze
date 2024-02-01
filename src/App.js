import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import ShowSummary from './components/ShowSummary';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/show/:showId",
      element:<ShowSummary/>
    }
  ])
  return (
    <div className='h-screen'>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
