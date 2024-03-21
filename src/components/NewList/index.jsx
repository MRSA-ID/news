import React from 'react'
import PropTypes from 'prop-types'
import styles from './NewList.module.css'

const NewList = ({ articles }) => {
  return (
    <div className={styles.NewList}>
      {articles.map((article, index, arr) => {
        return (
          <div key={index}>
            <h1>{article.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

NewList.propTypes = {
  articles: PropTypes.array
}

export default NewList