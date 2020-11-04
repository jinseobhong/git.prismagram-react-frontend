import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    brand: {}
});

export default function Logo() {
    const classes = useStyles();
    return <Typography variant={"h1"} className={classes.brand}>Prismagram</Typography>;
}
