const log = (color) => {
    return console.log.bind(console,'%c%s' ,`color: ${color};font-size:14px`);
}

const group = (color, bgColor) => {
    return console.group.bind(console,'%c%s' ,`color: ${color};background-color: ${bgColor} ;font-weight: bold ; padding: 4px ;`);
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

export const chalkLogGroup = {
  redish: group('#fff', '#e0005a'),
  purple: group('#fff', '#9000e0'),
  brownish: group('#fff', '#801b00d4'),
  cadetBlue: group('#fff', 'cadetblue'),
}
