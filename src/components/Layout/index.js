import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { ContentContainer } from '../common';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ContentContainer>
        {children}
      </ContentContainer>
      <Footer />
    </>
  )
}
