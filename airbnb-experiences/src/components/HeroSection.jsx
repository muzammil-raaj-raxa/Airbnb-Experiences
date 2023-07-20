import React from 'react'
import HeroImages from '../assets/hero-section-image.png'

export default function HeroSection() {
  return (
    <section className='hero'>
      <img src={HeroImages} alt='Hero Section Images' className='hero-images' />
      <h1 className='hero-title'>Online Experiences</h1>
      <p className='hero-desc'>Join unique interactive activities led by <br></br> one-of-a-kind hosts-all without leaving <br></br> home</p>
    </section>
  )
}
