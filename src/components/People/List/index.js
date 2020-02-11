import React, { useState, useEffect } from 'react'
import PeopleCard from '../Card'
import { fetchPeople } from '../../../services/People'
import { fetchPeopleByName } from '../../../services/People'

export const PeopleList = () => {
    
    const [peopleList, setPeopleList] = useState([])
    const [hasDataLoaded, setDataLoaded] = useState(false)
    const [text, setText] = useState('')

    useEffect (() => {
        if(!hasDataLoaded){
            getPeoplelist()
        }        
    })

    const changeName = async (event) => {
        const { target } = event
        const { value } = target
        setText(value)
        if(value.length > 2) {
            const result = await fetchPeopleByName(value)
            if(result.data && result.data.length){
                setPeopleList(orderData(result.data))
            }            
        } else if (!value.length) {
            getPeoplelist()
        }
    }

    const getPeoplelist = async () => {
        const result = await fetchPeople()
        const sortedData = orderData(result.data)
        result && setPeopleList(sortedData)
        setDataLoaded(true)
    }

    const orderData = (data) => {
        return data.sort((a, b) => a.firstName.localeCompare(b.firstName))
    }
    
    return (
        peopleList.length ?
            <div id="list">
                <div id="title">Random list of People!</div>
                <div className="container">
                    <input type="text" placeholder='Search by name...' onChange={changeName} value={text} id="search" />
                </div>
                {peopleList.map((people) => {
                    return <PeopleCard data={people} />
                })
                }
                <div id="footer">{peopleList && `${peopleList.length} ${peopleList.length > 1 ? 'items' : 'item'}`}</div>
            </div>
            : <div id="loader">Loading...</div>
    )

}

export default PeopleList

