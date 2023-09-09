const Appoint = props => {
  const {item} = props
  const {input, dateEl, id, isLiked} = item

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  return (
    <li>
      <div>
        <p>{input}</p>
        <button data-testid="star" onClick={onClickLike}>
          <img alt="star" src={likeImageUrl} />
        </button>
      </div>
      <p>Date: {dateEl}</p>
    </li>
  )
}

export default Appoint
