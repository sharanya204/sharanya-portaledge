import NavLinks from './NavLinks'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import React from 'react'
import { Title, NavTitles, NavLinksDiv, NavButton } from '../styles/sharedStyles'

const Header = () => {
  return (
    <header>
      {/* <div> */}
        {/* <Link href="/" aria-label='Sound'>
          <div className="flex items-center justify-between">
            Home
          </div>
        </Link> */}
      {/* </div> */}
      <div>
        
        <NavLinksDiv>
          <Title> Sharanya's other portaledge </Title>
          <div>{NavLinks
          // .filter((link) => link.href !== '/')
          .map((link) => (
            <NavButton $theme='vampire'>
            <Link style={{ textDecoration: 'none' }}
              key={link.title}
              href={link.href}
            >
              <NavTitles> {link.title} </NavTitles>
            </Link>
            </NavButton>
          ))}</div>
        </NavLinksDiv>
      </div>
      <ThemeSwitch />
    </header>
  )
}

export default Header
