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
                    <title>About Amtraker</title>
                </Head>
        		<header>
                    <div>
            			<h2 className="clickable"><a onClick={() => ohShitGoBack()}>Back</a></h2>
            			<h1>About Amtraker</h1>
            			<h2></h2>
                    </div>
        		</header>
        
        		<main className="textSection">
        			<h1>FAQ: </h1>
                    <b>Q: Why did you build Amtraker? </b>
                    <p>A: To put it simply, Amtrak&apos;s tracker is just a hunk of junk. I wrote a blogpost about how terribly the API is designed very briefly (which can be read <a href="https://blog.replit.com/amtrak">here</a>). If you&apos;re more fluent with programming, just imagine numbers stored as strings, dates in a format far from standard, and timezones being essentially nonexistent. Additionally, the site doesn&apos;t work well on mobile <i>and</i> desktop, which is what I strived to improve upon. What came to be was the original version of Amtraker (still available <a href="https://beta.amtrak.cc">here</a>). One issue is that I was never really satisfied with it, mainly due to the fact that it didn&apos;t have a map, had terrible SEO (Search-Engine Optimization - terrible for search engines), and had really low quality. Because of this, I started rebuilding the application from the ground up starting in December of 2021 while simultaneously figuring out how Next.js worked. Now we are here, and here we are. I am very tired while writing this, could you tell?</p>
                    <br></br>
                    <b>Q: Why isn&apos;t the App on the App Store?</b>
                    <p>2 reasons: 1.) Apple doesn&apos;t allow Progressive Web-Apps (this) onto their store (yet?) and 2.) I don&apos;t have a mac so I couldn&apos;t publish the app regardless.</p>
                    <br></br>
                    <b>Q: Where is the source code?</b>
                    <p>A: Glad you asked and <a href="https://github.com/piemadd/amtraker-next">here</a>. </p>
                    <br></br>
                    <b>Q: Is there any way I can donate to the project?</b>
                    <p>A: Nope! Last time I tried, it was removed from the play store for having a donation link.</p>
                    <br></br>
                    <b>Q: I have a reccomendation for the project. Where do I direct my concerns?</b>
                    <p>Sure thing! You can either make an issue on <a href="https://github.com/piemadd/amtraker-next">github</a>, submit feedback/issues to the <a href="https://forms.gle/Am8PEHoxTnXP4SmW7">contact form</a>, send me an email, message me on Discord (piero#0001), or follow and DM me on my various social medias (@piemadd most places).</p>
                    <br></br>
                    <b>Some data I&apos;m seeing is incorrect.</b>
                    <p>Oh noes! Please take a/some screenshot(s) of what you&apos;re seeing (make sure the train number and day are recorded) and submit an issue on <a href="https://github.com/piemadd/amtraker-next">github</a>. I&apos;ll get to fixing it as soon as I can. If you&apos;re not on github, you can also submit feedback/issues to the <a href="https://forms.gle/Am8PEHoxTnXP4SmW7">contact form</a>.</p>
                    <h1>Other Stuff</h1>
                    <a href="https://amtraker.com/privacy.html">Privacy Policy</a>
        		</main>
            </>
        )
})

export default Home;