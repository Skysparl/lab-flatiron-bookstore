const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
document.addEventListener("DOMContentLoaded", () => {
  // 1. Update the Header (Store Name)
  const headerElement = document.querySelector("#header h1"); 
  if (headerElement && typeof bookStore !== "undefined") {
    headerElement.textContent = bookStore.name;
  }

  // 2. Select the main book list container in the DOM
  const bookListContainer = document.querySelector("#book-list"); 

  // 3. Create elements and append them for every book in the catalog
  if (typeof bookStore !== "undefined" && bookStore.books) {
    bookStore.books.forEach(book => {
      // Create container for individual book
      const bookLi = document.createElement("li");
      bookLi.className = "book";

      // Create title element
      const titleH3 = document.createElement("h3");
      titleH3.textContent = book.title;

      // Create author element
      const authorP = document.createElement("p");
      authorP.textContent = book.author;

      // Create image element (using book.imageUrl based on the starter data)
      const imgElement = document.createElement("img");
      imgElement.src = book.imageUrl;
      imgElement.alt = book.title;

      // Append sub-elements to the book list item container
      bookLi.appendChild(imgElement);
      bookLi.appendChild(titleH3);
      bookLi.appendChild(authorP);

      // Append the book item to the main book list container on the DOM
      bookListContainer.appendChild(bookLi);
    });
  }
});
