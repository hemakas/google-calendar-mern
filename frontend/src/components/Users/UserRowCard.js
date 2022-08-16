import { Button, Card, Stack, ListGroup } from 'react-bootstrap';

const UserRowCard = ({ user }) => {
   
    return (

        <Card className='mb-3'>
            <Card.Header>User Id: {user._id}</Card.Header>
            <Card.Body>

                <ListGroup variant="flush">
                    <ListGroup.Item>User Name: {user.name}</ListGroup.Item>
                    <ListGroup.Item>User Email: {user.email}</ListGroup.Item>
                    <ListGroup.Item>User Level: {user.level}</ListGroup.Item>
                </ListGroup>
                <Stack direction="horizontal" gap={1}>
                    <Button className="mr-2" size="sm" variant="primary">Edit</Button>
                    <Button className="ml-2" size="sm" variant="danger"
                        // onClick={handleClick}
                    >Delete</Button> 
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default UserRowCard