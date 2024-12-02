import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import SpotDetails from './components/SpotDetails/SpotDetails';
import CreateSpotForm from './components/Navigation/CreateSpotForm/CreateSpotForm';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/spots/:spotId',
        element: <SpotDetails />
      },
      {
        path: '/spots/new',
        element: <CreateSpotForm />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
