'use client'
import Script from 'next/script';
const GoogleAnalytics = () => {
    return (
        <>
            {/* Load the Google Analytics script asynchronously */}
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-8FM0M2FB9E`}
            />

            {/* Inline script to initialize Google Analytics */}
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8FM0M2FB9E');
        `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
