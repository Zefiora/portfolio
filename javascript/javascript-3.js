// Write your code here
const items = document.querySelectorAll('.pagesec')
const options = {
  threshold: 0.1
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)
items.forEach(item => {
  observer.observe(item);
})
