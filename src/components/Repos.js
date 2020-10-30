import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context';
import ChartComponent from './Charts/ExampleChart';
import { Pie3D } from './Charts';

export default function Repos() {
    const{repos}= React.useContext(GithubContext)
    let languages = repos.reduce((total,item)=>{
        const{language}= item;
        if(!language) return total
        if(!total[language]){
          total[language]={label:language,value:1}
        }
        else{
          total[language] ={...total[language],value:total[language].value+1}
        }
        return total;
    },{})
    languages= Object.values(languages).sort((l,v)=>{
      return v.value - l.value;
    }).slice(0,5)
    console.log(languages)
    const chartData = [
      {
        label: "HTML",
        value: "290",
      },
      {
        label: "CSS",
        value: "260",
      },
      {
        label: "JavaScript",
        value: "180",
      }
    ];
    return (
        <section className="section">
            <Wrapper className="section-center">
                <Pie3D data={languages}/>
                {/* <ChartComponent data={chartData}/> */}
            </Wrapper>

        </section>
    )
}

const Wrapper = styled.div `
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;