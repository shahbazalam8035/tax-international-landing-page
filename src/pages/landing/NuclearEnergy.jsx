import React from 'react'
import HeroSection from '../../componments/elements/macros/employer-page/nuclear-energy/HeroSection'
import GlobalTalents from '../../componments/elements/macros/employer-page/nuclear-energy/GlobalTalents'
import NuclearRegionProject from '../../componments/elements/macros/employer-page/nuclear-energy/NuclearRegionProject'
import LongTermRel from '../../componments/elements/macros/employer-page/nuclear-energy/LongTermRel'
import OnGoingTalentsNeed from '../../componments/elements/macros/employer-page/nuclear-energy/OnGoingTalentsNeed'
import WhyNuclerChooseTrx from '../../componments/elements/macros/employer-page/nuclear-energy/WhyNuclerChooseTrx'
import EmployerContactUsSection from '../../componments/elements/macros/employer-page/nuclear-energy/EmployerContactUsSection'
import CaseStudiesSection from '../../componments/elements/macros/homa-page/CaseStudiesSection'

const NuclearEnergy = () => {
  return (
    <>
    <HeroSection/>
    <GlobalTalents/>
    <NuclearRegionProject/>
    <LongTermRel/>
    <OnGoingTalentsNeed/>
    <WhyNuclerChooseTrx/>
    <CaseStudiesSection/>
    <EmployerContactUsSection/>
    </>
  )
}

export default NuclearEnergy