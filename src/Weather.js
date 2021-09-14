import React, { useState, useEffect }from 'react'
import { getForeCast } from './request'

const Weather = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        getForeCast().then((response) => {
            console.log('response', response)
        })
    }, [])


    console.log('rendering')
    return (
        <div>
            Tässä on luku mikä on 'value': {value}
            <button onClick={() => setValue(50)}> Jännä nappi. ÄLÄ KLIKKAA</button>
        </div>
    )
}

export default Weather