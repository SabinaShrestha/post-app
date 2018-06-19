import React from 'react';
import { connect } from 'react-redux';
import {Container, Header, Card, Button} from 'semantic-ui-react';
import PostForm from './PostForm';


class Posts extends React.Component{
  state = { title: '', showForm: false}

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  posts = () => {
    const {posts} = this.props

    return posts.map(post =>
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>
            {post.name}
          </Card.Header>
          <Card.Meta>
            {post.author}
          </Card.Meta>
          <Card.Description>
            {post.body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }


  handleChange = (e, data) => {
    this.setState({body: data.value})
  }


  render(){
    const { showForm } = this.state
    return(
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </Button>
        { showForm ?
          <PostForm closeForm={this.toggleForm} /> :
          <div>
            <Card.Group itemsPerRow={4}>
              {this.posts()}
            </Card.Group>
          </div>
        }
      </Container>
    )
  }

}



const mapStateToProps = (state) => {
  const {posts} = state
  return{
    posts
  }
}


export default connect (mapStateToProps)(Posts);
