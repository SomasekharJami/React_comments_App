import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {mainList: [], name: '', description: '', length: 0}

  onToggle = id => {
    this.setState(prevState => ({
      mainList: prevState.mainList.map(eachList => {
        if (id === eachList.id) {
          return {...eachList, isLiked: !eachList.isLiked}
        }
        return eachList
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, description} = this.state

    const commentBgClass = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      description,
      date: new Date(),
      isLiked: false,
      backgroundName: commentBgClass,
    }

    this.setState(prevState => ({
      mainList: [...prevState.mainList, newComment],
      name: '',
      description: '',
    }))

    this.setState(prevState => ({
      length: prevState.mainList.length,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({description: event.target.value})
  }

  onDeleting = id => {
    const {mainList} = this.state
    const filteredList = mainList.filter(everyLi => everyLi.id !== id)

    this.setState(prevState => ({
      mainList: filteredList,
      length: prevState.length - 1,
    }))
  }

  render() {
    const {mainList, name, description, length} = this.state

    return (
      <div className="mainCon">
        <div className="firstCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="mainImg"
          />
          <div className="sideCon">
            <h1 className="mainH">Comments</h1>
            <p className="formP">Say something about 4.0 Technologies</p>
            <form className="mainForm" onSubmit={this.onAddComment}>
              <input
                className="inpEl"
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
              />
              <textarea
                className="textEl"
                value={description}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <button type="submit" className="bton">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <div className="secondCon">
          <p className="countP">
            <span className="noP">{length}</span> Comments
          </p>
          <ul className="listCon">
            {mainList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                itemDetails={eachItem}
                onToggle={this.onToggle}
                onDeleting={this.onDeleting}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
