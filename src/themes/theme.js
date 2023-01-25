import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#186FE7",
        },

        neutral: {
            main: "#fff",
            contrastText: "#fff",
        },
    },

    typography: {
        fontFamily: "Arimo",
        h1: {
            fontSize: "48px",
            lineHeight: "50px",
            fontWeight: "700",
            "@media (max-width:600px)": {
                fontSize: "24px",
                lineHeight: "30px",
            },
        },
        h2: {
            fontSize: "32px",
            fontWeight: "700",
            "@media (max-width:600px)": {
                fontSize: "24px",
            },
        },
        h3: {
            fontSize: "24px",
            fontWeight: "400",
            "@media (max-width:600px)": {
                fontSize: "16px",
            },
        },
        h4: {
            fontSize: "20px",
            fontWeight: "700",
        },
        h6: {
            fontSize: "16px",
            fontWeight: "700",
        },
        subtitle1: {
            fontSize: "14px",
        },
    },
});
