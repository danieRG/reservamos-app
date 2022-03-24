import { FC } from 'react';
import Box from '@mui/material/Box';
import SkeletonComponent from '@mui/material/Skeleton';


interface Props {
    isLoading: boolean;
}

export const Skeleton:FC<Props> = ({isLoading}) => {
  return (
      
    isLoading ? <Box sx={{ 
        width: '100%',
        mt: 10
    }}>
    <Box>
        <SkeletonComponent />
        <SkeletonComponent animation="wave" />
        <SkeletonComponent animation={false} />
    </Box>
    <Box sx={{
        mt: 2
    }}>
        <SkeletonComponent />
        <SkeletonComponent animation="wave" />
        <SkeletonComponent animation={false} />
    </Box>
  </Box>: null
  )
}
