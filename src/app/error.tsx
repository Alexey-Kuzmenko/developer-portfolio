'use client';

import { Button } from '@/components';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ErrorWrapper({ error }: { error: Error }) {
    const router = useRouter();

    return (
        <Box sx={{
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column'
        }}>
            <Typography variant='h5' component='h1' mb={2} sx={{ textAlign: 'center' }}>
                Ops! Something went wrong.
            </Typography>

            <Typography variant='h5' component='h1' mb={2} sx={{ textAlign: 'center' }}>
                Error: {error.message}
            </Typography>

            <Button role='button' onClick={() => { router.back(); }}>Go back</Button>

        </Box>
    );
}