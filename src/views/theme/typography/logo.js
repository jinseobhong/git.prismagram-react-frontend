import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
            logo: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            }
        }
    )
)

export default function Logo() {
    const classes = useStyles();
    return <Typography component="h1" variant={"h3"} className={classes.logo}>𝒫𝓇𝒾𝓈𝓂𝒶𝑔𝓇𝒶𝓂</Typography>;
}
