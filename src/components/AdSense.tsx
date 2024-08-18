import Script from 'next/script'
import React from 'react'

const AdSense = () => {
    return (
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4301611357933777"
            crossOrigin="anonymous"
            strategy='afterInteractive'
        ></Script>
    )
}

export default AdSense