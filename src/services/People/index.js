import axios from 'axios'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const fetchPeople = () => {
    return axios.get(`${SERVER_URL}/people`)
}

export const fetchPeopleByName = (name) => {
    return axios.get(`${SERVER_URL}/people/by-name/${name}`)
}