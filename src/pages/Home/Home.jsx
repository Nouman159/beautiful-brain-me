import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BeautifulBrain from './BeautifulBrain/BeautifulBrain'
import KnowledgeHub from './KnowledgeHub/KnowledgeHub'
import Hero from './Hero/Hero'
import NewsletterSignup from './NewsSubscribe/NewsSubscribe'

const Home = () => {
    return (
        <div>
            <Hero />
            <BeautifulBrain />
            <KnowledgeHub />
            <NewsletterSignup />
        </div>
    )
}

export default Home