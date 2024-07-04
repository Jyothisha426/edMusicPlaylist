import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongTrack = props => {
  const {songDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="song-item">
      <div className="left-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="song-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="right-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTrack}
          data-testid="delete"
          aria-label="delete"
        >
          <AiOutlineDelete className="delete" />
        </button>
      </div>
    </li>
  )
}

export default SongTrack
