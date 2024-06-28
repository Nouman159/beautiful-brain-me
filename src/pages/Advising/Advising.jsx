import React from 'react'
import AdvisingHero from './AdvisingHero/AdvisingHero'
import MyStory from './MyStory/MyStory'
import AdvisingCards from './AdvisingCards/AdvisingCards'
import AdvisingTabs from './AdvisingTabs/AdvisingTabs'

const Advising = () => {
    return (
        <div>
            <AdvisingHero />
            <MyStory />
            <AdvisingTabs />
            <AdvisingCards />
        </div>
    )
}

export default Advising