import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <div1>
    <Link href="/">
      <a style={{display: "flex", alignItems: "center", color: 'white'}}>
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </a>
    </Link>
  </div1>
  <Div2>
    <li>
      <Link href="#project">
      <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
      <NavLink>Technologies Used</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
      <NavLink>About Me</NavLink>
      </Link>
    </li>
  </Div2>
  </Container>
);

export default Header;
