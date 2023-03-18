import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import FindComplex from "@/components/FindComplex";
import { Box, Container, Typography } from "@mui/material";
import HowWorks from "@/components/HowWorks";
import Footer from "@/components/Footer";
import PricingBox from "@/components/PricingBox";

// const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing </title>
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

            <Navbar bg="#ffffff" />

            <Container sx={{ textAlign: "center", pt: "120px", pb: "40px" }}>
                <Box>
                    <Image
                        src={"/img/mini_logo.png"}
                        alt={"Mini logo"}
                        width={64}
                        height={64}
                    />
                </Box>
                <Typography variant="h1" sx={{ mt: "24px", fontWeight: "400" }}>
                    Choose a Plan that works for your complex{" "}
                </Typography>
                <Typography sx={{ mt: "16px" }}>
                    Starting at $20 a month. All QuikSlip accounts include 2
                    admin users.
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{ pt: "24px", maxWidth: "690px", margin: "0 auto" }}
                >
                    By subscribing to a QuikSlip plan, you agree to the QuikSlip
                    <a href="#" style={{ textDecoration: "underline" }}>
                        {" "}
                        Terms and Service
                    </a>
                    . See the QuikSlip Privacy Policy to understand how data is
                    handled with this service.{" "}
                </Typography>
            </Container>

            <PricingBox />
            <Footer />
        </>
    );
}
