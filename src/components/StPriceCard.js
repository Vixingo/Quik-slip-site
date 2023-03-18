import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    CardHeader,
    Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

function StPriceCard(props) {
    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Card
                    variant="outlined"
                    sx={{
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                        borderTopRightRadius: "0px",
                        borderTopLeftRadius: "0px",
                        maxWidth: "385px",
                        margin: "24px",
                        borderColor: "#186FE7",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",

                            width: "calc(  100% - 48px) ",
                            height: "32px",
                            top: "-13px",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <Typography
                            sx={{
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                                textAlign: "center",
                                fontSize: "14px",
                                padding: "8px",
                                color: "#fff",
                                backgroundColor: "#186FE7",
                            }}
                        >
                            Recommended
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "rgba(112, 166, 240, 0.2)",
                            textAlign: "left",
                            padding: "18px",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                p: "1px 5px",

                                mb: "16px",
                                textTransform: "capitalize",
                            }}
                        >
                            Small Complex
                        </Button>
                        <Typography
                            sx={{
                                fontSize: "24px ",
                                fontWeight: "700",
                                mb: "4px",
                            }}
                        >
                            Standard
                        </Typography>
                        <Typography sx={{ color: "#282828", mb: "4px" }}>
                            {props.type == 0 ? "$40 / month" : "$480 / year"}
                        </Typography>
                        <Typography sx={{ fontSize: "12px", color: "#959595" }}>
                            Billed {props.type == 0 ? "Monthly" : "Annually"}
                        </Typography>
                    </Box>
                    <CardContent>
                        <Typography
                            sx={{
                                textAlign: "left",
                                mb: "8px",
                            }}
                        >
                            QuikSlip Management includes
                        </Typography>
                        <Box
                            sx={{
                                "& > :not(style)": {
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "14px",
                                    mb: "8px",
                                },
                            }}
                        >
                            <Typography>
                                <CheckIcon
                                    sx={{
                                        color: "#186FE7",
                                        fontSize: "22px",
                                        mr: "3px",
                                    }}
                                />{" "}
                                Share up to 2 Admin Users
                            </Typography>
                            <Typography>
                                <CheckIcon
                                    sx={{
                                        color: "#186FE7",
                                        fontSize: "22px",
                                        mr: "3px",
                                    }}
                                />{" "}
                                Streamline administration
                            </Typography>
                            <Typography>
                                <CheckIcon
                                    sx={{
                                        color: "#186FE7",
                                        fontSize: "22px",
                                        mr: "3px",
                                    }}
                                />
                                Stripe Integration
                            </Typography>
                            <Typography>
                                <CheckIcon
                                    sx={{
                                        color: "#186FE7",
                                        fontSize: "22px",
                                        mr: "3px",
                                    }}
                                />
                                Web Application{" "}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" fullWidth>
                            Contact Us{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default StPriceCard;
