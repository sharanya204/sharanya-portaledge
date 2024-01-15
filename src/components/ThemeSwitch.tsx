'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import React from 'react'
import styled, { css } from 'styled-components'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  const Button = styled.button<{ $theme?: string; }>`
    /* Adapt the colors based on primary prop */
    ${props => { switch (props.$theme) { 
      case 'dark':
        return css`
          background-color: '#BF4F74';
        `
      case 'light':
        return css`
          background-color: '#FFFFFF';
        `
      }
    }
    };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <Button $theme='dark' onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>Eclipse</Button>
      {/* <Button $primary>Primary</Button> */}
    </div>
  )
}

export default ThemeSwitch
