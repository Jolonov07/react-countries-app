import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { baseUrl } from "../../configs/baseUrl"
import cls from './CountryPage.module.scss'

const CountryPage = () => {
    const  { country } = useParams()
    const navigate = useNavigate()
    React.useEffect(() => {
        axios.get(`${baseUrl}/name/${country}`)
        .then(res => {
            const data =res.data

            console.log(data)
        })
    })

    // const goToMain = () => navigate

    return (
        <div>
            <h1>Country {country} Page</h1>
            <Link to={'/'}>Go To Main</Link>
        </div>
    )
}

export default CountryPage