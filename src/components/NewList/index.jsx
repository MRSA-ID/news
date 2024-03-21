import React from 'react'
import PropTypes from 'prop-types'
import styles from './NewList.module.css'
import NewsCard from '../NewsCard'

const NewList = ({ articles }) => {
  return (
    <div className={styles.NewList}>
      {articles.map((article, index, arr) => {
        // handle untuk tidak merender seusai dengan kondisi tersebut
        if(!article.urlToImage || !article.author || !article.content){
          return null
        }

        return (
          <NewsCard
            key={index}
            src={article.urlToImage}
            title={article.title}
            publishedAt={article.publishedAt}
            author={article.author}
            sourceName={article.source.name}
            description={article.description}
            url={article.url}
            notLastChild={!(arr.length === index + 1)}
          />
        )
      })}
    </div>
  )
}

NewList.propTypes = {
  articles: PropTypes.array
}

export default NewList