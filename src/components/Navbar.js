import React from 'react'
import styled from  'styled-components'
import{useAuth0} from '@auth0/auth0-react'


export default function Navbar() {
  const{isAuthenticated,loginWithRedirect,logout,isLoading,user} = useAuth0()
  const isUser = isAuthenticated&&user;
    return (
        <Wrapper>
          {isUser && user.picture && <img src={user.picture} alt={user.name}/>}
           {isUser&&user.name&&<h4>Welcome,<strong>{user.name.toUpperCase()}</strong></h4>}
            {isUser ?
             <button onClick={()=>{logout({returnTo:window.location.origin})}}>
              Logout
            </button>
            :
             <button onClick={loginWithRedirect}>
              Login
            </button>
            }
           
             

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
