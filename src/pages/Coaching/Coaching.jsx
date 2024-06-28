import React from 'react'
import CoachingSection from './CoachingHero/CoachingHero'
import CoachingCompanies from './CoachingCompanies/CoachingCompanies'
import CoachingCard from './CoachingCard/CoachingCard'
import CoachingServices from './CoachingServices/CoachingServices'

const Coaching = () => {
    return (
        <div>
            <CoachingSection />
            <CoachingCompanies />
            <CoachingServices />
            <CoachingCard />
        </div>
    )
}

export default Coaching