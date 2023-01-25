import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function WorkBox({ img, title, des }) {
    return (
        <>
            <Box sx={{ width: "300px", textAlign: "center" }}>
                <Image src={img} alt={title} width={200} height={200} />
                <Typography variant="h4" mt={"8px"}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" mt={"16px"}>
                    {des}
                </Typography>
            </Box>
        </>
    );
}

function HowWorks() {
    return (
        <>
            <Container sx={{ p: "48px 0px" }}>
                <Typography variant="h2" textAlign={"center"} mb={"8px"}>
                    How QuikSlip Works
                </Typography>
                <Stack
                    sx={{
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    <WorkBox
                        img={"/img/work_1.png"}
                        title="Sign Up"
                        des="Sign up for QuikSlip through the link provided by your property manager to easily send parking passes to friends or register your own vehicle in your new complex."
                    />
                    <WorkBox
                        img={"/img/work_2.png"}
                        title="Parking Pass"
                        des="Sign up for QuikSlip and register your vehicle to gain access to your very own digital parking pass, ensuring you'll have a guaranteed spot in the lot."
                    />
                    <WorkBox
                        img={"/img/work_3.png"}
                        title="Invite Friends"
                        des="Easily invite friends and family over by sending them a digital visitor pass through QuikSlip. They'll have a designated spot to park for a limited time when visiting your complex."
                    />
                </Stack>
            </Container>
        </>
    );
}

export default HowWorks;
