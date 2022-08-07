import { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

// components
// import EventRow from '../components/events/EventRow'
import EventRowCard from '../components/events/EventRowCard'

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
        <div className="container">
            <div className="events">
                <h2>Events</h2>
                
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

                { events && events.map((event) => (
                    <EventRowCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Events