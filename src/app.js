import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from "./views/signin";
import theme from "./views/theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';

class App extends React.Component {
    render() {
        return (
            <SignIn/>
        );
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById("root")
);
