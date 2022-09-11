import React from "react"
import cls from './Continent.module.scss'
import { useParams } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../../configs/baseUrl"
import Spinner from "../../components/Spinner"
import Country from "../../components/Country"

const Continent = () => {
    const [region, setRegion] = React.useState([])
    const { continent } = useParams()

    React.useEffect(() => {
        axios.get(`${baseUrl}/subregion/${continent}`)
        .then(res => {
            const data = res.data
            setRegion(data)
        })
    }, [])


    if(!region) return <Spinner />
    return (
       <div>
         <h1> Hello, {continent} Continent</h1>
         <div className={cls.container}>
         {
            region.map(country => (
                <Country key={country.name.common} country={country} />
            ) )
         }
         </div>
       </div>
    )
}

export default Continent