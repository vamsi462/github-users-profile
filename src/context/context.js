import React, { useEffect, useState } from 'react'
import { mockUsers } from './Data/mockUsers';
import { mockFollowers } from './Data/mockFollowers';
import { mockRepos } from './Data/mockRepos';




const GithubContext = React.createContext();

const GitHubProvider =({children} )=>{
    const [githubUser,setGithubUser] = useState(mockUsers)
    const[repos,setRepos] = useState(mockRepos)
    const[followers,setFollowers] = useState(mockFollowers)
    return(
        <GithubContext.Provider value={{githubUser,repos,followers}}>
            {children}
        </GithubContext.Provider>
    )
    
}


export{GitHubProvider,GithubContext}