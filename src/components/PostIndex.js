import React from 'react';
import {connect} from "react-redux"
import _ from "lodash"
import {Link} from "react-router-dom"
import {fetchPosts} from "../actions"

class PostIndex extends React.Component {


	componentDidMount(){
		this.props.fetchPosts()
	}

	renderPost(){
		return _.map(this.props.posts, post=>{
			return(
				<li className="list-group-item" key={post.id}>
					<Link to= {`/posts/${post.id}`}>
					  {post.title}
					</Link>
				</li>
			)
		})
	}
	render() {
		console.log(this.props.posts)
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">add a Post</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPost()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostIndex)
