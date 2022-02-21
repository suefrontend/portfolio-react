import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="page page-gray">      
      <div className="page-wrapper">
        <div className="contact">
          <h2 className="page__title page__title-center">Contact</h2>
          <p>Feel free to contact me.</p>
          <div className="contact__email">
            <span>oyamakayano@gmail.com</span>
          </div>
          <ul className="contact__list">
            <li className="contact__list__item"><a className="contact__list__link contact__list__link__linkedin" href="https://www.linkedin.com/in/kayano-oyama/" target="_blank">LinkedIn</a></li>
            <li className="contact__list__item"><a className="contact__list__link contact__list__link__github" href="https://github.com/suefrontend" target="_blank">Github</a></li>
            <li className="contact__list__item"><a className="contact__list__link contact__list__link__codesandbox" href="https://codesandbox.io/u/kaede-frontend" target="_blank">Codesandbox</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;
