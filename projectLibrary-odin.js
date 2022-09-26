let myLibrary = [];

function Book(title, author, pages, read, i){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return `${this.title} is written by ${this.author} with its pages ${this.pages} in total`
  }
};

function addBookToLibrary(book){
  myLibrary.push(book) ;
  // console.log('Add a new book');
}

// // --------------------------------此區程式碼可省略-----------------------------------
// const harry = new Book('Harry', 'JK', 245, false);
// const ring = new Book('Sam', 'Sammy', 3934, false);
// addBookToLibrary(harry);
// addBookToLibrary(ring);
// myLibrary.forEach( item => {
//   const display = document.querySelector('.display');
//   const node = document.createElement('div');
//   node.innerHTML = `Title: ${item.title} <br> Author: ${item.author} <br> Pages: ${item.pages}` ;
//   node.classList = 'newBook' ;
//   display.appendChild(node);
// });
// // --------------------------------此區程式碼可省略-----------------------------------

const newBookButton = document.querySelector('.addNewBook');
newBookButton.addEventListener('click', (e) =>{
  const display = document.querySelector('.display');
  const form = document.createElement('form');
  form.innerHTML =  '<div><label for="title">Book Title:</label><input type="text" id="title" name="title" placeholder="Harry Potter" required></div>' +
                    '<div><label for="author">Book Author:</label><input type="text" id="author" name="author" placeholder="J.K. Rowling"></div>' +
                    '<div><label for="pages">Book Page:</label><input type="text" id="pages" name="pages" placeholder="245" required></div>' +
                    'Ever Read it?' +
                    '<div><input type="radio" name="experience" id="yes" checked><label for="yes">Yes! </label></div>' +
                    '<div><input type="radio" name="experience" id="no"><label for="no">No! </label></div>' +
                    '<button type="submit">Add it!</button>' ;
  display.appendChild(form);

  form.addEventListener('submit', (e) => {

    const formData = new FormData(e.target);
    // FormData可視為一個物件, 其property有get這個ket-value
    const tem = new Book(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('experience'), true);
    // alert(formData.get('author'));
    addBookToLibrary(tem) ;

    const display = document.querySelector('.display');
    const addNode = document.createElement('div');
    addNode.innerHTML = `Title: ${tem.title} <br> Author: ${tem.author} <br> Pages: ${tem.pages}` ;
    addNode.classList = 'newBook' ;
    display.appendChild(addNode);

    // 第一層的click為新增書籍, 第二層的click為送出(submit), 因此要防止事件冒泡
    event.stopPropagation() ;
    // 另一個相似的指令為event.preventDefault() MDN是用此指令防止default form submission

    display.removeChild(form);
  });
}) ;
