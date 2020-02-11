import React from 'react'

export const PeopleCard = (props) => {
    const { data } = props
    const { firstName, lastName, phoneNumber, jobTitle, avatarUrl } = data
    return data && 
    <div id="card">
        <div>
        <div className="bold">{`${firstName} ${lastName}`}</div>
            <div>{`(${jobTitle})`}</div>
        </div>
        <div className="bold">{phoneNumber}</div>
        <div id="image">
            <img src={avatarUrl} alt={firstName} width={100} height={100}></img>
        </div>
    </div>
}
export default PeopleCard