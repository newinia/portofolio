import React from 'react'
import ProgressSkill from '@/components/custom/progress-skill'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'
import AppSection from '@/components/layout/app-section'

const AboutSection = () => {
  return (
    <AppSection id="about">
      <div className= "w-full max-w-3xl mx-auto text-center bg-card rounded-xl p-6 md:p-10 shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle name="About Me" />
          <SectionDescription
            content={`I’m passionate about designing and building digital products that are not only functional 
                      but also easy and enjoyable to use. My journey in software engineering has led me to explore 
                      both UI/UX design and frontend development, where I can combine creativity with problem-solving.

                      I’ve worked on several web and mobile projects, handling everything from user flow design in Figma 
                      to frontend implementation using Laravel and Vue.js, as well as API integration. I enjoy working in teams and continuously learning new tools to improve the way I build and design products.`}
          />
        </div>
      </div>
    </AppSection>
  )
}

export default AboutSection
