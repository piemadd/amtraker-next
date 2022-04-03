const AboutSection = (() => {
    return (
        <main className="textSection">
			<h1>Amtraker - The Fast and Easy Amtrak Train Tracker</h1>
			
			<b>To get started, collapse this about section and press the &quot;New Train&quot; button above!</b>
			<br></br><br></br>
			<p>Amtraker is one of the fastest and easiest ways to track an Amtrak train, but it extends far beyond this website. There is an API, and embedding system, and more! Each train site <i>should</i> have the necessary stuff on it that certain websites will embed a mini train tracking map in themselves when you paste in an Amtraker URL. If you are a developer and are looking for the api on this project, check out api.amtraker.com/docs, it&apos;ll have everything you need to get started. I&apos;ll have a little more info on how the tracker works. </p>
			<br></br><br></br>
			<h1>How it Works</h1><br></br>
			<p>In theory, this is pretty simple. Take the data from amtrak, bring it into the site, and make it look good! In reality, it is much more difficult than that. Because of this, the data has to flow through the following sources before it gets to you:</p><br></br>
			<p>1. Amtraker API Grabs Amtrak Data and Encrypts it (yes encrypted)</p><br></br>
			<p>2. Amtraker API Cleans up and Separates Amtrak Data</p><br></br>
			<p>3. Amtraker API Rehosts the Cleaned Data</p><br></br>
			<p>4. Your device grabs the data from the Amtraker API</p><br></br>
			<p>5. A little bit more data cleaning and some beautification happens before the data is shown to you on this site.</p><br></br>
			<br></br><br></br>
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
    )
})

export default AboutSection;