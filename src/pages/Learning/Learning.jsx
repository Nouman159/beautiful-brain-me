import React from 'react'
import LearningHero from './LearningHero/LearningHero'
import RecommendationsSection from './RecommendationsSection/RecommendationsSection'
import NewsletterSignup from './NewsSubscribe/NewsSubscribe'
import LearningCards from './LearningCards/LearningCards'

const Learning = () => {
    return (
        <div>
            <LearningHero />
            <LearningCards />
            <NewsletterSignup />
            <RecommendationsSection />
        </div>
    )
}

export default Learning