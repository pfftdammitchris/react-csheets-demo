import React from 'react'
import styled from 'styled-components'
import Cheatsheets from 'react-csheets'
import UserActions from '../UserActions'
import Layout from '../Layout'
import { media, generatePdf, generateJPEG } from '../utils'
import { Stylesheet } from '../types'
import * as snippet from '../snippets'

const StyledRoot = styled.div<{
  children: React.ReactNode
  className?: string
  header?: React.ReactNode
  maxWidth?: string | number
  style?: React.CSSProperties
  padding?: number
}>`
  padding: ${({ padding }) =>
    typeof padding === 'number' ? `${padding}px` : padding};
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: inherit;
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  ${media.phone`
    padding: 12px;
    max-width: auto;
  `}
`

const StyledHeader = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px 12px !important;
  margin-bottom: 0 !important;
  text-align: center;
  small {
    font-size: 0.71rem;
  }
`

const StyledNotice = styled.h5`
  text-transform: none !important;
  margin-top: 0 !important;
  margin-bottom: 10px !important;
  text-align: center;
`

const snippets = [
  {
    id: 'contextRefs',
    title: 'Context, Refs, memo, lazy, Suspense',
    snippet: snippet.methods,
  },
  {
    id: 'returnTypes',
    title: 'Valid Return Types',
    snippet: snippet.returnTypes,
  },
  { id: 'error', title: 'Error', snippet: snippet.errors },
  {
    id: 'strict',
    title: 'Strict mode (detecting deprecations, side effects)',
    snippet: snippet.modes,
  },
  { id: 'fragments', title: 'Fragment', snippet: snippet.fragments },
  { id: 'hooks', title: 'Hooks', snippet: snippet.hooks },
  { id: 'defaultProps', title: 'Default Props', snippet: snippet.defaultProps },
  { id: 'states', title: 'Component States', snippet: snippet.states },
  { id: 'importing', title: 'Importing Components', snippet: snippet.imports },
  { id: 'rendering', title: 'Rendering Components', snippet: snippet.renders },
  { id: 'statics', title: 'Static Methods', snippet: snippet.statics },
  {
    id: 'pointerEvents',
    title: 'Pointer Events',
    snippet: snippet.pointerEvents,
  },
  {
    id: 'test',
    title: 'Test utils (act)',
    snippet: snippet.testing,
  },
]

function IndexPage() {
  const [theme, setTheme] = React.useState<Stylesheet>('coy')
  const ref = React.createRef()

  function onDragEnd(rows) {
    console.log('new rows: ', rows)
  }

  function onThemeChange(e: React.ChangeEvent<HTMLElement>) {
    console.log(e.target.value)
    if (theme !== e.target.value) {
      setTheme(e.target.value)
    }
  }

  return (
    <Layout>
      <StyledRoot>
        <StyledHeader>
          React v16+ Cheat Sheet
          <br />
          <small>@jsmanifest - Last Updated: 08/25/19</small>
          <br />
          <small>
            <a
              href="https://github.com/pfftdammitchris/react-cheatsheets"
              target="_blank"
            >
              Open Source Repository
            </a>
          </small>
        </StyledHeader>

        <StyledNotice>
          You can use this cheatsheet by bookmarking this page, generating a
          PDF, or JPEG image.
          <br />
          You can drag and re-order the columns before printing/generating your
          link. The sheet will persist after page refreshes.
        </StyledNotice>

        <UserActions
          innerRef={ref}
          columnCount={3}
          onSelect={onThemeChange}
          generateJPEG={generateJPEG('reactv16cheatsheet')}
          generatePdf={generatePdf('reactv16cheatsheet')}
        />

        <div ref={ref}>
          <Cheatsheets
            snippets={snippets}
            columnCount={3}
            language="jsx"
            theme={theme}
            onDragEnd={onDragEnd}
            renderHeader={(...args) => {
              console.log(args)
              return <h3>ea</h3>
            }}
            renderSnippet={(...args) => {
              console.log(args)
            }}
            renderActions={(...args) => {
              console.log(args)
              return null
            }}
          />
        </div>
      </StyledRoot>
    </Layout>
  )
}

export default IndexPage

/*
import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react'
import { MainMeta } from 'components/SEO'
import Page from 'components/Page'
import * as snippet from 'resources/reactCheatsheetSnippets'
import ReactCheatsheet from 'projects/ReactCheatsheet'
import { stylesheet } from 'projects/ReactCheatsheet/types'
import { generatePdf, generateJPEG } from 'projects/ReactCheatsheet/utils'
import UserActions from './UserActions'

const StyledHeader = styled(Header)`
  padding: 15px 12px !important;
  margin-bottom: 0 !important;
  small {
    font-size: 0.71rem;
  }
