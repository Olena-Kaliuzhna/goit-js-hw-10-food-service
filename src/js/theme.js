const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const checkBoxEl = document.querySelector('#theme-switch-toggle');

bodyEl.classList.add(theme.LIGHT);


checkBoxEl.addEventListener('change', onCheckBoxChange);

currentTheme();

function currentTheme(event) {
  if (localStorage.getItem('theme') === null) {
    bodyEl.classList.add(theme.LIGHT);
    localStorage.setItem("theme", theme.LIGHT)
  };
     
  if (localStorage.getItem('theme') === theme.DARK) {
    checkBoxEl.checked = true;
    bodyEl.classList.add(theme.DARK);
  } else {
    checkBoxEl.checked = false;
    bodyEl.classList.add(theme.LIGHT);
  };

}

function onCheckBoxChange(evt) { 
  
  if (evt.target.checked) {
    bodyEl.classList.remove(theme.LIGHT);
    bodyEl.classList.add(theme.DARK);
    localStorage.setItem("theme", theme.DARK);
        
  } else {
    bodyEl.classList.remove(theme.DARK);
    bodyEl.classList.add(theme.LIGHT);
    localStorage.setItem("theme", theme.LIGHT);
    
  };
}
