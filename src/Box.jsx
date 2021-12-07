import './Box.css';

// Object deconstruction (props: { color, title })
function Box({ color, title }) {
  let colorMap = {
    blue: 'deepskyblue',
    red: 'tomato',
    default: 'gray',
  };

  const className = colorMap[color] ?? colorMap['default'];

  return <div className={className}>{title}</div>;
}

export default Box;
