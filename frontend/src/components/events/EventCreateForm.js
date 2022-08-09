import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const EventCreateForm = () => {

// function EventCreateForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    // users should come from a seperate table
    // this module needs to be done 
    // const [userId, setUserId] = useState('')

    return (
        <div>
            <Form>

                {/* title */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter Title" 
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
                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    {/* <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />   */}
                </Form.Group>

                {/* end date */}
                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    {/* <DatePicker 
                        selected={endDate} 
                        onChange={(date) => setEndDate(date)} 
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />   */}
                </Form.Group>

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
                <Form.Group className="mb-3" id="selfAssign">
                    <Form.Check type="checkbox" label="Self Assign" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

            </Form>
        </div>
    )
}

export default EventCreateForm