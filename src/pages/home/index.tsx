import React from 'react'
import Image from '../../assets/image_dive_7.jpg'

import { MdArrowDownward } from 'react-icons/md'
import { HomeWrapper } from './styles'

import { Layout } from '../../layout'


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
import { PictureSmall } from '../../components/pictureSmall'

import { HomePage as HomePageContent } from '../../utils/content'
import { ContentImage } from '../../components/contentImage'
import { ContentSection } from '../../components/contentSection'
import { ContentText } from '../../components/contentText'
import { LastCollections } from '../../components/lastCollections'
import { LastPictures } from '../../components/lastPictures'

export const Home:React.FC= () => {

  const DownButton = <Button title="Dive Into More" to="#" Icon={MdArrowDownward} color="black" />
  const HomeIntroductionFeatured = <Featured location="Sweeden" url={Image} albumName="Moments" photoName="Lost" title="Featured" />
  const HomeIntroductionImage = <ContentImage 
    Picture={HomeIntroductionFeatured}
    children={DownButton}
    position="rigth"
  />

  const HomeFeaturedCollection = <FeaturedCollection url={Image} description='"Something is here about the picture"' name="Moments" to="/" position="right" />
 
  const HomeConceptualAlbumText = <ContentText color="black" position="left" upTitle="Conceptual" downTitle="Albums" text="A whole process to find the correct moment" children={<LastCollections columns collections={HomePageContent.lastCollectionsJSON} />} />


  return (
    <Layout>
        <ContentSection 
          main={HomePageContent.IntroductionText}
          secondary={HomeIntroductionImage}
          reverse={true}
        />
        <ContentSection 
          main={HomeConceptualAlbumText}
          secondary={HomeFeaturedCollection}
          reverse={false}
        />
        <ContentSection 
          main={HomePageContent.ProcessText}
          secondary={<LastPictures images={HomePageContent.lastPicturesJSON} color="black" />}
          reverse={true}
        />
    </Layout>
  )
}