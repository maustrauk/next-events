import { Fragment } from "react";
import Head from 'next/head';

import Footer from "./main-footer";
import Header from "./main-header";




const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Next Events App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>            
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout;