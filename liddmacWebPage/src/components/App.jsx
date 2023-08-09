import React, { useEffect, useState } from 'react'
// import { Header } from './Header'
import axios from 'axios';
import { SecondSection } from './SecondSection';
import { Footer } from './Footer';
import { FirstSection } from './FirstSection';
import { Header } from './Header';

// import './js/jquery.js'
// import './js/plugins.min.js'
// import './js/functions.js'




export const App = () => {
    // const [data, setData] = useState(null);

    useEffect(() => {
        // Load multiple scripts dynamically using axios or fetch
        const scriptUrls = [
            'src/js/jquery.js',
            // 'src/js/plugins.min.js',
            'src/js/functions.js',
            // Add more script URLs as needed
        ];

        scriptUrls.forEach((scriptUrl) => {
            axios.get(scriptUrl)
                .then((response) => {
                    // console.log(response);
                    const script = document.createElement('script');
                    script.src = scriptUrl;
                    script.async = true;
                    document.body.appendChild(script);
                })
                .catch((error) => {
                    console.error('Failed to load script:', error);
                });
        });

        return () => {
            // Clean up the dynamically loaded scripts when the component unmounts
            scriptUrls.forEach((scriptUrl) => {
                const scriptElement = document.querySelector(`script[src="${scriptUrl}"]`);
                if (scriptElement) {
                    document.body.removeChild(scriptElement);
                }
            });
        };
    }, []);

    return (

        <div className='stretched'>
            <div className="clearfix">
                <Header />
                {/* <Body /> */}
                <FirstSection />
                <SecondSection />
                <Footer />
            </div>
        </div>
    )
}
