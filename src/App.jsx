import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Table from './components/ui/Table';
import Pagination from './components/ui/Pagination';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box>
        <Table
          columns={[
            {
              id: 'tugas',
              label: 'tugas',
            },
            {
              id: 'status',
              label: 'status',
            },
          ]}
          data={[
            {
              id: 1,
              tugas: 'Tugas 1',
              status: 'Baru',
            },
            {
              id: 2,
              tugas: 'Tugas 2',
              status: 'Sedang dikerjakan',
            },
            {
              id: 1,
              tugas: 'Tugas 3',
              status: 'Selesai',
            },
          ]}
        />
        <Pagination
          count={10}
          onChange={(_, page) => {
            console.log('page', page);
          }}
        />
      </Box>
    ),
  },
  {
    path: '/login',
    element: (
      <Box>
        <Typography variant="h1">Login</Typography>
        <Link to={'/'}>Back to Home</Link>
      </Box>
    ),
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
