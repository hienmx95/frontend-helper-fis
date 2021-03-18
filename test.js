

const getColor = char => {
  if (typeof char !== 'string') {
    return '#e7e9ed';
  }

  char = char.toUpperCase();
  const colors = [
    '#ffa726',
    '#ef5350',
    '#ec407a',
    '#fdd835',
    '#66bb6a',
    '#26a69a',
    '#00bcd4',
    '#42a5f5',
    '#5c6bc0'
  ];

  const n = char.charCodeAt(0) - 65;
  // console.log('n', n);
  // const index = Math.floor(n / Math.round(25 / colors.length));
  const index = n % colors.length;

  if (index < 0 || index >= colors.length) {
    return '#e7e9ed';
  }
  return colors[index];
};

for (let i = 65; i < 90; i++) {
  const color = getColor(String.fromCharCode(i));
  console.log(' object', `background: ${color};color: ${color}`)
}