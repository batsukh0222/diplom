document.addEventListener('DOMContentLoaded', () => {
    // Мөн өөрийн хэрэгцээний функцүүдийг бичнэ үү
    const genreItems = document.querySelectorAll('.genre-item');
    
    genreItems.forEach(item => {
      item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent} genre!`);
      });
    });
  });
  