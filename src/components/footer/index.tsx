import React from 'react'
import Image from '../../assets/image_dive_7.jpg'

import { FooterWrapper, SocialMediaWrapper } from './styles'
import { ContentSection } from '../contentSection'
import { ContentText } from '../contentText'
import { ContentImage } from '../contentImage'
import { SelfPicture } from '../selfPicture'

export const Footer:React.FC = () => {

    const SocialMedia = (
        <SocialMediaWrapper>
            <div className="media">
                Social Media
            </div>
            <div className="email">
                deepsea@deep.sea
            </div>
        </SocialMediaWrapper>
    )

    const FooterText = <ContentText upTitle="Let's find" downTitle="Magic" text="Talk to me and let's create a magical moment"  color="white" position="left" children={SocialMedia}  />
    const FooterSelfPicture = <SelfPicture picture={Image} caption='"Dive into the deepness of the life"' figCaption="Deep Sea" position="rigth"  />
    const FooterImage = <ContentImage Picture={FooterSelfPicture} position="rigth" />

    return (
        <FooterWrapper>
            <ContentSection 
                main={FooterText}
                secondary={FooterImage}
                color="black"
            />
        </FooterWrapper>
    )
}