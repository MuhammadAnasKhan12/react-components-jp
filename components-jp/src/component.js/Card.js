import './card.css'
function Card(props) {
  return (
    <div className="card">
          <p>ID: {props.id}</p>
          <p>UserName: {props.username}</p>
          <p>Age: {props.age}</p>
          <p>Institute: {props.institute}</p>
          <p>IsActive: {props.isactive}</p>
          <p>Category: { props.category}</p>
      </div>
  );
}
export default Card;