`

const StyledNotice = styled(Header)`
  text-transform: none !important;
  margin-top: 0 !important;
  margin-bottom: 10px !important;
`

const sections = [
  {
    id: 'contextRefs',
    title: 'Context, Refs, memo, lazy, Suspense',
    snippet: snippet.methods,
  },
  {
    id: 'returnTypes',
    title: 'Valid Return Types',
    snippet: snippet.returnTypes,
  },
  { id: 'error', title: 'Error', snippet: snippet.errors },
  {
    id: 'strict',
    title: 'Strict mode (detecting deprecations, side effects)',
    snippet: snippet.modes,
  },
  { id: 'fragments', title: 'Fragment', snippet: snippet.fragments },
  { id: 'hooks', title: 'Hooks', snippet: snippet.hooks },
  { id: 'defaultProps', title: 'Default Props', snippet: snippet.defaultProps },
  { id: 'states', title: 'Component States', snippet: snippet.states },
  { id: 'importing', title: 'Importing Components', snippet: snippet.imports },
  { id: 'rendering', title: 'Rendering Components', snippet: snippet.renders },
  { id: 'statics', title: 'Static Methods', snippet: snippet.statics },
  {
    id: 'pointerEvents',
    title: 'Pointer Events',
    snippet: snippet.pointerEvents,
  },
  {
    id: 'test',
    title: 'Test utils (act)',
    snippet: snippet.testing,
  },
]

const filename = 'reactv16cheatsheet'

const ReactCheatsheetPage: React.FC<any> = () => {
  function wrappedOnThemeChange(onThemeChange: (theme: stylesheet) => void) {
    return (e: React.SyntheticEvent, data: { value: stylesheet }) =>
      onThemeChange(data.value)
  }

  const columnCount = 3

  return (
    <Page>
      <MainMeta />

      <StyledHeader size="medium" textAlign="center">
        React v16+ Cheat Sheet
        <br />
        <small>@jsmanifest - Last Updated: 08/25/19</small>
        <br />
        <small>
          <a
            href="https://github.com/pfftdammitchris/react-cheatsheets"
            target="_blank"
          >
            Open Source Repository
          </a>
        </small>
      </StyledHeader>

      <StyledNotice textAlign="center" sub>
        You can use this cheatsheet by bookmarking this page, generating a PDF,
        or JPEG image.
        <br />
        You can drag and re-order the columns before printing/generating your
        link. The sheet will persist after page refreshes.
      </StyledNotice>

      <ReactCheatsheet
        columnCount={columnCount}
        sections={sections}
        render={({ Cheatsheet, ref, onThemeChange }: any) => (
          <div style={{ width: '100%' }}>
            <UserActions
              innerRef={ref}
              columnCount={columnCount}
              generatePdf={generatePdf(filename)}
              generateJPEG={generateJPEG(filename)}
              onSelect={wrappedOnThemeChange(onThemeChange)}
            />
            <Cheatsheet />
          </div>
        )}
      />
    </Page>
  )
}

export default ReactCheatsheetPage

*/
