import getAvatar from './getAvatar.js';

const users = [
  {
    name: 'Helen Coppola',
    // avatar: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    name: 'Nick Ronins',
    // avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  },
  {
    name: 'Chris Harris',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  },
  {
    name: 'Sandra Osborne',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
  },
  {
    name: 'Tim Johnson',
    // avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  },
  {
    name: 'Antonette Martinez',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const appElem = document.getElementById('app');
  const listUserCards = document.createElement('div');

  users.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerText = user.name;

    userCard.prepend(getAvatar(user.name, user.avatar));
    listUserCards.append(userCard);
  });

  appElem.append(listUserCards);
});
