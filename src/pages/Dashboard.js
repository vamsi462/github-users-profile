import React from 'react'
import { Info, Navbar, Search, Repos, User } from '../components'
import { GithubContext } from '../context/context';
import imgd from '../images/Curve-Loading.gif'

export default function Dashboard() {
  const{isLoading}= React.useContext(GithubContext)
  if(isLoading){
    return(
      <main>
        <Navbar/>
        <Search/>
        <img src={imgd} alt="loading"/>
        </main>
    )
  }
    return (
      <main>
       <Navbar/>
        <Search/>
        <Info />
        <User />
        <Repos/>
      </main>
    );
}
 