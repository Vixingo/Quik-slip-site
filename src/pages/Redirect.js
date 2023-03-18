import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import FindComplex from "@/components/FindComplex";
import { Box } from "@mui/material";
import HowWorks from "@/components/HowWorks";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Redirect() {
    return (
        <>
            <Head>
                <title>Redirect Portal</title>
                <meta
                    name="description"
                    content="Easily invite friends and family over by sending them a digital visitor pass through QuikSlip. They'll have a designated spot to park for a limited time when visiting your complex."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                sx={{
                    backgroundImage: "url(/img/hero_bg.png)",
                }}
            >
                <Navbar />
                <FindComplex />
            </Box>
            <HowWorks />
            <Footer />
        </>
    );
}
