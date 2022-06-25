import themeOptions from '../theming';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const lateMarker = (trainTimely) => {
  return (
    test
  )
};

const ManualTrainBox = ({ trainObj, clickable, greyed = 'false' }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const schDep = new Date(trainObj.origSchDep);

  let clickableClass = "";
  let greyedClass = "";

  //console.log('clickable: ' + clickable)
  //console.log(clickable != 'false')

  if (clickable != 'false') {
    clickableClass = " clickableThing";
  }

  if (greyed != 'false') {
    greyedClass = " alreadyExists";
  }

  //dont ask
  const velocity = trainObj.velocity ? trainObj.velocity : 0;

  //thanks norfolk southern
  const trainTimely = trainObj.trainTimely ? trainObj.trainTimely : "No Data";

  /*
  return (
    <article className={"card trainCard" + clickableClass + greyedClass}>
      <div className="meta">
        <div className="title">
          <h3>{trainObj.routeName}</h3>
          <div className={"status " + trainTimely.toLowerCase().split(' ').join('-')}>{trainTimely}</div>
        </div>
        <p className="route">{months[schDep.getMonth()]} {schDep.getDate()}, {schDep.getFullYear()} - {trainObj.origCode} --&gt; {trainObj.destCode}</p>
        <p className="route"><span className="tag">Speed: </span>{velocity.toFixed(2)} mph</p>
        <p className="location"><span className="tag">Next Stop:</span> {trainObj.eventName} ({trainObj.eventCode})</p>
      </div>
      <div className="number number-small">{trainObj.trainNum}</div>
    </article>
  );
  */

  //sx={{ mb: 1.5 }} 

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
        <CardActions sx={{ p: '16px' }}>
          <Button variant="outlined" size="large">View More</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  )
};

export default ManualTrainBox;