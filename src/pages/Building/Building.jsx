import React from 'react'
import BuildingHero from './BuildingHero/BuildingHero'
import BuildingCard from './BuildingCard/BuildingCard'
import PartnerSection from './Partener/Partener'
import BuildingTabs from './BuildingTabs/BuildingTabs'

const Building = () => {
    return (
        <div>
            <BuildingHero />
            <BuildingCard />
            <BuildingTabs />
            <PartnerSection />
        </div>
    )
}

export default Building