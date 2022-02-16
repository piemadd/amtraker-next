import Script from 'next/script'
const TagsBlock = () => {    
    return (
        <head>
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
            
    		<title>Amtraker</title>
    
    		<meta property="og:url" content="https://amtraker.com/"/>
    		<meta property="og:type" content="website"/>
    		<meta property="og:title" content="Amtraker | Amtrak Train Tracker"/>
    		<meta property="og:description" content="Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."/>
    		<meta property="og:image" content="https://amtraker.com/images/opengraph.png"/>
    
    		<meta name="twitter:card" content="summary_large_image"/>
    		<meta property="twitter:domain" content="amtraker.com"/>
    		<meta property="twitter:url" content="https://amtraker.com/"/>
    		<meta name="twitter:title" content="Amtraker"/>
    		<meta name="twitter:description" content="Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."/>
    		<meta name="twitter:image" content="https://amtraker.com/images/opengraph.png"/>
        
    		<link rel="manifest" href="manifest.json" />
    		<link rel="apple-touch-icon" href="images/icons/icon-72.png" />
    		<link rel="apple-touch-icon" href="images/icons/icon-512.png" />
    		<meta name="apple-mobile-web-app-status-bar" content="#212529" />
    		<meta name="theme-color" content="#212529" />
    
    		<meta name="title" content="PATT | Piero Amtrak Train Tracker"/>
    		<meta name="description" content="A simple and lightweight website and PWA to track Amtrak Trains."/>
    		<meta name="keywords" content="amtrak, amtrak train, amtrak train tracking, amtrak tracking, train tracking, tracking, empire builder, southwest chief, california zephr, northeast corridor, northeast regional, acela, acela express, superliner, amfleet, viewliner, america, trains, train"/>
    		<meta name="robots" content="index, follow"/>
    		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    		<meta name="language" content="English"/>
    		<meta name="revisit-after" content="1 minutes"/>
    		<meta name="author" content="Piero LLC"/>
    
    		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
        </head>
    );
};

export default TagsBlock;