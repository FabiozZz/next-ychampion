import React from 'react';
import Head from 'next/head';

const HeadApp = ({title=''}) => {
    return (
        <Head>
            <title>Y-Champion{title?` | ${title}`:null}</title>
        </Head>
    );
};

export default HeadApp;