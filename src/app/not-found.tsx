import { Button } from '@/components';
import { Box, Typography } from '@mui/material';

function NotFound() {
    return (
        <Box sx={{
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column'
        }}>
            <Typography variant='h5' component='h1' mb={2}>
                404 | Page Not Found
            </Typography>

            <Button role='link' href='/' >Go home</Button>
        </Box>
    );
}

export default NotFound;
