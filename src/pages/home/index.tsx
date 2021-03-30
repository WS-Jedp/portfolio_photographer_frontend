import React from 'react'

import Image from '../../assets/image_dive_7.jpg'

import { MdArrowForward } from 'react-icons/md'

import { Title } from '../../components/title'
import { Paragraph } from '../../components/paragraph'
import { Featured } from '../../components/featured'
import { Button } from '../../components/button'
import { FeaturedCollection } from '../../components/featuredCollection'
import { SelfPicture } from '../../components/selfPicture'
import { PortraitPicture } from '../../components/portraitPicture'

export const Home:React.FC= () => (
  <section>
    <PortraitPicture picture={Image} title="Moments" />
  </section>
)