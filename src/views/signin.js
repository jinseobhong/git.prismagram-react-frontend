import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from "@material-ui/core/Hidden";
import Cover from "../assets/img/cover.png";
import Logo from "./theme/typography/logo";

const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        justify: 'center',
    },

    cover: {
        minWidth: "50%",
    },

    form: {}
}));

export default function Signin() {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.main}>
            <CssBaseline/>
            <Grid>
                <Hidden xsDown={true} smDown={true}>
                    <img src={Cover} className={classes.cover}/>
                </Hidden>
            </Grid>
            <Grid container>
                <Logo/>
            </Grid>
        </Container>
    );
}