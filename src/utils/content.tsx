import React from 'react'

import { MdArrowDownward } from 'react-icons/md'
import { ContentText } from '../components/contentText'
import { ContentImage } from '../components/contentImage'
import { Featured } from '../components/featured'
import { Button } from '../components/button'
import Image from '../assets/image_dive_7.jpg'


const HomeFeatured = <Featured location="Sweeden" url={Image} albumName="Moments" photoName="Lost" title="Lost" />
const DownButton = <Button title="Dive Into More" to="#" Icon={MdArrowDownward} color="black" />
const HomeMainContent = <ContentText  color="black" position="right" upTitle="Welcome," downTitle="To Deep Sea" text="A whole new world of Experiences" />
const HomeMainImage = <ContentImage 
  Picture={HomeFeatured}
  children={DownButton}
  position="rigth"
/>
const HomePage = {    
    contentText: HomeMainContent,
    ContentImage: HomeMainImage
}

export {
    HomePage
}
