import React from 'react'
import styled from 'styled-components'
import { Button, Select } from './styled'
import { media, stylesheets } from './utils'
import { Stylesheet } from './types'

export interface UserActionsProps {
  innerRef: any
  columnCount: number
  generatePdf: (elem: React.RefObject<HTMLElement>) => Promise<void>
  generateJPEG: (elem: React.RefObject<HTMLElement>) => Promise<void>
  onSelect: (e: React.ChangeEvent<HTMLElement>) => void
}

const toSelectStylesheets: Array<{
  value: Stylesheet
  text: Stylesheet
}> = stylesheets.map((s: any) => ({ value: s, text: s }))

const StyledActions = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.phone`
    display: block;
    button, select {
      width: 100%;
      margin-bottom: 4px;
    }
  `}
  ${media.tablet`
    button {
      font-size: 0.8rem !important;
    }
    select {
      font-size: 0.8rem !important;
      span.text {
        font-size: 0.80rem;
      }
    }
  `}
`

const ReactCheatsheetUserActions: React.FC<UserActionsProps> = ({
  innerRef,
  generatePdf,
  generateJPEG,
  onSelect,
}) => (
  <StyledActions>
    <Button type="button" onClick={() => generatePdf(innerRef.current)}>
      Generate PDF
    </Button>
    <Button type="button" onClick={() => generateJPEG(innerRef.current)}>
      Generate JPEG
    </Button>
    <Select onChange={onSelect} placeholder="Choose another theme">
      {toSelectStylesheets.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </Select>
  </StyledActions>
)

export default ReactCheatsheetUserActions
