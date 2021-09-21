import React, { useState, useEffect }from 'react'
import { makeStyles } from '@material-ui/core'
import { getForeCast } from './request'
import { formatTime } from './utils/formatTime'

const useStyles = makeStyles(() => ({
    
}))

const Weather = () => {
    const [forecasts, setForecast] = useState()
    const [focusedForecastDT, setFocusedForecastDT] = useState()

    useEffect(() => {
        getForeCast().then((response) => {
            setForecast (response);
            setFocusedForecastDT(response.list[0].dt)
        })
    }, [])

    console.log('rendering', forecasts)

    if (!forecasts || !focusedForecastDT) return null

    const selectedForecasts = forecasts.list.find(f => f.dt === focusedForecastDT)
    return (
    <div>
        <div>
            {forecasts.city.name}
        </div>
        <div>
            Auringon nousu klo {formatTime(forecasts.city.sunrise)}
        </div>
        <div>
            Auringon lasku klo {formatTime (forecasts.city.sunset)}
        </div>
    </div>
    )
}

export default Weather