import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: ${({ open }) => (open ? "0%" : "2%")};

  left: ${({ open }) => (open ? " 100%" : 0)};
  transform: ${({ open }) => (open ? " translateX(-100%)" : "translateX(0)")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: ${({ open }) => (open ? "4rem" : "2rem")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  background-color: ${({ open }) =>
    open ? (props) => props.theme.burgerIconBackground : "transparent"};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }

  .burger-icon-item {
    width: 2rem;
    height: ${({ open }) => (open ? "0.1rem" : "3px")};
    background-color: ${({ open, props }) =>
      open ? (props) => props.theme.text.lightest : props.theme.text.darkest};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: ${({ open }) => (open ? "-14px" : "1px")};
    left: 23px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function BurgerMenu({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="burger-icon-item" />
      <div className="burger-icon-item" />
      <div className="burger-icon-item" />
    </StyledBurger>
  );
}

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
