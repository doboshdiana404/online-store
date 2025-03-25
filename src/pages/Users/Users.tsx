import { useGetAllUsersQuery } from '@/redux/services/user';

const Users = () => {
  const {
    data: userAll,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery(undefined);
  return (
    <section>
      <h1>Users All</h1>
      <ul>
        {userAll &&
          userAll.map((user) => (
            <li key={user.id}>
              <span>{user.lastName}</span>
              <span> {user.firstName}</span>
            </li>
          ))}
        {isFetching || (isLoading && <p>Loading</p>)}
      </ul>
    </section>
  );
};

export default Users;
