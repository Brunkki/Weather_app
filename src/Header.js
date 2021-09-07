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

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        fontSize: 50, 
        textTransform: 'uppercase',
        backgroundColor: '#00bbff',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
}))


const Header = () => {
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Typography className={classes.header}> Weather </Typography>
        </ThemeProvider>
    )
}

export default Header
