import React from 'react'
import Hero from '../components/Hero.jsx'
import Book from '../components/Book.jsx'
import ShopIntro from '../components/ShopIntro.jsx'
import BlogIntro from '../components/BlogIntro.jsx'


const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Book />
      <ShopIntro />
      <BlogIntro />
    </>
  )
}

export default HomeScreen