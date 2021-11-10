import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Styles = styled.div`
  padding: 10px 0;
  .featured-project-container {
    display: flex;
    border-radius: 10px;
  }
  .project-image-container,
  .project-description {
    width: 50%;
    padding: 17px;
  }
  .project-description h3 {
    color: ${(props) => props.theme.text.darkest};
    line-height: 2em;
    font-weight: 300;
  }

  .project-description-text a {
    padding-bottom: 0.05em;
    text-decoration: none;
  }

  .featured-project-spacer {
    background-color: #ddd;
    border: none;
    height: 1px;
    width: 68%;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
  .read-more-anchor {
    text-decoration: none;
  }
  .read-more-button {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    border-width: 2px;
    border-style: solid;
    background-color: transparent;
    color: ${(props) => props.theme.text.darkest};
    padding: 21px 34px;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  .read-more-button:hover {
    color: ${(props) => props.theme.text.lightest};
    background: ${(props) => props.theme.button};
    padding-right: 24px;
    padding-left: 8px;
  }
  .read-more-button:after {
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.5s;
  }
  @media screen and (max-width: 640px) {
    h3,
    p {
      text-align: center;
    }
    .featured-projects-wrapper {
      padding: 0;
    }
    .featured-project-container {
      display: block;
    }
    .project-image-container,
    .project-description {
      width: 100%;
      padding: 0 0 24px;
    }
    img {
      height: auto;
    }
  }
`;

export default function IndividualProject({
  projectTitle,
  projectDescription,
  buttonText,
  imageName,
  imageSrc,
  writeupLink,
}) {
  return (
    <Styles>
      <div className="featured-project-container">
        <div className="project-image-container">
          {writeupLink && (
            <Link to={writeupLink}>
              {<img src={imageSrc} alt={imageName} />}
            </Link>
          )}
          {!writeupLink && <img src={imageSrc} alt={imageName} />}
        </div>
        <div className="project-description">
          <h3>{projectTitle}</h3>
          <p className="project-description-text">{projectDescription}&nbsp;</p>
          {buttonText && (
            <Link to={writeupLink} className="read-more-anchor">
              <div className="read-more-button">{buttonText}</div>
            </Link>
          )}
        </div>
      </div>
    </Styles>
  );
}

IndividualProject.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  writeupPrompt: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  imageName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  writeupLink: PropTypes.string.isRequired,
};

IndividualProject.defaultProps = {
  buttonText: "",
  imageLink: "",
};
