import { router } from 'Frontend/generated/routes.js';
import { AuthProvider } from 'Frontend/util/auth';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react'

function App() {
  return (
      <NextUIProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NextUIProvider>
  );
}

createRoot(document.getElementById('outlet')!).render(createElement(App));
