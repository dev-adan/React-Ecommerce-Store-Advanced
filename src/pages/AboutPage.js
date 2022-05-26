import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return  <main>
     <PageHero title='about'/>
     <Wrapper className='page section section-center'>
       <img src={aboutImg} alt='about-image'/>
       <article>
        <div className='title'>
          <h2>out story</h2>
          <div className='underline'></div>
          <p>we’ve brought together the best of both worlds. We saw an opportunity to produce high-end office furniture and sell it directly to our clients, applying D2C principles to an antiquated B2B industry littered with middlemen. The result is a series of desks, ergonomic chairs, storage products, and conference furniture sold at between one-third and one-half of the price of comparable quality products, with space design, delivery and installation included. We also offer a trade-in program, so you can add and exchange furniture as your team grows and needs change. Since launching our first products in Q1 of 2019, we’ve done over $1M in sales, including nearly $400k last month!</p>
        </div>
       </article>
     </Wrapper>
  </main>
  
 
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
