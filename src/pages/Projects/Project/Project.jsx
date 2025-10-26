import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '../../../components/layouts/SidebarLayout';

const Project = () => {
  return (
    <SidebarLayout pageTitle="Daftar Projects">
      <Paper
        sx={{
          padding: 2,
          backgroundColor: colors.deepPurple[100],
        }}
      >
        <Typography>Menampilkan daftar project disini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Project;
