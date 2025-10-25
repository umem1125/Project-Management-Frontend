import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Dropdwon from '../../../components/ui/Dropdown';
import Avatar from '../../../components/ui/Avatar';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Avatar
        text={'Joko Widodo'}
        onClick={() => {
          console.log('handle click avatar');
        }}
      />
      <Dropdwon
        icon={<Settings />}
        options={[
          {
            label: 'Closed this project',
            onClick: () => {
              console.log('handle close project');
            },
          },
          {
            label: 'Edit Deadline',
            onClick: () => {
              console.log('handle update deadline project');
            },
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
