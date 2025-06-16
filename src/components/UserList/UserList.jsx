import UserProfileCard from "../UserProfileCard/UserProfileCard";

function UserList() {
  const users = [
    { id: 1, name: "Alice", email: "alice@xyz.com" },
    { id: 2, name: "Kanasu", email: "Kanasu@xyz.com" },
    { id: 3, name: "Bill", email: "bill@xyz.com" },
    { id: 4, name: "Eva", email: "Eva@xyz.com" },
  ];
  // const userElements = users.map((user) => <UserProfileCard user ={user} key={user.id}/>)
  return (
    <div>
      <h2> UserList</h2>
      {/* <ul>
               <li>{userElements}</li>
            </ul> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserProfileCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
