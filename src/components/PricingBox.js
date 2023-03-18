import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PrePriceCard from "./PrePriceCard";
import StPriceCard from "./StPriceCard";

function PricingBox() {
    const [alignment, setAlignment] = React.useState(0);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <section className="Pricing">
                <Container
                    sx={{
                        textAlign: "center",
                        mb: "40px",
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton
                            value={0}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Monthly
                        </ToggleButton>
                        <ToggleButton
                            value={1}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Yearly
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "60px",
                            flexWrap: "wrap",
                        }}
                    >
                        <StPriceCard type={alignment} />
                        <PrePriceCard type={alignment} />
                    </Box>
                </Container>
                <Container>
                    <Grid
                        container
                        maxWidth={"1000px"}
                        sx={{ margin: "0 auto", padding: "70px 0" }}
                    >
                        <Grid item xs={12} md={6}>
                            <img src="/img/promo.png" alt="promo" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h1"
                                fontWeight={400}
                                sx={{ mb: "24px" }}
                            >
                                Manage your complex with QuikSlip Software
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: "#787878",
                                    mb: "30px",
                                }}
                            >
                                Check your parking lot status, tow vehicles, and
                                take advantage of all features in one location.
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{ backgroundColor: "#DDEBFF" }}
                            >
                                See Features
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default PricingBox;
