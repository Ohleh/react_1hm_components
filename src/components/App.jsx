import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
  Counter,
  ColorPicker,
  Form,
  FormLogoPass,
} from '.';
import Todos from './Todos';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import todosiki from '../data/todos.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Todos todos={todosiki}></Todos>
      <Counter step={5} head={'test'} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        styled-components
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
      <ColorPicker docs={data} />
      <Form />
      <FormLogoPass />
    </div>
  );
};
