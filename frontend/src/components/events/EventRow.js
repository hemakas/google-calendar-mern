const EventRow = ({ event }) => {
   
    return (
        <tr>
            <td>{event._id}</td>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.start}</td>
            <td>{event.end}</td>
            <td>{event.userId}</td>
            <td>
                <Stack direction="horizontal" gap={1}>
                    {/* <Button className="mr-2" size="sm" variant="outline-primary">
                        <Link to={`user/edit/${user._id}`}>Edit</Link></Button> */}
                    <Button className="ml-2" size="sm" variant="outline-danger"
                        onClick={handleDelete}
                    >Delete</Button> 
                </Stack>
            </td>
        </tr>
    )
}

export default EventRow