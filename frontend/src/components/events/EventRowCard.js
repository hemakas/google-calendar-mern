import { Button, Card } from 'react-bootstrap';

const EventRowCard = ({ event }) => {
   
    return (

        <Card>
            <Card.Header as="h5">User Id: {event.userId}</Card.Header>
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Start: {event.start}</Card.Text>
                <Card.Text>End : {event.end}</Card.Text>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default EventRowCard