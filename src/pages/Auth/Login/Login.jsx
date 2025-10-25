import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import DatePicker from '../../../components/ui/Forms/DatePicker/DatePicker';
import Select from '../../../components/ui/Forms/Select';
import TextField from '../../../components/ui/Forms/TextField';
import dayjs from 'dayjs';

const Login = () => {
  const { control, watch } = useForm({
    defaultValues: {
      filterDate: dayjs(),
      username: 'joko',
      category: 'Kategori 1',
    },
  });

  const username = watch('username');
  const category = watch('category');
  const filterDate = watch('filterDate');

  console.log('username:', username);
  console.log('category:', category);
  console.log('filterDate:', filterDate);

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ height: '100vh' }}
    >
      <Paper sx={{ width: 600, padding: 2 }}>
        <DatePicker name="filterDate" control={control} label="Choose Date" />
        <TextField name="username" control={control} label={'Username'} />
        <Select
          name={'category'}
          control={control}
          label={'Choose Category'}
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
