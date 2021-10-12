import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import { formatDay, formatTime } from './utils/formatTime'

const useStyles = makeStyles(() => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

const WeatherCard = ({ forecast }) => {
    const classes = useStyles()
    console.log('WeatherCard forecast: ', forecast)
    return (
        <Card style={{ height: 200, width: 90 }}>
            <CardActionArea>
                <CardMedia 
                    component="img" 
                    height="50" image={""} 
                    image={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    alt="Weather logo"
                />
                <CardContent className={ `${classes.center} ${classes.column}` }>
                    <Typography variant="h5">
                        {formatDay(forecast.dt)}
                    </Typography>
                    <Typography variant="h5">
                        {formatTime(forecast.dt)}
                    </Typography>
                    <Typography variant="h5">
                        {Math.round(forecast.main.temp)}°
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default WeatherCard