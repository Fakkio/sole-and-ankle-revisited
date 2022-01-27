/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import {DialogContent, DialogOverlay} from "@reach/dialog";

import {WEIGHTS} from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({isOpen, onDismiss}) => (
  <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <Content aria-label="Menu">
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </CloseButton>
      <Grow />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Content>
  </Overlay>
);

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  padding: 32px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 0;
  top: 10px;
  padding: 16px;
`;

const Grow = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  flex: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled(Grow)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
`;
