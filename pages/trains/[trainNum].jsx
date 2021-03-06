import { data } from "../../public/data/trainNums";
import TagsBlockTrain from '../../components/tagsTrain';
import TrainLinks from '../../components/trainLinks';
import AutoTrainBoxTrainNum from '../../components/trainBoxes/autoTrainBoxTrainNum';
import StationListTrainNum from '../../components/stationBoxes/trainNum'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export async function getStaticPaths() {

  const paths = Object.keys(data).map((number) => ({
    params: { trainNum: number }
  }))

  return { paths, fallback: false }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      trainNum: params.trainNum,
      trainName: data[params.trainNum]
    }
  }
}

export default function Train(params) {

  const router = useRouter();

  const [dataDates, setDataDates] = useState([]);
  const [backState, setBackState] = useState(false);
  const [embedState, setEmbedState] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setBackState(window.history.state.idx == 0);
  }, [])

  const ohShitGoBack = (() => {
    if (backState) {
      router.replace('/');
    } else {
      router.back();
    }
  })

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const localParamsTemp = Object.fromEntries(urlSearchParams.entries());

    setStartDate(localParamsTemp.d);
    setEmbedState((localParamsTemp.embed == 'true') ? true : false);

    console.log("embed state:")
    console.log(embedState)
    console.log("embed state raw:")
    console.log(localParamsTemp.embed)

    setLoading(true)
    fetch('https://api.amtraker.com/v1/trains/dates')
      .then((res) => res.json())
      .then((dates) => {
        let justDates = [];
        const datesKeys = Object.keys(dates); 

        
        for (let i = 0; i < datesKeys.length; i++) {
          console.log(dates[datesKeys[i]])
          if (dates[datesKeys[i]].includes(Number(params.trainNum))) {
            justDates.push(Number(datesKeys[i]));
          }
        }

        setDataDates(justDates);
        window.dataDates = justDates;
        //setDataDates(dates[params.trainNum]);
        setLoading(false)
      })

    console.log('checking for date idk')
    console.log(params.trainNum + " " + dataDates)
    console.log(params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate())))

    if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {

      let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
      savedTrainsList = JSON.parse(savedTrainsList);

      console.log('date exists so i should save new stuff idk!')
      console.log(savedTrainsList)
      console.log(params.trainNum)
      console.log(startDate)

      savedTrainsList[`${params.trainNum}-${startDate}`] = savedTrainsList[`${params.trainNum}-${startDate}`] ? savedTrainsList[`${params.trainNum}-${startDate}`] : [];

      localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
    }


  }, [])

  console.log('trainNum')
  console.log(params.trainNum)

  console.log('dataDates')
  console.log(dataDates)

  console.log('dataDates includes')
  console.log((dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate())))
  
  if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {
    return (
      <>
        <TagsBlockTrain trainNum={params.trainNum} trainName={params.trainName} trainDate={startDate} />
        <header>
          <div>
            <h2 className="clickable"><a onClick={() => ohShitGoBack()}>{embedState ? '' : 'Back'}</a></h2>
            <h1>{embedState ? 'Amtraker - Amtrak Train Tracker' : 'View Train'}</h1>
            <h2 onClick={() => router.push(`/?delete=true&n=${params.trainNum}&d=${startDate}`)} className="clickable">{embedState ? '' : 'Delete Train'}</h2>
          </div>
        </header>

        <main className="trainsHolder">
          <AutoTrainBoxTrainNum trainNum={params.trainNum} trainDate={startDate} clickable={'false'} />
        </main>

        <header>
          <h1>Stations</h1>
        </header>

        <main id="stationsHolder" className="stationsHolder">
          <StationListTrainNum trainNum={params.trainNum} trainDate={startDate} />
        </main>
      </>
    )
  } else {
    return (
      <>
        <TagsBlockTrain trainNum={params.trainNum} trainName={params.trainName} />
        <TrainLinks trainNum={params.trainNum} trainName={params.trainName} embed={embedState} />
      </>
    )
  }
}
