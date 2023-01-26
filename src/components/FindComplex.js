import {
    Box,
    Button,
    Container,
    IconButton,
    Input,
    InputAdornment,
    InputBase,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindComplex() {
    return (
        <>
            <Container sx={{ textAlign: "center", p: "127px 0" }}>
                <Box>
                    <Image
                        src={"/img/mini_logo.png"}
                        alt={"Mini logo"}
                        width={64}
                        height={64}
                    />
                </Box>
                <Typography variant="h2" sx={{ color: "#fff", mt: "24px" }}>
                    Find Your Complex
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ color: "#fff", mt: "24px" }}
                >
                    Enter the exact address or complex name for better accuracy.
                </Typography>
                <Box
                    sx={{
                        margin: "0 auto",
                        maxWidth: "680px",
                        mt: "48px",
                        px: "10px",
                    }}
                >
                    <Paper
                        component="form"
                        sx={{
                            display: "flex",
                            alignItems: "center",

                            borderRadius: "16px",
                            border: "1px solid #186FE7",
                        }}
                    >
                        <IconButton sx={{ p: "12px" }} aria-label="search">
                            <SearchOutlinedIcon
                                sx={{
                                    color: "#186FE7",
                                    width: "24px",
                                    height: "24px",
                                }}
                            />
                        </IconButton>
                        <InputBase
                            placeholder="Search Apartment Complex or Address"
                            fullWidth
                            sx={{
                                color: "#186FE7",
                                fontSize: "16px",
                                border: "none",
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                margin: "7px 12px",
                                fontSize: "12px",
                                textTransform: "unset",
                                borderRadius: "16px",
                                width: "94px",
                            }}
                        >
                            Search
                        </Button>
                    </Paper>
                </Box>
                <Button
                    variant="outlined"
                    color="neutral"
                    startIcon={<LocationOnIcon />}
                    sx={{
                        fontSize: "12px",
                        borderRadius: "16px",
                        mt: "24px",
                    }}
                >
                    Find the Complex Near You
                </Button>
            </Container>
        </>
    );
}

export default FindComplex;
