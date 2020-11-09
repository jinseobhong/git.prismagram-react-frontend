import {createMuiTheme} from '@material-ui/core/styles';

// A custom theme for this app
// Get the color from https://color.adobe.com/ko/create/color-wheel
const theme = createMuiTheme({
    // You can refer to it https://material-ui.com/customization/palette/
    // or https://material.io/resources/color/#
    // or https://in-your-saas.github.io/material-ui-theme-editor/
    palette: {
        action: {
            active: '#fff', // Button's status is active
        },
        primary: {
            light: '#7e8aff', // light color
            main: '#405DE6', // Main color
            dark: '#0034b3', // Dark color
            contrastText: '#E6BD40' // Contrast Text
        },
        secondary: {
            light: '#f76ab4',
            main: '#C13584',
            dark: '#8d0057',
            contrastText: '#3BC234'
        },
        error: {
            main: '#FD1D1D',
        },
        background: {
            default: '#fff',
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "#000000",
                backgroundColor: "#fff"
            }

        },
        MuiButton :{
            root : {
                color: "#fff",
                backgroundColor: '#405DE6',
                '&:hover': {backgroundColor: '#7e8aff'}
            }
        }
    }
});

export default theme;