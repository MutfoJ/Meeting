const tabs = [...document.querySelectorAll('.tab')];
const panels = {
  main: document.getElementById('tab-main'),
  desag: document.getElementById('tab-desag')
};

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');

    Object.values(panels).forEach((p) => p.classList.remove('is-active'));
    panels[btn.dataset.tab].classList.add('is-active');
  });
});
