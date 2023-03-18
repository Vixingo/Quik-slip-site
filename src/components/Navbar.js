import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/material";

const pages = [
    {
        id: 1,
        title: "How it works",
        url: "#",
        icon: "",
    },
    { id: 2, title: "For Managers", url: "#", icon: <KeyboardArrowDownIcon /> },
    {
        id: 3,
        title: "About QuikSlip",
        url: "#",
        icon: <KeyboardArrowDownIcon />,
    },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 0 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function Navbar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: props.bg ? props.bg : "transparent",
                    }}
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* <AdbIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        /> */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", lg: "flex" },
                                }}
                            >
                                {props.bg ? (
                                    <img src="/img/logo_black.png" alt="" />
                                ) : (
                                    <img src="/img/logo.png" alt="" />
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    // flexGrow: 1,
                                    display: { xs: "flex", lg: "none" },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon
                                        sx={{
                                            color: props.bg ? "#395789" : "",
                                        }}
                                    />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", lg: "none" },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page.id}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography
                                                textAlign="center"
                                                sx={{
                                                    color: "#344767",
                                                }}
                                            >
                                                {page.title}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                    <Button
                                        variant="outlined"
                                        color="management"
                                        sx={{ mx: "10px" }}
                                        size="small"
                                    >
                                        Management Login
                                    </Button>
                                </Menu>
                            </Box>
                            {/* <AdbIcon
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    mr: 1,
                                }}
                            /> */}
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    ml: "0",
                                    mr: 2,
                                    display: { xs: "flex", lg: "none" },
                                    flexGrow: 1,
                                }}
                            >
                                {props.bg ? (
                                    <img src="/img/logo_black.png" alt="" />
                                ) : (
                                    <img src="/img/logo.png" alt="" />
                                )}
                            </Typography>
                            <Box
                                sx={{
                                    // flexGrow: 1,
                                    ml: "auto",
                                    mr: "24px",
                                    display: { xs: "none", lg: "flex" },
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page.id}
                                        // href={page.url}
                                        onClick={handleCloseNavMenu}
                                        endIcon={page.icon}
                                        sx={{
                                            color: props.bg
                                                ? "#344767"
                                                : "white",
                                            display: "flex",
                                        }}
                                    >
                                        {page.title}
                                    </Button>
                                ))}
                            </Box>
                            <Stack flexDirection={"row"}>
                                <Button
                                    variant={props.bg ? "text" : "contained"}
                                    color="management"
                                    sx={{
                                        mr: { xs: "10px", md: "24px" },
                                        display: { xs: "none", md: "block" },
                                    }}
                                >
                                    Management Login
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: props.bg ? "#395789" : "",
                                    }}
                                >
                                    Complex Finder{" "}
                                </Button>
                            </Stack>
                            {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </>
    );
}

export default Navbar;
