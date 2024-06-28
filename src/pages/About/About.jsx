import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import MyStory from './MyStory/MyStory'
import ValuesSection from './ValuesSection/ValuesSection'
import WorkExperience from './WorkExperience/WorkExperience'

const About = () => {
    return (
        <div>
            <AboutHero />
            <MyStory />
            <ValuesSection />
            <WorkExperience />
        </div>
    )
}

export default About