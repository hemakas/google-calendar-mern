import { useEffect } from 'react'
import { Container, Row, Col, Button, Alert, Table } from 'react-bootstrap'
import { useUsersContext } from '../../hooks/useUsersContext'

import 'bootstrap/dist/css/bootstrap.min.css'

// components
import UserRow from '../../components/Users/UserRow'

const Users = () => {
    const {users, dispatch} = useUsersContext()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/user')
            const json = await response.json()
            
            if (response.ok) {
                dispatch({ type: 'SET_USERS', payload: json })
            }
        }
 
        fetchUsers()
    }, [])

    return (
        <>
            <Container>
                <Alert variant='primary' className='mt-3 mb-3'>
                    <Row>
                        <Col sm={10}>
                            <h4>All Users</h4>
                        </Col>
                        <Col sm={2}>
                            <Button href="user/create">Create New</Button>
                        </Col>
                    </Row>
                </Alert>

                {/* table layout */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users && users.map((user, index) => (
                            <UserRow key={index} user={user} />
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Users