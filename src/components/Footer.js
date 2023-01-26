import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
function Footer() {
    const menu = [
        {
            itemName: "Questions",
            items: [
                {
                    title: "FAQ",
                    link: "#",
                },
                {
                    title: "info@quikslip.com",
                    link: "#",
                },
            ],
        },
        {
            itemName: "Get Started",
            items: [
                {
                    title: "How it works",
                    link: "#",
                },
            ],
        },
        {
            itemName: "For Property Managers",
            items: [
                {
                    title: "Features",
                    link: "#",
                },
                {
                    title: "Get QuikSlip",
                    link: "#",
                },
            ],
        },
        {
            itemName: "Information",
            items: [
                {
                    title: "Our Mission",
                    link: "#",
                },
            ],
        },
    ];
    return (
        <>
            <Box sx={{ backgroundColor: "#0C3F85", p: "47px 0" }}>
                <Container>
                    <Grid container>
                        {menu.map((data) => {
                            return (
                                <Grid item xs={6} md={3} sx={{ p: "10px" }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#fff", pb: "8px" }}
                                    >
                                        {data.itemName}
                                    </Typography>
                                    <List>
                                        {data.items.map((e) => {
                                            return (
                                                <ListItem
                                                    disablePadding
                                                    sx={{ pb: "8px" }}
                                                >
                                                    <Link href={e.link}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={{
                                                                textDecoration:
                                                                    e.title.includes(
                                                                        "@"
                                                                    )
                                                                        ? "underline"
                                                                        : "",
                                                                color: "#C6C6C6",
                                                            }}
                                                        >
                                                            {e.title}
                                                        </Typography>
                                                    </Link>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Typography sx={{ color: "#fff", mt: "24px", mb: "9px" }}>
                        Follow Us
                    </Typography>
                    <Stack
                        flexDirection={"row"}
                        sx={{
                            maxWidth: "120px",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link href={"#"} target="_blank">
                            <LinkedInIcon
                                sx={{
                                    color: "#fff",
                                    width: "32px",
                                    height: "32px",
                                }}
                            />
                        </Link>
                        <Link href={"#"} target="_blank">
                            <TwitterIcon
                                sx={{
                                    color: "#fff",
                                    width: "32px",
                                    height: "32px",
                                }}
                            />
                        </Link>
                        <Link href={"#"} target="_blank">
                            <Image
                                src={"/img/twitch_logo.png"}
                                width={28}
                                height={28}
                                alt={"twitch logo"}
                            />
                        </Link>
                    </Stack>

                    <Divider
                        sx={{
                            mt: "40px",
                            mb: "16px",
                            "&:after": {
                                borderColor: "#C6C6C6",
                                borderWidth: "0.5px",
                            },
                            "&:before": {
                                borderColor: "#C6C6C6",
                                borderWidth: "0.5px",
                            },
                        }}
                    >
                        {" "}
                        <Image
                            src={"/img/mini_logo.png"}
                            alt={"Mini logo"}
                            width={48}
                            height={48}
                        />
                    </Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#C6C6C6",
                            textAlign: "center",
                            mb: "17px",
                        }}
                    >
                        QuikSlip is only available in Texas
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#C6C6C6",
                            textAlign: "center",
                            mb: "8px",
                        }}
                    >
                        Contact us to let us know you want us to bring our
                        product to you.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#C6C6C6",
                            textAlign: { md: "right", xs: "center" },
                        }}
                    >
                        Privacy Policy · Copyright QuikSlip, 2023
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default Footer;
