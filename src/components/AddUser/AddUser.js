import { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import  { addUser } from "../../features/users/usersSlide";
import { useNavigate, useParams } from "react-router-dom";


const AddUser = () => {
  const [NewUser, setNewUser] = useState({id:"", name:"", username:"", email:"", address:"", phone:"", website:"", company:{name:""}});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();
  const user = useSelector(state => state.users.users)
  
  useEffect(()=>{
    if(params.id && user.length > 0){
      setNewUser(user.find(users => users.id == params.id))
    }
  },[user])
  

  const handleNewUser = (e) => {
    if (e.target.name.split(".")[0] === "company") {
      setNewUser((oldValue) => ({
        ...oldValue,
        company: {
          [e.target.name.split(".")[1]]: e.target.value,
        },
      }));
    } else {
      setNewUser((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const clickNewUser = (e) => {
    e.preventDefault();
    dispatch(addUser(NewUser));
    Navigate('/users');

  };

  return (
    <Container style={{maxWidth:"40%", minWidth:"18rem"}}>
    <Form onSubmit={clickNewUser}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="name"
          type="text"
          placeholder="Enter name"
          value={NewUser.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="username"
          type="text"
          placeholder="Enter username"
          value={NewUser.username}
        />
        <Form.Text className="text-muted">
          We'll recognize by your username
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="email"
          type="email"
          placeholder="Enter email"
          value={NewUser.email}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="address"
          type="address"
          placeholder="Enter address"
          value={NewUser.address}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="phone"
          type="number"
          placeholder="Enter phone"
          value={NewUser.phone}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Website</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="website"
          type="text"
          placeholder="Enter website"
          value={NewUser.website}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="company.name"
          type="text"
          placeholder="Enter company name"
          value={NewUser.company.name}
        
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
};

export default AddUser;
