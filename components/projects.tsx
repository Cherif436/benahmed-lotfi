"use client"

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Portfolio", 0.5);
  const [articleNum, setArticleNum] = useState(4);
  const [portfolios, setPortfolios] = useState(projectsData);

  const loadMoreHandler = () => {
    setArticleNum(prev => prev + 2);
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Mes réalisations</SectionHeading>
      
      <div>
        {portfolios?.slice(0, articleNum).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}

        {
          articleNum < portfolios.length && projectsData.length > 4 && (
            <button className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-800 rounded-full shadow outline-none group hover:bg-blue-950 dark:bg-gray-900 bg-gradient-to-r active:bg-blue-900 hover:shadow-lg focus:outline-none" type="button" onClick={loadMoreHandler}><em className='animate-pulse'>Voir plus</em></button>
          )
        }
        
      </div>
      
    </section>
  )
}
