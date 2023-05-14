import React from 'react'

const Articles = ({article}) => {
  const {id, title, author, date, category_id, content} = article

  return (
    <div key={id}>
      <div className='col-container'>
        <h3>{title}</h3>
        <div className='row-container'>
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
      {content.map((c,i) => {
        return(
          <div className='col-container' key={i}>
            <span>{c.title}</span>
            <p>{c.text1}</p> 
            {c.text2 && <p>{c.text2}</p>} 
            {c.text3 && <p>{c.text3}</p>}
          </div>
          
        )
      })}
    </div>
  )
}

export default Articles