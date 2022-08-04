import { createTheme } from '@mui/material';

    export const theme = () =>  createTheme({
        palette:{
            main: "#17605",
            light: "skyblue"
        },
        secondary:{
            main: "#15c630"
        },
        otherColor:{
            main:"#999"
        }
    })

//export default theme