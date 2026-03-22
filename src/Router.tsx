import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/Home.page';
import { Produkter } from './pages/Produkter.page';
import { ProduktStorrelsePage } from './pages/ProduktStorrelse.page';
import { Baerekraft } from './pages/Baerekraft';
import { NotFoundPage } from './pages/NotFound.page';
import { Layout } from './Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },

        { path: 'produkter', element: <Produkter /> },
        { path: 'produkter/:storrelse', element: <ProduktStorrelsePage /> },

        { path: 'baerekraft', element: <Baerekraft /> },

        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: '/havgnisten/',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}