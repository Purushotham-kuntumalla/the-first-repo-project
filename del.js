function setup() {
    // Write your code here.
    let button = document.getElementsByClassName('remove')
    for (let btn of button) {
        btn.addEventListener('click', function () { 
            btn.parentElement.remove()
        })
    }
    
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div class="image">
    <img src="https://bit.ly/3lmYVna" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
setup()
  
  document.getElementsByClassName("remove")[0].click()
console.log(document.body.innerHTML);
  



