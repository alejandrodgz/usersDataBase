import UserCard from "./UserCard"
import { useSelector } from "react-redux"
import '../../style/users.css'

const Users = () => {
    const user = useSelector(state => state.users.users)

    const userArray = user.map(user => <UserCard key={user.id} name={user.name} username={user.username} email={user.email} company={user.company} />)

    return(
        <>
        <div className="cards">
            {userArray}
        </div>
        </>
    )
}

export default Users;