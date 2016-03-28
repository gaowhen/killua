let app = document.getElementById('app');
let time = document.getElementById('time');
let timer = setInterval(updateClock, 1000);

function updateClock() {
  time.innerHTML = (new Date()).toString();
}

// Edit these styles to see them take effect immediately
app.style.display = 'table-cell';
app.style.width = '250px';
app.style.height = '150px';
app.style.border = '1px solid #333';
app.style.background = 'green';
app.style.color = '#333';
app.style.textAlign = 'right';
app.style.verticalAlign = 'top';
