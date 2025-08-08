import React from 'react'
import HeroSection from '../../componments/elements/macros/employer-page/nuclear-medicine/HeroSection'
import WhyChoseUs from '../../componments/elements/macros/employer-page/nuclear-medicine/WhyChoseUs'
import RecruitmentsModal from '../../componments/elements/macros/employer-page/nuclear-medicine/RecruitmentsModal'
import EmployerContactUsSection from '../../componments/elements/macros/employer-page/nuclear-energy/EmployerContactUsSection'
import RolesWePlace from '../../componments/elements/macros/employer-page/nuclear-medicine/RolesWePlace'
import CaseStudiesMedicine from '../../componments/elements/macros/employer-page/nuclear-medicine/CaseStudiesMedicine'

const NuclearMedicine = () => {
  return (
    <>
    <HeroSection/>
    <WhyChoseUs/>
    <RecruitmentsModal/>
    <RolesWePlace/>
    <CaseStudiesMedicine/>
    <EmployerContactUsSection/>
    </>
  )
}

export default NuclearMedicine