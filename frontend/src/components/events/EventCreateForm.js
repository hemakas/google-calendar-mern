import { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useUsersContext } from '../../hooks/useUsersContext'

import "react-datepicker/dist/react-datepicker.css";

const EventCreateForm = () => {
    const { dispatch } = useUsersContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [error, setError] = useState(null)

    const googleId = '123googleid'
    const userId = 1

    // users should come from a seperate table
    // this module needs to be done 
    // const [userId, setUserId] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const startDateConverted = moment(startDate).format('L')
        const endDateConverted = moment(endDate).format('L')

        const event = {
            googleId,
            title,
            description,
            startDateConverted,
            endDateConverted,
            userId
        }

        console.log(event)

        const response = await fetch('/api/event/create', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: { 
                'content-type' : 'application/json',
                'Accept': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error) 
        } 

        if (response.ok) {
            setTitle('')
            setDescription('')
            setStartDate(new Date())
            setEndDate(new Date())
            setError(null)

            console.log('New event added ', event)

            // adding to global state
            dispatch({ type: 'CREATE_USER', payload: json})
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                {/* title */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" 
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title}
                        />
                    </Form.Group>
                </Row>

                {/* description */}
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter description" style={{ height: '100px' }} 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description}
                    />
                </Form.Group>

                {/* start date */}
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker 
                            selected={startDate} 
                            onChange={(e) => setStartDate(e.target.value)} 
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            dateFormat={'dd/MM/yyyy'}
                        />  
                    </Form.Group>

                    {/* end date */}
                    <Form.Group as={Col} className="mb-3" controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <DatePicker 
                            selected={endDate} 
                            onChange={(e) => setEndDate(e.target.value)} 
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            dateFormat={'dd/MM/yyyy'}
                        />  
                    </Form.Group>
                    <Form.Group as={Col}></Form.Group>
                </Row>

                {/* assignee */}
                {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="assignee">
                        <Form.Label>Assignee</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row> */}

                {/* self assign */}
                <Form.Group className="mb-3" controlId="selfAssign">
                    <Form.Check type="checkbox" label="Self Assign" />
                </Form.Group>

                <Button variant="primary" type="submit">Create</Button>
                {error && <Alert variant='danger'>{error}</Alert>}
            </Form>
        </div>
    )
}

export default EventCreateForm