import Script from 'next/script'
const TagsBlockTrain = ({ trainNum, trainName }) => {    
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
    
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-L3ZMMQZR55"></Script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('require', 'dnt')
                        gtag('config', 'G-L3ZMMQZR55', { page_path: window.location.pathname });
                    `,
                }}
            />
            
            <Script src="https://storage.googleapis.com/outfox/dnt_min.js"></Script>
            
    		<title>Amtraker | Amtrak Train {trainName} ({trainNum}) Tracker</title>
    
    		<meta property="og:url" content="https://amtraker.com/"/>
    		<meta property="og:type" content="website"/>
    		<meta property="og:title" content={"Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"}/>
    		<meta property="og:description" content="Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."/>
    		<meta property="og:image" content="https://amtraker.com/images/opengraph.png"/>
    
    		<meta name="twitter:card" content="summary_large_image"/>
    		<meta property="twitter:domain" content="amtraker.com"/>
    		<meta property="twitter:url" content="https://amtraker.com/"/>
    		<meta name="twitter:title" content={"Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"}/>
    		<meta name="twitter:description" content="Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."/>
    		<meta name="twitter:image" content="https://amtraker.com/images/opengraph.png"/>
        
    		<link rel="manifest" href="manifest.json" />
    		<link rel="apple-touch-icon" href="images/icons/icon-72.png" />
    		<link rel="apple-touch-icon" href="images/icons/icon-512.png" />
    		<meta name="apple-mobile-web-app-status-bar" content="#212529" />
    		<meta name="theme-color" content="#212529" />
    
    		<meta name="title" content={"Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"}/>
    		<meta name="description" content="Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."/>
    		<meta name="keywords" content={trainName + "Train Tracking, " + trainName + " Tracking, Amtrak " + trainName + " Train Tracking, Amtrak " + trainName + " Tracking, Amtrak " + trainName + ", Amtrak, Amtrak Train Amtrak Train Status, Amtrak Train Tracker, Amtrak Tracker, Amtrak Train Status Today, Amtrak Status, Amtrak Train Tracking, Amtrak Tracking, Train Tracking"}/>
    		<meta name="robots" content="index, follow"/>
    		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
    		<meta name="language" content="English"/>
    		<meta name="revisit-after" content="30 minutes"/>
    		<meta name="author" content="Piero LLC"/>
    
    		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
        </>
    );
};

export default TagsBlockTrain;