import { Button, Card } from 'react-bootstrap';

const UserRowCard = ({ user }) => {
   
    return (

        <Card>
            <Card.Header as="h5">User Id: {user._id}</Card.Header>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.level}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default UserRowCard