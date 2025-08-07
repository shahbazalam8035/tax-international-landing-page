import React from 'react'
import ToolDesignedSection from '../../componments/elements/macros/cv-analysis-page/ToolDesignedSection'
import CvTemplateSection from '../../componments/elements/macros/cv-analysis-page/CvTemplateSection'
import HeroSection from '../../componments/elements/macros/cv-analysis-page/HeroSection'
import UploadCvSection from '../../componments/elements/macros/cv-analysis-page/UploadCvSection'

const CvAnalysis = () => {
  return (
    <>
    <HeroSection/>
    <UploadCvSection/>
    <CvTemplateSection/>
    <ToolDesignedSection/>
    </>
  )
}

export default CvAnalysis