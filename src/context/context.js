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


    //get user details
    const searchGithubUser= async(user)=>{
        toggleError()
        setIsLoading(true)
      const response = await axios(`${rootUrl}/users/${user}`)
      .catch((err) =>
          console.log(err)
      );

      if(response){
          setGithubUser(response.data)
        const { login, followers_url } = response.data;

        //reposurl
         axios(`${rootUrl}/users/${login}/repos?per_page=100`)
         .then((response)=>{
            setRepos(response.data)
         })

          axios(`${followers_url}?per_page=100`)
          .then(res=>setFollowers(res.data))
      }
      else{
          toggleError(true,'user notfound!!')
      }
      checkRequests()
      setIsLoading(false)
    }

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
        <GithubContext.Provider value={{githubUser,repos,followers,requests,error,searchGithubUser,isLoading}}>
            {children}
        </GithubContext.Provider>
    )
    
}


export{GitHubProvider,GithubContext}