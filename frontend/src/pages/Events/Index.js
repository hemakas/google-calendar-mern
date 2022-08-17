import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

// components
import EventRow from '../../components/Events/EventRow'

const Events = () => {
    const [events, setEvents] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/event')
            const json = await response.json()
            if (response.ok) {
                setEvents(json)
            }
        }
 
        fetchEvents()
    }, [])

    return (
        <>
            <Container>
            <Alert variant='primary' className='mt-3 mb-3'>
                    <Row>
                        <Col sm={10}>
                            <h4>All Events</h4>
                        </Col>
                        <Col sm={2}>
                            <Button href="event/create">Create New</Button>
                        </Col>
                    </Row>
                </Alert>

                {/* table layout */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Assignee</th>
                            <ht>Action</ht>
                        </tr>
                    </thead>
                    <tbody>
                        { events && events.map((event) => (
                            <EventRow key={event._id} event={event} />
                        ))}
                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default Events