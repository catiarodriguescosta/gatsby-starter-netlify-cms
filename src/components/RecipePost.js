import React from "react"
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';
import './RecipePost.scss'


const RecipePost= (props) => (
    <article className="RecipePost">
        <header>
        {props.featuredimage ? (
            <div className="RecipePostThumbnail">
                <Link to={props.slug}>
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: props.featuredimage,
                            alt: `featured image thumbnail for post ${props.title}`,
                        }}
                    />
                </Link>
            </div>
        ) : null }
        
        <div className="RecipePostBody">
            <Link to={props.slug}>
                <h5 className="RecipePostTitle">{props.title}</h5>
            </Link>
        </div>

        </header>

        <div className="RecipePostData">
            
            <b>{props.servingSyns}</b>
            <span> syn (s) per serving &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
            <b>{props.totalSyns}</b>
            <span> syn (s) per total</span>

            {/* { (post.frontmatter.classification === "free" || post.frontmatter.classification === "" )  ? null : (
                <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                )}
            {post.frontmatter.classification === "free" ? null : (
                post.frontmatter.serving_syns,
                <span>syn (s) <em>per serving</em> &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
            )}
            {post.frontmatter.classification === "free" ? null : (
                post.frontmatter.total_syns,
                <span>syn (s) <em>per total</em></span>
            )} */}
        </div>
    
    </article>
)




export default RecipePost;