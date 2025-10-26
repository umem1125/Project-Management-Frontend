import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '../../../components/layouts/SidebarLayout';

const DetailProject = () => {
  return (
    <SidebarLayout
      pageTitle="Detail Project"
      breadcrumbs={[
        {
          label: 'Daftar Project',
          href: '/projects',
        },
        {
          label: 'Joko Widodo Adilit',
        },
      ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan detail project disini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default DetailProject;
