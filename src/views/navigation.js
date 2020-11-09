import Container from "@material-ui/core/Container";
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    FormControl,
    InputAdornment,
    TextField,
    IconButton,
    CssBaseline
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Home, Search, Explore, Mail, FavoriteBorder, AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexWrap: "wrap"
    },
    paper: {
        justifyContent: "space-between",
        alignItems: "center",
        justifyItems: "center",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "flex-start",
        },
    },
    title: {
        margin: theme.spacing(1),
        userSelect: "none",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    form: {
        pointerEvents: "none",
    },
    search: {
        margin: theme.spacing(1),
        borderColor: theme.palette.primary.dark,
    },
    icon: {
        justifyContent: 'flex-start',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

    }
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Grid container className={classes.paper}>
                        <Grid item>
                            <Typography className={classes.title} component="h1"
                                        variant={"h3"}>𝒫𝓇𝒾𝓈𝓂𝒶𝑔𝓇𝒶𝓂</Typography>
                        </Grid>
                        <Grid item className={classes.search}>
                            <FormControl className={classes.form}>
                                <TextField
                                    id="standard-full-width"
                                    placeholder="검색"
                                    fullWidth
                                    focused={true}
                                    margin="normal"
                                    variant='outlined'
                                    InputLabelProps={
                                        {
                                            disableAnimation: true
                                        }
                                    }
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" disablePointerEvents={true}>
                                                <Search/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                size="medium"
                            >
                                <Home/>
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                size="medium"
                            >
                                <Mail/>
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                size="medium"
                            >
                                <Explore/>
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                size="medium"
                            >
                                <FavoriteBorder/>
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                size="medium"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
