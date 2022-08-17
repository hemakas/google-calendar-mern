import { Button, Stack } from 'react-bootstrap'
import { useUsersContext } from '../../hooks/useUsersContext'
import { Link } from 'react-router-dom'


const UserRow = ({ user, index }) => {
    const { dispatch } = useUsersContext()

    // delete user
    const handleDelete = async () => {
        const response = await fetch('user/' + user._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_USER', payload: json })
        }
    }
    
    return (
        <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.level}</td>
            <td>
                <Stack direction="horizontal" gap={1}>
                    {/* <Link to={`user/edit/${user._id}`}><Button className="mr-2" size="sm" variant="outline-primary"
                        >Edit</Button></Link> */}
                    <Button href={`user/edit/${user._id}`} className="mr-2" size="sm" variant="outline-primary">Edit</Button>
                    <Button className="ml-2" size="sm" variant="outline-danger"
                        onClick={handleDelete}
                    >Delete</Button> 
                </Stack>
            </td>
        </tr>
    )
}

export default UserRow