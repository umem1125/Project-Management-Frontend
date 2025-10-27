import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router';

import sidebarLoader from './components/layouts/SidebarLayout/SidebarLayout.loader';
import authLoader from './pages/Auth/AuthLayout/AuthLayout.loader';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard';
import DetailProject from './pages/Projects/DetailProject';
import Project from './pages/Projects/Project';
import Setting from './pages/Settings';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    loader: sidebarLoader,
    element: <Dashboard />,
  },
  {
    path: '/login',
    loader: authLoader,
    element: <Login />,
  },
  {
    path: '/projects/:id',
    loader: sidebarLoader,
    element: <DetailProject />,
  },
  {
    path: '/settings',
    loader: sidebarLoader,
    element: <Setting />,
  },
  {
    path: '/projects',
    loader: sidebarLoader,
    element: <Project />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
