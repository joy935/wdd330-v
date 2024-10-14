AIzaSyASIIlW8p7c5jbicPRyqBhCLh7NOECeBH8
const books = document.querySelector(".books");

const apiUrl = "https://goodreads12.p.rapidapi.com";
const headers = {
    "x-rapidapi-host": "goodreads12.p.rapidapi.com",
	  "x-rapidapi-key": "3fce1c804fmshed74b100755700cp19b98bjsn4eb22c9804d4"
};

 //input field
const searchButton = document.querySelector("#searchBtn");


document.getElementById("searchBtn").addEventListener("click", function(e) {
  e.preventDefault();
  const search = document.querySelector("#search").value;
    console.log(search);
    getBooks(search);
});

async function getBooks(search) {
    try {
        const response = await fetch(`${apiUrl}/searchBooks?keyword=${search}`, {
            headers
        });
        const data = await response.json();
        console.log(data);
        renderBooks(data);
    } catch (error) {
        console.error(error);
    }
}

function renderBooks(data) {
    const html = data.map(book => {
        return `
            <div class="book">
                <h2>${book.title}</h2>
                <p>${book.author.name}</p>
                <img src="${book.imageUrl}" alt="${book.title}">
                <p>${book.publishedYear}</p>
            </div>
        `;
    }).join("");
    books.innerHTML = html;
}