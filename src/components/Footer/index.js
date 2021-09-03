import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Link from '../Link/index';
import SocialAccount from '../SocialAccount/index';
import './index.scss';
import fields from './mockFields.js';

const address = fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.Address?.value;
const email = fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.Email?.value;
const phone = fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.Phone?.value;
const copyrightContent =
  fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.CopyRightContent;
const disclaimerText =
  fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.DisclaimerText;
const links = fields?.sitecore?.route?.placeholders['jss-footer']?.[0]?.fields?.Links;

const Footer = (props) => {
  return (
    <div className="c-footer-address">
      <div className="c-footer-address__container">
        <div className="c-footer-address__footer-links">
          <h2>Useful links</h2>
          <ul className="c-footer-address__list">
            {links &&
              links.map((link, index) => {
                return (
                  <li className="c-footer-address__item" key={index}>
                    <Link
                      isExternal
                      label={link.displayName}
                      path={link.url}
                      titleLabel={link.displayName}
                    >
                      {link.displayName}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="c-footer-address__footer-address">
          <h2>Address</h2>
          <ul>
            <li>
              <i className={['fas', 'fa-map-marker-alt'].join(' ')}></i> {address}
            </li>
            <li>
              <i className={['fas', 'fa-envelope'].join(' ')}></i> {email}
            </li>
            <li>
              <i className={['fas', 'fa-phone'].join(' ')}></i> {phone}
            </li>
          </ul>
        </div>
        <div className="c-footer-address__social-account">
          <h2>Connections</h2>
          <SocialAccount
            socialmenus={[
              {
                label: 'Facebook',
                service: 'facebook',
                url: 'https://facebook.com/nexxus',
              },
              {
                label: 'Twitter',
                service: 'twitter',
                url: 'https://twitter.com',
              },
              {
                label: 'Instagram',
                service: 'instagram',
                url: 'https://www.instagram.com/',
              },
              {
                label: 'Youtube',
                service: 'youtube',
                url: 'https://www.youtube.com/',
              },
              {
                label: 'LinkedIn',
                service: 'linkedin',
                url: 'https://www.linkedin.com/',
              },
            ]}
          />
        </div>
      </div>
      <div className="c-footer-address__copyright">
        <Text tag="p" field={copyrightContent} />
        <Text tag="p" field={disclaimerText} />
      </div>
    </div>
  );
};

export default Footer;
