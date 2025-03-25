"use client"
import React, { useEffect } from 'react';
import Head from 'next/head';

const InstagramView = () => {
  useEffect(() => {
    // Ensure that the Elfsight script is loaded only on the client-side
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Instagram Feed</title>
      </Head>

      <div className="elfsight-app-20c59fa1-bdb4-44fc-a7b7-18a191a6c2eb" data-elfsight-app-lazy></div>
    </>
  );
};

export default InstagramView;
