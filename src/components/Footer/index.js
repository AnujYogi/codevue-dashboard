import React from 'react'
import { FooterBody, FooterWrapper, PrivacyPolicy, SocialMediaWrapper } from './FooterElement'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBody>
        <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        <SocialMediaWrapper></SocialMediaWrapper>
      </FooterBody>
    </FooterWrapper>
  )
}
