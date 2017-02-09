const K_WIDTH = 26;
const K_HEIGHT = 26;

let mapMakerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '2px solid #ffffff',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#ffffff',
  //fontSize: 16,
  fontSize: 10,
  fontWeight: 'bold',
  padding: '6px 4px 4px 4px',
  boxSizing: 'border-box',
  cursor: 'pointer'
};

let mapMakerStyleHover = Object.assign({}, mapMakerStyle);
mapMakerStyleHover.border='2px solid #ffffff';
mapMakerStyleHover.color= '#ffffff';



export {mapMakerStyle, mapMakerStyleHover};
