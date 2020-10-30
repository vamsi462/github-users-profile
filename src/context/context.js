import React, { useEffect, useState } from 'react'
import { mockUsers } from './Data/mockUsers';
import { mockFollowers } from './Data/mockFollowers';
import { mockRepos } from './Data/mockRepos';
import axios from 'axios';




const rootUrl = "https://api.github.com"
const GithubContext = React.createContext();

const GitHubProvider =({children} )=>{
    const [githubUser,setGithubUser] = useState(mockUsers)
    const[repos,setRepos] = useState(mockRepos)
    const[followers,setFollowers] = useState(mockFollowers)
    const[error,setError]= useState({ show: false, msg: '' })
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    //requests for the users
   const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
          console.log(data)
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly rate limit!');
        }
      })
      .catch((err) => console.log(err));
  };
  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

    useEffect(checkRequests,[])

    return(
        <GithubContext.Provider value={{githubUser,repos,followers,requests,error}}>
            {children}
        </GithubContext.Provider>
    )
    
}


export{GitHubProvider,GithubContext}