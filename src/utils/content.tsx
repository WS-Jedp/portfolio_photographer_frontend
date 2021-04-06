import React from 'react'
import Image from '../assets/image_dive_7.jpg'

import { MdArrowDownward } from 'react-icons/md'
import { ContentText } from '../components/contentText'
import { ContentImage } from '../components/contentImage'
import { Featured } from '../components/featured'
import { Button } from '../components/button'

import { FeaturedCollection } from '../components/featuredCollection'


// Home Page Content
const HomeIntroductionText = <ContentText  color="black" position="right" upTitle="Welcome," downTitle="To Deep Sea" text="A whole new world of Experiences" />
const HomeProcessText = <ContentText color="black" position="right" upTitle="Magical" downTitle="Process" text="A whole process to find the correct moment" />
const collections = [
    {
      date: "2020-02-04",
      title: "Hello world",
      description: "Hello there thsi is the description",
      image: Image
    },
    {
      date: "2020-02-04",
      title: "Hello world",
      description: "Hello there thsi is the description",
      image: Image
    },
    {
      date: "2020-02-04",
      title: "Hello world",
      description: "Hello there thsi is the description",
      image: Image
    },
]

type LastPictureData = {
    image: string;
    title: string;
    position?: 'left' | 'right';
}
const pictures:LastPictureData[] = [
    {
        image: Image,
        title: "Title 1",
        position: "left",
    },
    {
        image: Image,
        title: "Title 2",
        position: "right",
    },
    {
        image: Image,
        title: "Title 3",
        position: "left",
    },
] 

const HomePage = {    
    IntroductionText: HomeIntroductionText,
    ProcessText: HomeProcessText,
    lastCollectionsJSON: collections,
    lastPicturesJSON: pictures
}

export {
    HomePage
}
