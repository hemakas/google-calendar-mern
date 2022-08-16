import { Button, Stack } from 'react-bootstrap';
import { useUsersContext } from '../../hooks/useUsersContext';

const UserRow = ({ user, index }) => {
    const { dispatch } = useUsersContext()

    const handleClick = async () => {
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
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.level}</td>
            <Stack direction="horizontal" gap={1}>
                <Button className="mr-2" size="sm" variant="outline-primary">Edit</Button>
                <Button className="ml-2" size="sm" variant="outline-danger"
                    onClick={handleClick}
                >Delete</Button> 
            </Stack>
        </tr>
    )
}

export default UserRow