import themeOptions from '../theming';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const trainButtons = (clickable, buttonLink) => {
  console.log('clickable: ')
  console.log(clickable)
  if (clickable != 'false') {
    return (
      <CardActions sx={{ p: '16px' }}>
        <Button variant="outlined" size="large" href={buttonLink}>View More</Button>
      </CardActions>
    )
  } else {
    return <CardActions sx={{ p: '16px', pt: '0px' }}></CardActions>
  }
};

const ManualTrainBox = ({ trainObj, clickable, buttonLink = '', greyed = 'false' }) => {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const schDep = new Date(trainObj.origSchDep);

  //dont ask
  const velocity = trainObj.velocity ? trainObj.velocity : 0;

  //thanks norfolk southern
  const trainTimely = trainObj.trainTimely ? trainObj.trainTimely : "No Data";

  if (buttonLink.length == 0) {
    buttonLink = `/trains/${trainObj.trainNum}?d=${new Date(trainObj.origSchDep).getDate()}`;
  } 

  return (
    <ThemeProvider theme={themeOptions}>
      <Card sx={{ margin: '0px' }}>
        <CardContent sx={{ pb: '0px' }}>
          <Typography sx={{ fontSize: 14, display: 'flex' }} color="text.secondary" gutterBottom>
            {months[schDep.getMonth()]} {schDep.getDate()}, {schDep.getFullYear()}<Typography sx={{ ml: '6px', fontSize: 12 }} color="#fff" className={"status " + trainTimely.toLowerCase().split(' ').join('-')}>
              {trainTimely}
            </Typography>
          </Typography>
          <Typography variant="h5" component="div">
            {trainObj.routeName}
          </Typography>
          <Typography sx={{ fontSize: 16, display: 'flex' }} color="text.secondary">
            {trainObj.origCode} --&gt; {trainObj.destCode}
          </Typography>
          <Typography sx={{ fontSize: 16, display: 'flex' }} color="text.secondary">
            Speed:<Typography sx={{ ml: '4px',fontSize: 16 }} color="#fff">
              {velocity.toFixed(2)} mph
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: 16, display: 'flex' }} color="text.secondary">
            Next Stop:<Typography sx={{ ml: '4px',fontSize: 16 }} color="#fff">
              {trainObj.eventName} ({trainObj.eventCode})
            </Typography>
          </Typography>
        </CardContent>
        {trainButtons(clickable, buttonLink)}
      </Card>
    </ThemeProvider>
  )
};

export default ManualTrainBox;