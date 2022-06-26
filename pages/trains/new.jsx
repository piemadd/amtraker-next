import Head from 'next/head';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';
import ManualTrainBox from '../../components/trainBoxes/manualTrainBox';

function NewTrain() {

  const router = useRouter();

  const [trainData, setTrainData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [query, updateQuery] = useState('');

  useEffect(() => {
    setLoading(true)
    fetch('https://api.amtraker.com/v1/trains')
      .then((res) => res.json())
      .then((receivedTrainData) => {

        setTrainData(receivedTrainData);
        setLoading(false)
      })
  }, [])

  let trainListFull = [];

  let trainNums = Object.keys(trainData);
  for (let i = 0; i < trainNums.length; i++) {
    for (let j = 0; j < trainData[trainNums[i]].length; j++) {
      trainListFull.push(trainData[trainNums[i]][j]);
    }
  }

  const [alreadySavedTrains, setAlreadySavedTrains] = useState([]);
  useEffect(() => {
    setAlreadySavedTrains(Object.keys(JSON.parse(localStorage.getItem('savedTrains'))))
  }, [])

  const fuseOptions = {
    includeScore: true,
    threshold: 0.4,
    keys: ['trainNum', 'routeName', 'aliases', 'stations.code', 'stations.stationName']
  }

  const dataIndex = Fuse.createIndex(fuseOptions.keys, trainListFull)
  const fuse = new Fuse(trainListFull, fuseOptions, dataIndex);

  const results = fuse.search(query);
  const trainResults = query ? results.map(result => result.item) : trainListFull;

  const onSearch = (({ currentTarget }) => {
    updateQuery(currentTarget.value)
  })

  return (
    <>
      <Head>
        <title>
          Amtraker | New Train
        </title>
      </Head>
      <header className="newPageHeader">
        <div>
          <h2 className="clickable"><a onClick={() => router.back()}>Back</a></h2>
          <h1>New Train</h1>
          <h2></h2>
        </div>
        <div className="searchBoxHolder">
          <input type="text" id="searchBox" name="searchBox" placeholder="Search" value={query} onChange={onSearch} />
        </div>
      </header>

      <main className="trainsHolder newPage">
        {trainResults.map((trainDataInd) => {

          let greyed = 'false';
          console.log(alreadySavedTrains)
          if (alreadySavedTrains.includes(`${trainDataInd.trainNum}-${new Date(trainDataInd.origSchDep).getDate()}`)) {
            console.log(`${trainDataInd.trainNum}-${new Date(trainDataInd.origSchDep).getDate()}`)
            greyed = 'true';
          }

          let greyedLink = (greyed == 'true') ? ' alreadyExists' : '';

          let linkHref = (greyed != 'true') ? `/?add=true&n=${trainDataInd.trainNum}&d=${new Date(trainDataInd.origSchDep).getDate()}` : '';
          console.log(linkHref)

          console.log('greyed: ' + greyed)
          console.log('greyedLink: ' + greyedLink)

          return (
            <div key={`train-${trainDataInd.trainNum}-${new Date(trainDataInd.origSchDep).getDate()}`}>
              <ManualTrainBox trainObj={trainDataInd} clickable={'true'} buttonLink={`/?add=true&n=${trainDataInd.trainNum}&d=${new Date(trainDataInd.origSchDep).getDate()}`} greyed={greyed} />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default NewTrain;
