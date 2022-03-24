import { Grid, Skeleton } from '@mui/material';
import Stack from '@mui/material/Stack';


export const SkeletonCard = () => {
  return (
      <Grid 
        item
        mt={8}
        sx={{
            alignItems: 'center',
            display: 'flex',
        }}
    >
        <Stack spacing={1} ml={3} mr={3}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} ml={3} mr={3}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} ml={3} mr={3}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
    </Grid>
  )
}
