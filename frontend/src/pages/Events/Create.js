import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// components
import EventCreateForm from '../../components/Events/EventCreateForm'

const Events = () => {
    // fetch user table info
    // const [events, setEvents] = useState(null)

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const response = await fetch('/event')
    //         const json = await response.json()
    //         if (response.ok) {
    //             setEvents(json)
    //         }
    //     }
 
    //     fetchEvents()
    // }, [])

    return (
        <>
            <Container>
                <Alert variant='primary' className='mt-3 mb-3'>
                    <h4>Create Event</h4>
                </Alert>
                
                <Row>
                    <Col sm={8}>
                        <EventCreateForm />
                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Events