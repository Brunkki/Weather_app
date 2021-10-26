import React, { useState, useEffect }from 'react'
import { makeStyles } from '@material-ui/core'
import { getForeCast } from './request'
import { formatTime, formatDay } from './utils/formatTime'
import WeatherCard from './WeatherCard'

const useStyles = makeStyles(() => ({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    biggerFont: {
        fontSize: '5vw'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    weatherSelected: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '32px',
        padding: 30
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

    const changeFocusedForecast = (forecast) => {
        setFocusedForecastDT(forecast.dt)
    }

    const renderWeatherItem = (forecast) => {
        return (
            <div style={{ padding: 10 }} key={forecast.dt}>
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
    <div className={classes.weatherSelected}>
        <div> {formatDay(selectedForecasts.dt)} </div>
        <div> {formatTime(selectedForecasts.dt)} </div>
        <div> {Math.round(selectedForecasts.main.temp)}° </div>
        <div> {selectedForecasts.weather[0].description} </div>
        <img src={`http://openweathermap.org/img/wn/${selectedForecasts.weather[0].icon}.png`} alt='Logo' />
    </div>
    <div className={classes.row}>
        {forecasts.list.map(forecast => renderWeatherItem(forecast))}
    </div>
</div>
    )
}

export default Weather