import React from 'react'

import TeamCss from "./TeamCss.module.css"
import PeopleCard from '../components/Team/PeopleCard'

const Team = () => {
    return (
        <>
            <div className='container mx-auto px-5'>

                <div className={TeamCss.header}>
                    <h1><span className={TeamCss.text_blue}>Our</span><span className={TeamCss.text_white}> Team</span></h1>
                </div>

                <div className='mx-auto grid grid-cols-3 gap-8 '>

                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-1 '>
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-1 gap-8'>
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                    <PeopleCard />
                </div>






            </div>
        </>
    )
}

export default Team