import './style.sass';

function Header({ title, subtitle, backgroundImage }) {
  const bgStyle = {
    background: `transparent url('imgs/${backgroundImage}') 0% 0% / cover no-repeat padding-box`,
  }

  return (
    <header style={backgroundImage ? bgStyle : {}}>
      <h1 className='header-text'>{title}</h1>
      <p className='header-text'>{subtitle}</p>
    </header>
  );
}

export { Header };
