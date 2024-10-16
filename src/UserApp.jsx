import { useState } from "react"
import { UserList } from "./components/userList.jsx"

export const UserApp = () => {
    const [endpoint, setEndpoint] = useState('users')
    const handleFetch = () => {
        setEndpoint('comments')
    }

    return (
        <>
            <h1>User list: </h1>
            <UserList endpoint={endpoint}></UserList>
            <button onClick={handleFetch}>LLamada a la Api</button>
        </>
    )
}
