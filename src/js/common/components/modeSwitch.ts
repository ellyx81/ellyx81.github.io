const modeSwitch = () => {
  const body = document.body;
  const switches = document.querySelectorAll('.header__switch');

  switches.forEach(swtch => {
    swtch.addEventListener('click', () => {
      const currentMode = body.getAttribute('data-mode');
      const newMode = currentMode === 'light' ? 'dark' : 'light';
      body.setAttribute('data-mode', newMode);

      switches.forEach(s => {
        s.classList.toggle('light');
      });
    });
  });
};

export default modeSwitch;
