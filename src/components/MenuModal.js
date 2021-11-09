import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.background};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: -130px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  padding-bottom: 100%;

  a {
    font-weight: 300;
    font-size: 36px;
    color: ${(props) => props.theme.text.darkest};
    padding-bottom: 0.618em;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.text.blueHighlight};
    }
  }
`;

export default function MenuModal({ open, links }) {
  // when a user opens the menu, a user shouldn't be able to scroll past the modal
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <StyledMenu open={open}>
      {links.map(({ text, link, gatsbyLink, target }) => (
        <React.Fragment key={text}>
          {gatsbyLink && (
            <Link to={link}>
              <span>{text}</span>
            </Link>
          )}
          {!gatsbyLink && (
            <a
              href={link}
              target={target ? "_blank" : ""}
              rel="noopener noreferrer"
            >
              {text}
            </a>
          )}
        </React.Fragment>
      ))}
    </StyledMenu>
  );
}

MenuModal.propTypes = {
  open: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      target: PropTypes.bool,
    })
  ).isRequired,
};
