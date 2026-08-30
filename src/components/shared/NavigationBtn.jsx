function NavigationBtn({ page, setHomePage, setAboutMePage }) {
  const handleClick = () => {
    setHomePage(page === 'Home');
    setAboutMePage(page === 'About Me');
  };
  return <button onClick={handleClick}>{page}</button>;
}

export default NavigationBtn;
