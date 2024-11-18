//metode array untuk menyimpan data
let books = [];

//menambahkan buku menggunakan arrow function  
const addBook = () => {
    //mengambil data dari input
    const title = $('#titleInput').val().trim();
    const author = $('#authorInput').val().trim();

    //validasi input menggunakan conditional dalam objek
    const isValid = {
        title: title.length > 0,
        author: author.length > 0,
    };

    if (!isValid.title || !isValid.author) {
        alert("Judul dan penulis buku harus diisi!");
        return;
    }

    //membuat objek buku dengan manipulasi string
    const book = {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        author: author,
    };

    //menambahkan data buku yang sudah di input ke array
    books.push(book);

    //reset input
    $('#titleInput').val('');
    $('#authorInput').val('');

    //memperbarui tampilan daftar buku
    updateBookList();
};

//memperbarui tampilan daftar buku menggunakan arrow function 
const updateBookList = () => {
    //kosongkan daftar terlebih dahulu
    $('#bookList').empty(); 

    //iterasi array books menggunakan forEach dan arrow function
    books.forEach((book, index) => {
        //manipulasi string untuk menampilkan nama buku dengan format tertentu
        const bookItem = `<li class="list-group-item">${index + 1}. <strong>${book.title}</strong> karya oleh ${book.author}</li>`;
        $('#bookList').append(bookItem);
    });
};

//event listener untuk tombol tambah buku
$('#addBookBtn').on('click', addBook);
