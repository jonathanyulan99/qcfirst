const update = document.querySelector('#update-button');

update.addEventListener('click', _ => {
    fetch('/', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstname: 'Seth',
            lastname: 'Lugo',
          })
    })
  })