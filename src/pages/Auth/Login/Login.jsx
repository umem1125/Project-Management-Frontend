import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import Select from '../../../components/ui/Select';
import TextField from '../../../components/ui/TextField';

const Login = () => {
  const { control, watch } = useForm();

  const username = watch('username');
  const category = watch('category');

  console.log('username:', username);
  console.log('category:', category);

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ height: '100vh' }}
    >
      <Paper sx={{ width: 600, padding: 2 }}>
        <TextField name="username" control={control} label={'Username'} />
        <Select
          name={'category'}
          control={control}
          label={'Pilih Kategori'}
          options={[
            {
              label: 'Kategori 1',
              value: 'Kategori 1',
            },
            {
              label: 'Kategori 2',
              value: 'Kategori 2',
            },
            {
              label: 'Kategori 3',
              value: 'Kategori 3',
            },
          ]}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
