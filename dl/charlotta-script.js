document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.getElementById('charlotta-logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('../index.html', '_blank', 'noopener,noreferrer,width=1280,height=800');
    });
  }
});
