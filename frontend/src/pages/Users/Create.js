import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// components
import UserCreateForm from '../../components/Users/UserCreateForm'

const Users = () => {
    // fetch user table info
    // const [users, setUsers] = useState(null)

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('/user')
    //         const json = await response.json()
    //         if (response.ok) {
    //             setUsers(json)
    //         }
    //     }
 
    //     fetchUsers()
    // }, [])

    return (
        <>
            <Container>
                <Alert variant='primary' className='mt-3 mb-3'>
                    <h4>Create User</h4>
                </Alert>
                
                <Row>
                    <Col sm={8}>
                        <UserCreateForm />
                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Users