import React from 'react'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as stylesheets from 'react-syntax-highlighter/dist/esm/styles/prism'
import { stylesheet } from './types'

export function trim(str: string) {
  if (typeof str === 'string') return str.trim()
  return str
}

const StyledCodeBody = styled.div`
  position: relative;
`

const CodeBox: React.FC<{ theme: stylesheet }> = ({ children, theme }) => (
  <StyledCodeBody>
    <SyntaxHighlighter
      language="jsx"
      style={stylesheets[theme]}
      codeTagProps={{
        style: {
          fontSize: '0.8rem',
          width: '100%',
        },
      }}
      customStyle={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '100%',
        padding: 6,
        lineHeight: 0.8,
        boxShadow: '3px 6px 14px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(40, 60, 190, 0.17)',
      }}
    >
      {children}
    </SyntaxHighlighter>
  </StyledCodeBody>
)

export default CodeBox
