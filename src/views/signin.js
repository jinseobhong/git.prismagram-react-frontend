import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Copyright from "./theme/typography/copyright";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    paper: {
        border: "solid",
        display: 'flex',
        marginTop: theme.spacing(8),
        alignItems: 'center',
        marginBottom: theme.spacing(8),
        flexDirection: 'column',
        justifyContent: "center",
    },
    form: {
        // Fix IE 11 issue.
        width: '100%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
    link: {
        margin: theme.spacing(2)
    }
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Container className={classes.paper}>
                <Typography component="h1" variant={"h3"}>𝒫𝓇𝒾𝓈𝓂𝒶𝑔𝓇𝒶𝓂</Typography>;
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="전화번호, 사용자 이름 또는 이메일"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        className={classes.submit}
                    >
                        로그인
                    </Button>
                </form>
                <Link href="#" variant="body2" className={classes.link}>
                    비밀번호를 잊으셨나요?
                </Link>
                <Link href="#" variant="body2" className={classes.link}>
                    계정이 없으신가요? 가입하세요
                </Link>
            </Container>
            <Box mt={4}>
                <Copyright/>
            </Box>
        </Container>
    );
}