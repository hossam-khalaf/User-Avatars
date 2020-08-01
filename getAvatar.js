function getRandomColor() {
  const option = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += option[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default (name, avatarSrc) => {
  const userAvatar = document.createElement('div');
  userAvatar.className = 'user-avatar';
  userAvatar.style.background = getRandomColor();

  if (avatarSrc) {
    const avatarImg = document.createElement('img');
    avatarImg.src = avatarSrc;
    userAvatar.append(avatarImg);
  } else {
    const initials = name
      .split(' ')
      .map((n) => n[0].toUpperCase())
      .join('');
    // console.log(initials, name);
    const avatarText = document.createElement('span');

    avatarText.innerText = initials;
    userAvatar.append(avatarText);
  }

  return userAvatar;
};
