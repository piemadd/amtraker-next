import Head from 'next/head';
import Dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import AutoTrainBoxTrainNum from '../components/trainBoxes/autoTrainBoxTrainNum';
import AboutSection from '../components/aboutSection';

import themeOptions from '../components/theming';
import { ThemeProvider } from '@mui/material/styles';

import { Accordion, AccordionSummary, AccordionDetails, Card } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TagsBlock from '../components/tags'

const Home = (() => {

  const router = useRouter()
  const MapWithNoSSR = Dynamic(() => import('../components/map'), {
    ssr: false
  });
  
  const [trainData, setTrainData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = ((e) => {
    setShowAll(e.target.checked)
  })

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const localParamsTemp = Object.fromEntries(urlSearchParams.entries());

    if (localParamsTemp.delete) {
      let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
      savedTrainsList = JSON.parse(savedTrainsList);

      let deleteString = `${localParamsTemp.n}-${localParamsTemp.d}`;
      delete savedTrainsList[deleteString];
      localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
      router.replace('/');
    }

    if (localParamsTemp.add) {
      let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
      savedTrainsList = JSON.parse(savedTrainsList);

      savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] = savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] ? savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] : [];

      localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));

      router.replace('/');
    }

    let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
    savedTrainsList = JSON.parse(savedTrainsList);

    let trainsList = Object.keys(savedTrainsList);

    console.log(savedTrainsList)

    for (let i = 0; i < trainsList.length; i++) {
      console.log(trainsList[i].split('-')[1] < new Date().getDate() - 3)
      console.log(trainsList[i].split('-')[1] > new Date().getDate() + 10)

      if (trainsList[i].split('-')[1] < new Date().getDate() - 3 || trainsList[i].split('-')[1] > new Date().getDate() + 10) {

        console.log('yeet ' + trainsList[i])

        delete savedTrainsList[trainsList[i]];
      }
    }

    console.log(savedTrainsList)

    localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
  }, [])

  //updating trains and putting on map
  useEffect(() => {
    let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
    savedTrainsList = JSON.parse(savedTrainsList);

    console.log('client')
    console.log("showAll: " + showAll + "(" + typeof showAll + ")")
    console.log(trainData)

    if (showAll) { //i stg...

      console.log('oh yeah use my data daddy')

      fetch('https://api.amtraker.com/v1/trains')
        .then((res) => res.json())
        .then((receivedTrainData) => {

          const finalTrainsList = [];
          const finalTrainsKeys = Object.keys(receivedTrainData)

          for (let i = 0; i < finalTrainsKeys.length; i++) {
            const tempTrainData = receivedTrainData[finalTrainsKeys[i]];
            for (let j = 0; j < tempTrainData.length; j++) {
              finalTrainsList.push(tempTrainData[j]);
              console.log(finalTrainsList.length)
            }
          }

          console.log(finalTrainsList)

          setTrainData(finalTrainsList);
        })
    } else {

      setTrainData([]);

      let trainKeys = Object.keys(savedTrainsList);
      for (let i = 0; i < trainKeys.length; i++) {
        console.log(trainKeys[i])
        fetch(`https://api.amtraker.com/v1/trains/${trainKeys[i].split('-')[0]}`)
          .then((res) => res.json())
          .then((receivedTrainData) => {

            for (let j = 0; j < receivedTrainData.length; j++) {
              if (new Date(receivedTrainData[j].origSchDep).getDate() == parseInt(trainKeys[i].split('-')[1])) {
                setTrainData(trainData => [...trainData, receivedTrainData[j]]);
              }

              console.log('setting train data for only saved trains')

              console.log(trainData)
            }
          })
      }
    }

    console.log(trainData)

  }, [showAll]);

  console.log('server')
  console.log("showAll: " + showAll + "(" + typeof showAll + ")")
  console.log(trainData)

  /*return(<>
    <h1>Amtraker is down for unscheduled maintnence</h1>
    <p>Due to a change on Amtrak&apos;s end of things, the Amtraker servers have gone down. I am working as fast as I can to bring the service back up, but this may take a few days as I have a full time job. In the mean time, I highly reccomend using the <a href="https://www.amtrak.com/track-your-train.html">official Amtrak Track your Train Map</a>. It has all of the same information as Amtraker, but in a less user friendly format.</p>
  </>)*/
  
  return (
    <ThemeProvider theme={themeOptions}>
      <Head>
        <meta name="google-site-verification" content="LQ5e8V57pRofd5ubP1-srhirE1L506Qs7Jf-c29y-5A" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <TagsBlock />
      <main className="screen">
        <section className="trainsBarAlign">
          <Accordion className="content" sx={{ bgcolor: themeOptions.palette.background.default}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className={"fg1"}/>}>
              Your Trains
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'grid', gap: '12px' }}>
              {
                trainData.map((entry) => {
                  return <AutoTrainBoxTrainNum key={`${entry.trainNum}-${new Date(entry.origSchDep).getDate()}`} trainNum={entry.trainNum} trainDate={new Date(entry.origSchDep).getDate()} clickable={true} />
                })
              }
              <Link href="../trains/new">
                <a className="trainBoxLink">
                  <p className="card trainCard newTrain clickableThing">+ New Train</p>
                </a>
              </Link>

              <Link href="../about">
                <a className="trainBoxLink">
                  <p className="card trainCard newTrain clickableThing">About Amtraker</p>
                </a>
              </Link>
            </AccordionDetails>
          </Accordion>
        </section>
      </main>

      <script async src="../scripts/menu.js"></script>

      <MapWithNoSSR trainData={trainData} />
      <span className="showAllTrains">
        Show All Trains
        <input type="checkbox" id="showAllTrains" name="showAllTrains" value="showAll" onClick={handleShowAll} />
      </span>
    </ThemeProvider>
  )
})

export default Home;

/*
                        <Link href="../about">
                            <a className="trainBoxLink">
                                <p className="card trainCard newTrain clickableThing">About Amtraker</p>
                            </a>
                        </Link>
            */