const draggables = document.querySelectorAll('.draggable'); 
const dropzone = document.querySelector('.dropzone'); 


// For each draggable item, set data for drop zone (draggable element ID) and add "dragging-active" class
for (const draggable of draggables) {
  draggable.addEventListener('dragstart', (event) => { 
    event.dataTransfer.setData('text/plain', event.target.id);
    draggable.classList.add('dragging-active'); 
  });
  
  // Remove "dragging-active" class when dragging ends
  draggable.addEventListener('dragend', (event) => { 
    draggable.classList.remove('dragging-active');
  })
}

// Allow drop (drop not allowed by default)
dropzone.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 


// Append current draggable element to dropzone
dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  const element = document.getElementById(draggableId);
  
  // Check if dropzone has only one child element and if it is the placeholder element
  // If TRUE, use replaceChild() to the replace the placeholder with a draggable element
  // If FALSE, use appendChild() to add the draggable element to the dropzone
  if (
    dropzone.children.length === 1 
    && 
    dropzone.children[0].classList.contains('dropzone-placeholder')
  ) {
    dropzone.replaceChild(element, dropzone.children[0]); 
  } else {
    dropzone.appendChild(element); 
  }
});

// new code adding elements

const newHeadingElement = document.createElement('h2')
console.log('Newly Created Element: ', newHeadingElement)
const newText = document.createTextNode('Hello World!')
console.log('New Text Node: ', newText)
const parentElement = document.querySelector('#parent')
newHeadingElement.appendChild(newText)  
parentElement.appendChild(newHeadingElement) 

console.log('New innerHTML of Parent Element (after "appendChild"): ', parentElement.innerHTML)
const existingElement = document.querySelector('#existing') 
parentElement.insertBefore(newHeadingElement, existingElement) 

console.log('New innerHTML of Parent Element (after "insertBefore"): ', parentElement.innerHTML)

const clonedElement = existingElement.cloneNode(true) 
clonedElement.innerText = '**CLONED ELEMENT** ' + clonedElement.innerText   
clonedElement.setAttribute('id', 'cloned')
parentElement.appendChild(clonedElement)

console.log('New innerHTML of Parent Element (after "cloneNode"): ', parentElement.innerHTML)
