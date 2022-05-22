( function sidebar () {
    const sidebarBtn = document.querySelectorAll('.sidebar__button');
    
    sidebarBtn.forEach(function (item) {
        item.addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('close');
          this.classList.toggle('active');
        })
      })
}) ();