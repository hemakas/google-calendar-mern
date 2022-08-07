const EventRow = ({ event }) => {
   
    return (
        <tr>
            <td>{event._id}</td>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.start}</td>
            <td>{event.end}</td>
            <td>{event.userId}</td>
        </tr>
    )
}

export default EventRow