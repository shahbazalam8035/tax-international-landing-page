import React from 'react'
import HeroSection from '../../componments/elements/macros/candidate-career/HeroSection'
import CareerProgression from '../../componments/elements/macros/candidate-career/CareerProgression'
import CareerTransformed from '../../componments/elements/macros/candidate-career/CareerTransformed'
import MyStacks from "../../componments/elements/macros/candidate-career/MyStacks"
import FormCandidateCareer from '../../componments/elements/macros/candidate-career/FormCandidateCareer'

const CandidateCareer = () => {
  return (
    <>
      <HeroSection/>
      <MyStacks />
      <CareerProgression/>
      <CareerTransformed/>
      <FormCandidateCareer/>
    </>
  )
}

export default CandidateCareer