import FriendItem from './FriendItem/FriendItem';

export default function FriendList({ friends }) {
  const friendslist = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendItem key={id} avatar={avatar} name={name} isOnline />
  ));
  return <ul className="friend-list">{friendslist}</ul>;
}
