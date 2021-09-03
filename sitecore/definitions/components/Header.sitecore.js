// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Header',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'Logo',
        displayName: 'Header Logo Image',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'Links',
        displayName: 'Header Navigation Links',
        type: CommonFieldTypes.ContentList,
      },
      {
        name: 'Theme',
        displayName: 'Header Theme',
        standardValue: 'bg-dark',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
