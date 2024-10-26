import './item.css'

const ListItem = props => {
  const {details, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="item">
      <div className="itemcard">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="domain logo" />
        <p className="head">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div>
        <button className="del" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="img"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
