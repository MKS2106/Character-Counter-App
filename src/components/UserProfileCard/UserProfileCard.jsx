function UserProfileCard({user}){
    return(
        <div>
            <h2> UserProfileCard: </h2>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    )
}
export default UserProfileCard;