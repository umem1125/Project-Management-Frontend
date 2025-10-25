import { Box, Button } from '@mui/material';
import { useState } from 'react';

import Modal from '../../components/ui/Modal';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState();

  const handleClose = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Box>
      <Button type="button" variant="contained" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <Modal open={openModal} handleClose={handleClose} title={'Modal Title'}>
        <Box
          sx={{
            padding: 2,
            width: 500,
          }}
        >
          Modal Field
        </Box>
      </Modal>
    </Box>
  );
};

export default Dashboard;
