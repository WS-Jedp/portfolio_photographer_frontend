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
import { PortraitCollection } from '../../components/portraitCollection'
import { CoverCollection } from '../../components/coverCollection'

export const Home:React.FC= () => (
  <section>
    <CoverCollection picture={Image} upTitle="Hello" downTitle="World" description="Welcome to the best part of us" date="2020 - 02 - 05" />
  </section>
)