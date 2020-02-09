import styled, { css } from 'styled-components'

export const common = {
  controls: css`
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-right: 4px;
    outline: none;
    padding: 12px 14px;
    &:hover {
      border: 1px solid #9b2fae;
      color: #9b2fae;
    }
    &:focus {
      border: 1px solid #9b2fae;
      color: #9b2fae;
    }
  `,
}

export const Button = styled.button`
  ${common.controls}
`

export const Select = styled.select`
  ${common.controls}
`
