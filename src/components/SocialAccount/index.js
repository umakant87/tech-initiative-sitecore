import React from 'react';
import Link from '../Link/index';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const SocialAccount = (props) => {
  props = props?.child ? props?.props : props;
  const { socialmenus } = props;
  const getIcon = (icon) => {
    if (icon === 'facebook') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faFacebook} />;
    } else if (icon === 'twitter') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faTwitter} />;
    } else if (icon === 'instagram') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faInstagram} />;
    } else if (icon === 'youtube') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faYoutube} />;
    } else if (icon === 'linkedin') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faLinkedinIn} />;
    }
  };
  return (
    <aside className="c-social-account">
      <ul className="c-social-account__list">
        {socialmenus.map((socialmenu, index) => {
          return (
            <li key={index} className="c-social-account__list__item">
              <Link
                titleLabel={socialmenu.label}
                isExternal={true}
                path={socialmenu.url}
                modifiers="c-social-account__list__item__link"
              >
                {getIcon(socialmenu.service)}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default SocialAccount;
