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
import { Menu } from '../../components/menu'

const FeaturedImage = <Featured location="Sweeden" url={Image} albumName="Moments" photoName="Lost" title="Lost" />
const DownButton = <Button title="Dive Into More" to="#" Icon={MdArrowDownward} color="black" />

export const Home:React.FC= () => (
  <Layout>
    <article className="menu-content">
      <ContentText 
        color="black"
        position="left"
        upTitle="Hello"
        downTitle="World"
        text="Hello world, we are innovating in multiple things, come with us to the future!" 
      />
      <ContentImage 
        Picture={FeaturedImage}
        children={DownButton}
      />
    </article>
  </Layout>
)