import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import fields from './mockFields';
import './index.scss';
const heroImage = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Image;
const title = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Title;
const description = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Description;
const orientation =
  fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Orientation?.value;

const HeroBanner = (props) => {
  return (
    <div className="c-hero-banner">
      <div className="c-hero-banner__container">
        <div className="c-hero-banner__container__image">
          <Image media={heroImage} />
        </div>
        <div
          className={[
            'c-hero-banner__container__content',
            `c-hero-banner__container__content--${orientation}`,
          ].join(' ')}
        >
          <div className="c-hero-banner__container__content__title">
            <Text type="h1" field={title} />
          </div>
          <div className="c-hero-banner__container__content__description">
            <Text type="p" field={description} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
