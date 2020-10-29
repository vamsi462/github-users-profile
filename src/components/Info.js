import React from 'react'
import { GithubContext } from '../context/context'

export default function Info() {
    const data = React.useContext(GithubContext)
    return (
        <div>
            info  {data}
        </div>
    )
}
