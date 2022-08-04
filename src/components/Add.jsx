import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, EmojiEmotions, Event, Image, PersonAdd, Videocam} from '@mui/icons-material'
import Anji3 from './images/anji3.jpg'

const StyledModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '2px'
})

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <Tooltip onClick={e=>setOpen(true)} title="Add Post" sx={{position:'fixed', bottom:10, left:10}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        {/*<Button onClick={handleOpen}>Open modal</Button>*/}
      <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={3}>
          <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
          <UserBox>
            <Avatar src={Anji3} sx={{ width:30, height: 30 }} />
            <Typography fontWeight={400} variant='span'>Oniyele Anjola</Typography>
          </UserBox>
          <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"         
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={2}>
          <EmojiEmotions />
          <Image />
          <Videocam />
          <PersonAdd />
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
          <Button>Post</Button>
          <Button>Schedule<Event /></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  )
}

export default Add

//when you're using flex, you can use the gap feature alongside