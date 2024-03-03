//create a chat page for the room
import { useSelector } from 'react-redux';

function GamePage() {
    const roomId = useSelector((state) => state.room.room_id);
    const roomName = useSelector((state) => state.room.room_name);
    console.log(roomName)
    const roomPassword = useSelector((state) => state.room.room_password);

    return (
        <>
        <div>
            <h1>Game Page For {roomName}</h1>
        </div>
        </>
    );
}

export default GamePage;