import React from 'react'
import './portfolio.css'
/*dont forget to import images*/

const data = [
  {
    id: 1,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  },
  {
    id: 2,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  },
  {
    id: 3,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  },
  {
    id: 4,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  },
  {
    id: 5,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  },
  {
    id: 6,
    /*the imported pic*/
    title: 'my title',
    github: 'git hub link',
    demo: 'whats on dribble',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portoflio</h2>

      <div className="container portfolio__container">
      {
          data.map (({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>

          </div>
            <h3>
               {title}
            </h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

            </div>
          

        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
