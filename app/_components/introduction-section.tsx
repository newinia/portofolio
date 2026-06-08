import AvatarProfile from '@/components/custom/avatar-profile'
import TwoColSection from '@/components/layout/two-col-section'
import { Button } from '@/components/ui/button'
import React from 'react'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import Link from 'next/link'
import { RevealText } from '@/components/motion/reveal-text'
import { SlideUp } from '@/components/motion/slide-up'
import { ZoomIn } from '@/components/motion/zoom-in'

// type Props = {}

const IntroductionSection = () => {
  return (
    <TwoColSection id="home">
      <div className="order-2 md:order-1">
        <p className="text-lg font-semibold">Hi, I'm</p>
        <h1 className="text-3xl font-bold text-[#7096d1]">
          <RevealText text="Newi Muchlisinia" />
        </h1>
        <SlideUp>
          <h2 className="hidden md:block md:text-7xl font-extrabold mb-10">
            Web
            <br />
            <span className="ml-10 md:ml-20">Developer</span>
          </h2>
          {/* mobile */}
          <p className="my-2 md:my-5">
           I design and build responsive web applications with a focus on clean UI, 
           smooth user experience, and functional frontend development. I also have 
           experience working with backend integration using Laravel and REST APIs.{' '}
          </p>
          <Button className="bg-[#7096d1]-500 hover:bg-[#7096d1]-600">Hire Me</Button>
        </SlideUp>
      </div>
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <ZoomIn>
          <div className="flex flex-col items-center space-y-5">
            <AvatarProfile src={'/images/user/avatar-newi.jpg'} alt={'Newi Muchlisinia avatar'} />
            <div className="flex space-x-5">
              <Link href="https://github.com/newinia" target="_blank">
                <GithubIcon className="social-icon" />
              </Link>
              <Link href="www.linkedin.com/in/newi-muchlisinia" target="_blank">
                <LinkedinIcon className="social-icon" />
              </Link>
            </div>
          </div>
        </ZoomIn>
      </div>
    </TwoColSection>
  )
}

export default IntroductionSection
