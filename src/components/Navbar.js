import React from 'react'
import styled from  'styled-components'

export default function Navbar() {
    return (
        <Wrapper>
            
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
`
