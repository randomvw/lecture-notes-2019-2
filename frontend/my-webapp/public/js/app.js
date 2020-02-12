const myHeader = document.querySelector('#logo');
myHeader.textContent = 'My new homepage!';

document.addEventListener('mousemove', event => {
  let divNode = document.querySelector('#mousemovediv');
  divNode.textContent = event.pageX + ', ' + event.pageY;
  console.log('mouse moved ' + event.pageX + ', ' + event.pageY);
});
