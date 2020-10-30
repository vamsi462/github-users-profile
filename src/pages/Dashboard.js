import React from 'react'
import { Info, Navbar, Search, Repos, User } from '../components'

export default function Dashboard() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <Search/>
        <Info />
        <User />
        <Repos/>
      </div>
    );
}
 