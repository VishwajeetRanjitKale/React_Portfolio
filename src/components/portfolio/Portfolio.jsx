import React from 'react'
import './portfolio.css'
import SURVEY from '../../assets/survey_form_ss.png'
import TOUR from '../../assets/tour_travel_ss.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={SURVEY} alt="" className='surveyimg'/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={TOUR} alt="" className='surveyimg'/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={SURVEY} alt="" className='surveyimg'/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={SURVEY} alt="" className='surveyimg'/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio