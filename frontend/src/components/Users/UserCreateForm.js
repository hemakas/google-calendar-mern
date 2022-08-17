import { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';

const UserCreateForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [level, setLevel] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            level
        }

        console.log(user)

        const response = await fetch('/user/create', {
            method: 'POST',
            body: JSON.stringify(user),
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
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setLevel('')
            setError(null)

            console.log('New user added ', user)
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                {/* title */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name}
                        />
                    </Form.Group>
                </Row>

                {/* email */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="john@example.com" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                        />
                    </Form.Group>
                </Row>

                {/* password */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"  
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            value={confirmPassword}
                        />
                    </Form.Group>
                </Row>

                {/* level */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="level">
                        <Form.Label>Level</Form.Label>
                        <Form.Select 
                        onChange={(e) => setLevel(e.target.value)}
                        value={level}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">Create</Button>
                {error && <Alert variant='danger'>{error}</Alert>}
            </Form>
        </div>
    )
}

export default UserCreateForm