import React from "react";
import styled from "styled-components/macro";

import {QUERIES, WEIGHTS} from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" strokeWidth={2} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5.25rem, 5rem); //48px;
  margin: 0 0 0 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
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

const MobileNav = styled.div`
  display: none;
  margin-left: auto;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 1.5rem;
  }
`;

export default Header;
