import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

// components
import EventRowCard from '../../components/Events/EventRowCard'

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
                    <h4>All Events</h4>
                </Alert>
                <Row>
                    <Col sm={8}>
                        {/* table layout */}
                        {/* <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Assignee</th>
                                </tr>
                            </thead>
                            <tbody>
                                { events && events.map((event) => (
                                    <EventRow key={event._id} event={event} />
                                ))}
                            </tbody>
                        </Table> */}

                        {/* card layout */}
                        { events && events.map((event) => (
                            <EventRowCard key={event._id} event={event} />
                        ))}
                    </Col>

                    <Col sm={4}>
                        <Button href="event/create">Create New</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Events