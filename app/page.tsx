import {Card, Grid, Typography} from '@mui/material';
import Video from '@/components/common/Video';
import MyCarousel from '@/components/carousel/MyCarousel';
import Loader from '@/components/loader/Loader';

const Home = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Card>
          <Video />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Loader />
      </Grid>
      <Grid item xs={6}>
        <MyCarousel />
      </Grid>
      <Grid item xs={6}>
        <Card
          className='w-full h-[360px] flex items-center justify-center'
          style={{
            background:
              'linear-gradient(109deg, #C5DCE4 25.3%, #DBB898 82.65%)',
          }}>
          <Typography className='text-[40px]'>Create CV with AI</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
