import React from 'react'
import articleData from '../../Json/articles.json'
import Articles from './Component/Articles';
import Category from './Component/Category';
import './style.css'

const Blog = () => {
    return (
        <div style={{paddingTop: "150px"}}>
            <div className='row-container'>
                <div className='col-container'>
                    {
                        articleData.articles.map(article => {
                            console.log(article)
                            return(
                                <Articles article={article} category={article.categories}/>
                            )
                        })
                    }
                </div>
                <div className='col-container category'>
                    {
                        articleData.categories.map(category => {
                            return(
                                <Category category={category} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default Blog