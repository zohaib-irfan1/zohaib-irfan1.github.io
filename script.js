document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(target).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
