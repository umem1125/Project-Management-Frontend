import netowrk from '@/utils/network';

const auth = {
  login(payload) {
    return netowrk.post('/auth/login', payload);
  },
};

export default auth;
