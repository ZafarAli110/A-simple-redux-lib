const log = (color) => {
    return console.log.bind(console,'%c%s' ,`color: ${color};font-size:14px`);
}

export const chalkLog = {
  green : log('green'),
  teal : log('teal'),
  brown : log('brown'),
  blue : log('blue'),
  coral : log('coral'),
  crimson : log('crimson'),
  darkGray : log('darkGray'),
}
