import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

// components
import UserRowCard from '../../components/Users/UserRowCard'

const Users = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user')
            const json = await response.json()
            if (response.ok) {
                setUsers(json)
            }
        }
 
        fetchUsers()
    }, [])

    return (
        <>
            <Container>
                <Alert variant='primary' className='mt-3 mb-3'>
                    <h4>All Users</h4>
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
                                { users && users.map((user) => (
                                    <UserRow key={user._id} user={user} />
                                ))}
                            </tbody>
                        </Table> */}

                        {/* card layout */}
                        { users && users.map((user) => (
                            <UserRowCard key={user._id} user={user} />
                        ))}
                    </Col>

                    <Col sm={4}>
                        <Button href="user/create">Create New</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Users