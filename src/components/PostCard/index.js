import React from 'react'
import {Link} from 'gatsby'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      <div class="columns">
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({node: post}) => (
          <div class="column is-one-third">
          <div
            className='card'
          
            key={post.id}
          >
            
              <Link className='has-text-primary' to={post.fields.slug}>
              <div className="card-image">
                <figure className="image is-4by3">
                <img src={post.frontmatter.cover} />
                </figure>
              </div>          
              </Link>
              <div className="card-content">
              <h3 className="is-size-3 has-text-weight-medium">{post.frontmatter.title}</h3>
              
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug}>
                                Keep Reading →
              </Link>
            </p>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default PostCard
