import {MdDelete} from 'react-icons/md'

import './index.css'

const PlayList = props => {
  const {details, deleteItem} = props
  const {imageUrl, name, genre, duration, id} = details
  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="item">
      <div className="image-name">
        <img className="image" src={imageUrl} alt="track" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="dur-icon">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="dlt-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <MdDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayList
