import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Home = (() => {

  const router = useRouter();

  const [backState, setBackState] = useState(false);

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

  return (
    <>
      <Head>
        <title>Amtraker Strike Solidarity</title>
      </Head>
      <header>
        <div>
          <h2 className="clickable"><a onClick={() => ohShitGoBack()}>Back</a></h2>
          <h1>Amtraker Strike Solidarity</h1>
          <h2></h2>
        </div>
      </header>

      <main className="textSection">
        <h1>Amtraker Strike Solidarity</h1>
        <p>To put this as simply as possible, I&apos;ll be giving a quick sum up in the 5 Ws, 1 H format.</p>
        <h3><u>Who</u> is striking?</h3>
        <p>The ~115,000 Class 1 Railroad Workers in the United States.</p>
        <h3><u>What</u> will happen?</h3>
        <p>To put it simply, we&apos;ll see a large part of american logistical infrastructure shut down. This will cost the economy something like ~$2bn each day. If we attempted to replace the ~115,000 rail workers with long haul truckers, it would take something in the ballpark of 467,000 of them. You can read more <a href="https://www.cnbc.com/2022/09/08/deadline-for-rail-strike-which-could-cost-2-billion-a-day-nears.html">here</a> about the impacts, though I should warn you that CNBC has an anti-union bias.</p>
        <h3><u>When</u> will the strike begin?</h3>
        <p>Nobody knows for sure, but strike authorization starts at 12:01 AM ET on September the 16th.</p>
        <h3><u>Where</u> will the strike have an impact?</h3>
        <p>Basically everywhere served by Class 1 rail in the United States, so basically everywhere.</p>
        <h3><u>Why</u> are they striking?</h3>
        <p>Rail workers have been without a new Union contract for multiple years now causing wages have quickly fall behind inflation. Along with more restrictive attendance policies which cause workers to miss important events (birthdays, anniversaries, etc) they also have also essentially left the workers without a way to get access to healthcare. This being because they are on call 24/7, where at any moment they could get called away from home for days at a time. These issues I have mentioned are barely scratching the surface, there are many more. I reccommend reading <a href="https://reddit.com/r/railroading">r/railroading</a>.</p>
        <h3><u>How</u> will Amtraker be affected?</h3>
        <p>I will be taking Amtraker servers offline during the strike, so while this website might load, the services powering parts of it (the train tracking) will stop working until I restart them upon completion of the strike.</p>
      </main>
    </>
  )
})

export default Home;