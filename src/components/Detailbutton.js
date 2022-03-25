import React from 'react'
import { Box } from '@mui/system'
import Avatar from '@mui/material/Avatar';

import { Container, Stack, Typography } from '@mui/material'

const Detailbutton = () => {
    return (
        <>
            <Container>
                <Stack direction="row" mt={20} mb={19} justifyContent="space-around" flexWrap='wrap'>

                    <Box sx={{ height: '193px', width: '300px', border: '1px solid black', background: '#FFFFFF', p: 1, m: 1, }}>
                        <Typography variant='h6' align='center'> Detail</Typography>
                    </Box>
                    <Box sx={{ height: '193px', mt: "5", width: '300px', border: '1px solid black', background: '#FFFFFF', p: 1, m: 1, }}>
                        <Typography variant='subtitle1' align='center'> Organized by</Typography>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, ml: "33%" }} />
                        </Stack>
                        <Typography variant='subtitle1' align='center' mt={3}> Name</Typography>

                    </Box>
                </Stack>

            </Container>
        </>
    )
}

export default Detailbutton