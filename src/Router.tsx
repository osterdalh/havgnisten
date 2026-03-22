import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ApplicationContainer } from './components/ApplicationContainer';
import { HomePage } from './pages/Home.page';
import { Produkter } from './pages/Produkter.page';
import { ProduktStorrelsePage } from './pages/ProduktStorrelse.page';
import { NotFoundPage } from './pages/NotFound.page';
import { Baerekraft } from './pages/Baerekraft';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Outlet />
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/produkter',
    element: (
        <Outlet />
    ),
    children: [
      {
        index: true,
        element: <Produkter />,
      },
      {
        path: ':storrelse',
        element: <ProduktStorrelsePage />,
      },
    ],
  },
   {
    path: '/baerekraft',
    element: (
        <Outlet />
    ),
    children: [
      {
        index: true,
        element: <Baerekraft />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
