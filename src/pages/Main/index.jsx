import React from "react";
import axios from 'axios'
import cls from './Main.module.scss'
import { baseUrl } from '../../configs/baseUrl'
import Spinner from "../../components/Spinner"
import Country from "../../components/Country"

const Main = () => { 
    const [countries, setCountries] = React.useState([])

    React.useEffect(() => {
        axios.get(`${baseUrl}/all`)
        .then(res => {
            const data = res.data
            setCountries(data)
        })
    }, [])

    const [value, setValue] = React.useState('')

    const filterCountries = countries.filter(({ name }) => {
        return name.common.toLowerCase().includes(value.toLowerCase())
    })

    if(!countries) return <Spinner />
    return (
        <div className={cls.container}>
           <div className={cls.box}>
                <input type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} className={cls.search} />
           </div>
                <div className={cls.root}>
                    {
                        filterCountries.map((country, index) => {
                            return (
                            <Country country={country} key={index}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}



export default Main