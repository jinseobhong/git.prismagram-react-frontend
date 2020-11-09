import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from "./views/signin";
import Theme from "./views/theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import Index from "./views/navigation";

class App extends React.Component {
    render() {
        return (
            <Index/>
        );
    }
}

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById("root")
);
