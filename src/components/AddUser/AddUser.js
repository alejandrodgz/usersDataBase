import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddUser = () => {
  const [NewUser, setNewUser] = useState({});

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
    console.log(NewUser);
  };

  return (
    <Form onSubmit={clickNewUser}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="name"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="username"
          type="text"
          placeholder="Enter username"
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
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="address"
          type="address"
          placeholder="Enter address"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="phone"
          type="number"
          placeholder="Enter phone"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Website</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="website"
          type="text"
          placeholder="Enter website"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control
          onChange={handleNewUser}
          name="company.name"
          type="text"
          placeholder="Enter company name"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUser;
