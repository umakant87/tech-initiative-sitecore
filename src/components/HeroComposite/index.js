import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import fields from './mockFields';
import Button from '../Button/index';
import './index.scss';

const heroImage = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Image;
const title = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Title;
const description = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Description;
const cta = fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Cta;
const orientation =
  fields?.sitecore?.route?.placeholders['jss-main']?.[0]?.fields?.Orientation?.value;
const HeroComposite = (props) => {
  return (
    <div className="c-hero-composite">
      <div
        className={[
          'c-hero-composite__container',
          `c-hero-composite__container--${orientation}`,
        ].join(' ')}
      >
        <div className="c-hero-composite__container__image">
          <Image media={heroImage} />
        </div>
        <div className="c-hero-composite__container__content">
          <div className="c-hero-composite__container__content__title">
            <Text type="h1" field={title} />
          </div>
          <div className="c-hero-composite__container__content__description">
            <Text type="p" field={description} />
          </div>
          {cta && (
            <div className="c-hero-composite__container__content__cta">
              <Button
                className="primary"
                type="button"
                size="medium"
                label={cta.value.text}
                callToAction={cta.value.url}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComposite;
