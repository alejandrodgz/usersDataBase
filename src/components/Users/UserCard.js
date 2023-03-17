import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const url = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Presidente_Gustavo_Petro_Urrego.jpg"

function UserCard(props) {
    const {username, name, email, company, id} = props
  return (
    <Card style={{ width: '16rem', margin:'2rem' }}>
      <Card.Img style={{maxHeight:"200px", objectFit:"cover"}} variant="top" src={url} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <p>{name}</p>
        <Card.Text>
          email: {email} <br/>
          company: {company.name}
        </Card.Text>
        <Button as={Link} to={`/edituser/${id}`} variant="primary">
        edit
      </Button>

      </Card.Body>
    </Card>
  );
}

export default UserCard;