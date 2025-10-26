import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const Setting = () => {
  return (
    <SidebarLayout pageTitle="Settings">
      <Paper
        sx={{
          padding: 2,
          backgroundColor: colors.lime[100],
        }}
      >
        <Typography>Menampilkan settings disini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Setting;
