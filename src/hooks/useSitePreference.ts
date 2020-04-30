import { useStaticQuery, graphql } from 'gatsby';
import { SitePreferenceQuery } from '~/types/graphql';

/**
 * ウェブサイトの設定情報を取得するHooks
 */
const useSitePreference = () => {
  const { contentfulSitePreference }: SitePreferenceQuery = useStaticQuery(
    graphql`
      query SitePreference {
        contentfulSitePreference {
          sliderPictures {
            title
            file {
              url
            }
          }
        }
      }
    `
  );

  return contentfulSitePreference || {};
};

export { useSitePreference };
