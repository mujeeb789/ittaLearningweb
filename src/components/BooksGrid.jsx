import linux from "../assets/images/linux.jpg";
import React, { useState } from "react";

const books = [
  {
    id: 1,
    title: "Book Title 1",
    author: "Author Name 1",
    isbn: "123-456-789",
    coverImage: linux,
    readUrl: "https://link-to-read-book-1.com"
  },
  {
    id: 2,
    title: "Book Title 2",
    author: "Author Name 2",
    isbn: "987-654-321",
    coverImage: linux,
    readUrl: "https://link-to-read-book-2.com"
  },
  {
    id: 3,
    title: "Book Title 3",
    author: "Author Name 3",
    isbn: "456-123-789",
    coverImage: linux,
    readUrl: "https://link-to-read-book-3.com"
  },
  {
    id: 4,
    title: "Book Title 3",
    author: "Author Name 3",
    isbn: "456-123-789",
    coverImage: linux,
    readUrl: "https://link-to-read-book-3.com"
  },
  {
    id: 5,
    title: "Book Title 3",
    author: "Author Name 3",
    isbn: "456-123-789",
    coverImage: linux,
    readUrl: "https://link-to-read-book-3.com"
  },
  // Add more book objects as needed
];

function BooksGrid() {
  const [selectedBookUrl, setSelectedBookUrl] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Book Collection</h1>
      
      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedBookUrl(book.readUrl)}
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-500">ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>

      {/* Iframe for reading book */}
      {selectedBookUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedBookUrl(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
            <iframe
              src={selectedBookUrl}
              title="Read Book"
              className="w-full h-[500px] border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksGrid;
