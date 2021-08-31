import React from 'react'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const theme = createTheme({
    typography: {
        fontFamily: [
            "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap",
        ].join(',')
    }
})

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography> Weather </Typography>
        </ThemeProvider>
    )
}

export default Header
