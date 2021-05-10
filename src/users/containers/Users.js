import { connect } from 'react-redux';
import { Button, Text } from '@chakra-ui/react';

import { fetchUsers } from '../state';

function UsersContainer(props) {
  const { users, isLoading, isError, fetchUsers } = props;
  const fetchData = () => fetchUsers();
  return (
    <div className="container">
      <Text as="h2" fontSize={18}>Users</Text>
      {isLoading && <p>Loading...</p>}
      <Button disabled={isLoading} onClick={fetchData}>Fetch Users</Button>
      <div>
        {users && users.map((user) => (
          <div key={user.id}>
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);