import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '@material-ui/core/styles';
import Signin from "./views/signin";


class App extends React.Component {
    render() {
        return (
            <Signin/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
