import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title, description, lang, meta }) {
  //   const { site } = useStaticQuery(
  //     graphql`
  //       query {
  //         site {
  //           siteMetadata {
  //             title
  //             description
  //           }
  //         }
  //       }
  //     `
  //   );
  //   const metaDescription = description || site.siteMetadata.description;
  const metaDescription = description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      //   titleTemplate={`%s | ${site.siteMetadata.title}`}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
