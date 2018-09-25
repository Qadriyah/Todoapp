openDrawer = () => {
  document.getElementById('drawer').style = 'width: 200px; padding: 5px;';
  document.getElementById('open').style.display = 'none';
  document.getElementById('close').style.display = 'block';
};

closeDrawer = () => {
  document.getElementById('drawer').style = 'width: 0; padding: 0;';
  document.getElementById('close').style.display = 'none';
  document.getElementById('open').style.display = 'block';
};

window.addEventListener('resize', () => {
  if (this.window.innerWidth > 614) {
    document.getElementById('drawer').style = 'width: 200px; padding: 5px;';
    document.getElementById('close').style.display = 'none';
    document.getElementById('open').style.display = 'none';
  } else {
    if (document.getElementById('drawer').style.width === '200px') {
      document.getElementById('open').style.display = 'none';
      document.getElementById('close').style.display = 'block';
    } else {
      document.getElementById('open').style.display = 'block';
      document.getElementById('close').style.display = 'none';
    }
  }
});
