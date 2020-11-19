
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAll = document.querySelector('.check-all');
const uncheckAll = document.querySelector('.uncheck-all');
const reset = document.querySelector('.reset');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,//user input of dish
        done : false
    }
    items.push(item);
    populateList(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}

/*changing the html
  plates give the array of objects
  platesList gives the unordered list where we keep adding new items
*/
function populateList(plates=[],platesList){
    platesList.innerHTML = plates.map((plate,i) => {
        return `
          <li>
            <input type='checkbox' data-index=${i} id='item${i}' ${ plate.done ? 'checked' : ''}/>
            <lable for='id'>${plate.text}</lable>
          </li>
        `
    }).join('');
}

function toggleCheck(e){
    if(!e.target.matches('input')) return ; //should be of input type
    const el = e.target;
    const index = el.dataset.index;

    items[index].done = ! items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

function allTicked(e){
    items.forEach((item) => {
        item.done = true;
    })
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

function noneTicked(e){
    items.forEach((item) => {
        item.done = false;
    })
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

function resetList(e){
    localStorage.clear();
    location.reload();
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',toggleCheck);
checkAll.addEventListener('click',allTicked);
uncheckAll.addEventListener('click',noneTicked);
reset.addEventListener('click',resetList);
populateList(items,itemsList); //show previously entered data 