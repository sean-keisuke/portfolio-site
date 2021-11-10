import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import BurgerMenu from "./BurgerMenu";
import MenuModal from "./MenuModal";

const links = [
  { text: "Home", link: "/", gatsbyLink: true },
  { text: "Projects", link: "/projects", gatsbyLink: true },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/sean-mullarkey-25b07b205/",
    target: true,
  },
  {
    text: "Github",
    link: "https://github.com/sean-keisuke",
    target: true,
  },
];

const StyledHeader = styled.header`
  padding: 36px 75px 10px;

  .navigation-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 10px 16px;
    padding: 0px 10px;
  }
  .navigation-bar a {
    font-weight: bold;
    font-style: normal;
    font-size: 16px;
    text-transform: uppercase;
    color: ${(props) => props.theme.text.light};
    transition: color 0.3s ease-in-out;
    text-decoration: none;
  }

  .navigation-bar a:hover {
    color: ${(props) => props.theme.text.lighter};
  }

  .menu-modal-container {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .navigation-bar {
      display: none;
    }
    .menu-modal-container {
      display: block;
    }
  }
`;

const activeStyles = {
  color: "black"
};

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <StyledHeader>
      <div className="menu-modal-container">
        <BurgerMenu open={menuOpen} setOpen={setMenuOpen} />
        <MenuModal open={menuOpen} links={links} />
      </div>
      <div className="navigation-bar">
        <ul>
          {links.map(({ text, link, gatsbyLink, target }) => (
            <li key={text}>
              {gatsbyLink && (
                <Link to={link} activeStyle={activeStyles}>
                  {text}
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
            </li>
          ))}
        </ul>
      </div>
    </StyledHeader>
  );
}
