import React from 'react'
import TeamCss from "../../pages/TeamCss.module.css"

const PeopleCard = (props) => {
    return (
        <>
            <div className={TeamCss.mainContainer}>

                <div className={TeamCss.imageContainer}>
                    <img alt='profile' src="/images/Demo.png" />

                </div>
                <div className={TeamCss.textContainer}>
                    <h3 className={TeamCss.POR}>overall coordinator</h3>
                    <p className={TeamCss.PORname}>name</p>
                    <p className={TeamCss.PORsurname}>surname</p>
                </div>
            </div >
        </>
    )
}

export default PeopleCard;

