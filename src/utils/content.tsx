import React from 'react'

import { MdArrowDownward } from 'react-icons/md'
import { ContentText } from '../components/contentText'
import { ContentImage } from '../components/contentImage'
import { Featured } from '../components/featured'
import { Button } from '../components/button'

import { FeaturedCollection } from '../components/featuredCollection'


// Home Page Content
const HomeIntroductionText = <ContentText  color="black" position="right" upTitle="Welcome," downTitle="To Deep Sea" text="A whole new world of Experiences" />


const HomePage = {    
    IntroductionText: HomeIntroductionText,
}

export {
    HomePage
}
