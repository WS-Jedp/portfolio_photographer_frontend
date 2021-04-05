import React from 'react'
import { MdArrowDownward } from 'react-icons/md'
import { HomeWrapper } from './styles'

import { Layout } from '../../layout'

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
import { PictureDetail } from '../../components/pictureDetail'

import { ContentText } from '../../components/contentText'
import { ContentImage } from '../../components/contentImage'
import { ContentSection } from '../../components/contentSection'
import { Menu } from '../../components/menu'

import { HomePage } from '../../utils/content'

export const Home:React.FC= () => (
  <Layout>
      <ContentSection 
        main={HomePage.contentText}
        secondary={HomePage.ContentImage}
        reverse={true}
      />
      <ContentSection 
        main={HomePage.contentText}
        secondary={HomePage.ContentImage}
        reverse={true}
      />
  </Layout>
)