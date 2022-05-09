import React from 'react';
import config from '../../config';
import SimpleMap from './SimpleMap.js';

export default function Footer() {


  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Nous situer</h2>
        <div className="row">
          <div className="col-6 col-12-medium">
              <SimpleMap/>
          </div>
          <div className="col-6 col-12-medium">
            <ul className="contact">
              <li className="fa-home">{config.address}</li>
              <li className="fa-phone">{config.phone}</li>

            </ul>
          </div>
        </div>
        <ul className="copyright">
          <li>&copy; Ecole de Natation Erdeven - 2022 </li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
