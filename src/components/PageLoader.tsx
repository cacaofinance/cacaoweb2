import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap-libs/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
    <img src="/images/gif3.gif" alt="" />
    </Wrapper>
  )
}

export default PageLoader
