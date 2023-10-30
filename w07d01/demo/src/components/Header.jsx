const Header = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>This is the Header component</h2>
      <h2>The content is: {props.myVar}</h2>

      <div className="layout">
        { props.children }
      </div>
    </div>
  );
};

export default Header;
