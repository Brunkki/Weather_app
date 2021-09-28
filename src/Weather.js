import React, { useState, useEffect }from 'react'
import { makeStyles } from '@material-ui/core'
import { getForeCast } from './request'
import { formatTime } from './utils/formatTime'
import WeatherCard from './WeatherCard'

const useStyles = makeStyles(() => ({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    biggerFont: {
        fontSize: '5vw'
    }
}))
const Weather = () => {
    const [forecasts, setForecast] = useState()
    const [focusedForecastDT, setFocusedForecastDT] = useState()

    const classes = useStyles()

    useEffect(() => {
        getForeCast().then((response) => {
            console.log(response)
            setForecast (response);
            setFocusedForecastDT(response.list[0].dt)
        })
    }, [])

    console.log('rendering', forecasts)

    if (!forecasts || !focusedForecastDT) return null

    const selectedForecasts = forecasts.list.find(f => f.dt === focusedForecastDT)

    const renderWeatherItem = (forecast) => {
        return (
            <div>
                <WeatherCard forecast={forecast} />
            </div>
        )
    }
    return (
<div>
    <div>
        <div className={`${classes.center} ${classes.biggerFont}`}>
            {forecasts.city.name}
        </div>
        <div className={classes.center}>
            Auringon nousu klo {formatTime(forecasts.city.sunrise)}
        </div>
        <div className={classes.center}>
            Auringon lasku klo {formatTime (forecasts.city.sunset)}
        </div>
    </div>
    <div>
        {forecasts.list.map(forecast => renderWeatherItem(forecast))}
    </div>
</div>
    )
}

export default Weather