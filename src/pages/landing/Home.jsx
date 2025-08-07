import React from 'react'
import CaseStudiesSection from '../../componments/elements/macros/homa-page/CaseStudiesSection'
import GlobePresenceSections from '../../componments/elements/macros/homa-page/GlobePresenceSections'
import SectorsWeSupportSection from '../../componments/elements/macros/homa-page/SectorsWeSupportSection'
import WhyChooseUs from '../../componments/elements/macros/homa-page/WhyChooseUs'
import HeroSection from '../../componments/elements/macros/homa-page/HeroSection'
import ComplianceSection from '../../componments/elements/macros/homa-page/ComplianceSection'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <SectorsWeSupportSection/>
    <ComplianceSection/>
    <WhyChooseUs/>
    <GlobePresenceSections/>
    <CaseStudiesSection/>
    </>
  )
}

export default Home