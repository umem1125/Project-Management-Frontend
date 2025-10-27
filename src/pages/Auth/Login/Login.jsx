import { Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import AuthLayout from '../AuthLayout/AuthLayout';

import TextField from '@/components/ui/Forms/TextField';
import services from '@/services';
import session from '@/utils/session';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await services.auth.login(formValues);
      session.setSession(response.data.data.access_token);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Stack
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
        width={'100%'}
      >
        <Paper
          sx={{
            padding: 2,
            width: 500,
          }}
        >
          <Typography
            variant="h5"
            component={'h1'}
            align="center"
            marginBottom={2}
          >
            Masuk
          </Typography>
          <Stack
            flexDirection={'column'}
            gap={1}
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField label={'Email'} control={control} name="email" />
            <TextField label={'Password'} control={control} name="password" />
            <Button type="submit" variant="contained" fullWidth>
              Masuk ke akun anda
            </Button>
            <Button
              onClick={() => navigate('signup')}
              type="button"
              variant="text"
              fullWidth
            >
              Daftar Baru
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </AuthLayout>
  );
};

export default Login;
