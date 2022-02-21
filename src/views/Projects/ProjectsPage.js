import React from 'react';
import './styles.css';
import project01 from '../../assets/images/projects/news-thumbnail.jpg';
import project02 from '../../assets//images/projects/digiqlo.jpg';
import project03 from '../../assets/images/projects/bark-walk.jpg';
import project04 from '../../assets/images/projects/happy-cake.jpg';

const Project = () => {
  return (
    <div className="page">      
    <div className="page-wrapper">
      <div className="project">
          <h2 className="page__title page__title-center">projects</h2>

          <div className="project__item">
            <div className="row">
              <div className="col col-5">
                <figure className="project__item__img-desktop">
                  <a href="https://suefrontend.github.io/match-headline-and-thumbnail-vanilla-js" target="_blank">
                    <img className="project__item__img" src={project01} alt="Match Headline and Thumbnail" />
                  </a>
                </figure>
              </div>
              <div className="col col-5">
                <h3 className="project__title">Quiz App</h3>
                <span className="project__subtitle">Thumbnail Quiz - Match Headline and Thumbnail</span>
                <div className="project__label">
                  <span className="project__label__item">JavaScript</span>
                  <span className="project__label__item">API</span>
                </div>
                <p className="project__text">Match Headline and Thumbnail is a quiz app aimed for people who wish to get used to reading news in English. Users select from a group of thumbnails, the image that best matches a provided headline.                   
                 News data comes from CBC RSS in xml format, and it is translated to JSON via RSS to JSON online converter.</p>
                <div className="project__link">
                  <a className="btn btn-green" href="https://suefrontend.github.io/match-headline-and-thumbnail-vanilla-js" target="_blank">view live</a>
                  <a className="btn btn-green" href="https://github.com/suefrontend/match-headline-and-thumbnail-vanilla-js" target="_blank">github</a>
                </div>
              </div>
            </div>
          </div>

            <div className="project__item">
              <div className="row">
                <div className="col col-5">
                  <figure className="project__item__img-desktop">
                    <img className="project__item__img" src={project02} alt="DIGIQLO" />
                  </figure>
                </div>
                <div className="col col-5">
                  <h3 className="project__title">wardrobes management app</h3>
                  <span className="project__subtitle">DIGIQLO - Digital Wardrobes</span>
                  <div className="project__label">
                    <span className="project__label__item">React</span>
                    <span className="project__label__item">Hooks</span>
                    <span className="project__label__item">Firebase</span>
                  </div>
                  <p className="project__text">DIGIQLO is a wardrobes management app that tracks your inventory and helps you manage spending based on your own defined limit. It features a detailed report page
                    that provides data on spending, colors, seasonal categories, and much more. This project was built in React using hooks for state management and Firebase to manage data.</p>
                  <div className="project__link">
                    <a className="btn btn-green" href="https://suefrontend.github.io/digiqlo/" target="_blank">view live</a>
                    <a className="btn btn-green" href="https://github.com/suefrontend/digiqlo" target="_blank">github</a>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="project__item">
              <div className="row">
                <div className="col col-5">
                  <figure className="project__item__img-desktop">
                    <img className="project__item__img" src={project03} alt="Bark Walk" />
                  </figure>
                </div>
                <div className="col col-5">
                  <h3 className="project__title">dog walking app</h3>
                  <span className="project__subtitle">Bark Walk - Find Local Dog Walkers</span>
                  <div className="project__label">
                    <span className="project__label__item">React</span>
                    <span className="project__label__item">Next.js</span>
                    <span className="project__label__item">Firebase</span>
                  </div>
                  <p className="project__text">Bark Walk is a personal project currently in development. Is it a service which you can use to search for dog walkers in your area. You can search to see walker's profiles and ratings to best match you with your dog's most compatible walker. Build with Next.js (React), and Firebase for database management.</p>
                  <span className="attention">* Currently in development</span>
                </div>
              </div>
            </div>

            <div className="project__item">
              <div className="row">
                <div className="col col-5">
                  <figure className="project__item__img-desktop">
                    <img className="project__item__img" src={project04} alt="Happy Cakes" />
                  </figure>
                </div>
                <div className="col col-5">
                  <h3 className="project__title">Simple Ecommerce</h3>
                  <span className="project__subtitle">Happy Cakes - The Pastry Shop</span>
                  <div className="project__label">
                    <span className="project__label__item">Vue</span>
                    <span className="project__label__item">Vuex</span>
                    <span className="project__label__item">Firebase</span>
                  </div>
                  <p className="project__text">Happy Cakes is a simple eCommerce website. Users click on the items to add them to a shopping list  that conveniently displays the product price and total of all items. Used Vuex for state management, and Firebase for data management.
                  </p>
                  <div className="project__link">
                    <a className="btn btn-green" href="https://suefrontend.github.io/vue-pastry-shop/" target="_blank">view live</a>
                    <a className="btn btn-green" href="https://github.com/suefrontend/vue-pastry-shop" target="_blank">github</a>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
    </div>
  </div>
  )
}

export default Project;
