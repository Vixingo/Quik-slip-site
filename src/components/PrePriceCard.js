import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
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

function PrePriceCard(props) {
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    borderRadius: "8px",
                    maxWidth: "385px",
                    margin: "24px",
                }}
            >
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
                        Large Complex
                    </Button>
                    <Typography
                        sx={{ fontSize: "24px ", fontWeight: "700", mb: "4px" }}
                    >
                        Premium
                    </Typography>
                    <Typography sx={{ color: "#282828", mb: "4px" }}>
                        {props.type == 0
                            ? "$5 per tenant / month"
                            : "$60 per tenant / year"}
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
                    <Button size="small" variant="outlined" fullWidth>
                        Contact Us{" "}
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default PrePriceCard;
