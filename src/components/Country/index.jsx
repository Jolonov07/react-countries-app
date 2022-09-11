import React from "react";
import cls from './Country.module.scss'
import { useNavigate } from 'react-router-dom'

const Country = ({ country }) => {
    const navigation = useNavigate()

    const {
        name: {
            common,
        },
        flags,
        capital,
        population,
        region,
    } = country

    const goToCountryPage = (name) => navigation(`/page/${name}`)

    return (
        <div 
            className={cls.root}
            onClick={() => goToCountryPage(common)}
        >
            <div className={cls.img} 
            style={{
                background: `url(${flags.svg}) center /cover`
            }}>
            </div>
            <div className={cls.descrip}>
                <h1>{common}</h1>
                <h2>Capital: <span>{capital}</span></h2>
                <h2>Population: <span>{population}</span></h2>
                <h3>Region: <span>{region}</span></h3>
            </div>
            <div className={cls.btn}>
                <button className={cls.more}>More</button>
            </div>
        </div>
    )
}

export default Country