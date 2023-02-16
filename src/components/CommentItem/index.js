import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {itemDetails, onToggle, onDeleting} = props
  const {id, name, description, date, isLiked, backgroundName} = itemDetails

  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLiked ? 'active' : 'like'

  const onToggling = () => {
    onToggle(id)
  }

  const onDelete = () => {
    onDeleting(id)
  }

  return (
    <>
      <li className="listItem">
        <div className="listFirst">
          <p className={backgroundName}>{name[0]}</p>
          <div className="matterCon">
            <div className="detailsCon">
              <p className="nameP">{name}</p>
              <p className="timeP">{formatDistanceToNow(date)}</p>
            </div>
            <p className="descP">{description}</p>
          </div>
        </div>
        <div className="listSecond">
          <button className="likeBton" type="button" onClick={onToggling}>
            <img src={likedImg} alt="like" className="likeImg" />
            <span className={likedText}>Like</span>
          </button>
          <button
            className="deleteBton"
            data-testid="delete"
            type="button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="deleteImg"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
