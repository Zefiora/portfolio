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

function arryvalidation() {
    let x = document.getElementById("textarry").value;
    let text;
    let i;
    let arryz;
    
    arryz = x.split(',');
    arryz = arryz.sort(function(a, b) {
        return a - b;
      });
        if (arryz.length > 10) {
            alert("You've entered to many numbers. Please enter 10 random numbers separated by commas into the input field.");
            return;
        } else if (arryz.length <= 9) {
            alert("You haven't entered enough numbers. Please enter 10 random numbers separated by commas into the input field.");
            return;
        };
        for (i of arryz){
            i = Number(i);
              if (isNaN(i)){
                alert("One of your values is not a number. Enter 10 random numbers separated by commas into the input field.");
                return;
              } else {
                text += "\n" + i;
              };
        };
        alert(text);
        document.getElementById("submit").preventDefault();
    }