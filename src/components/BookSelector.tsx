// src/components/BookSelector.tsx
import React, { useState } from 'react';
import { Select, Input, Space } from 'antd';

const { Option } = Select;

const BookSelector: React.FC = () => {
  // Mock data for book selection
  const allBooks = [
    { id: 1, name: 'To Kill a Mockingbird', genre: 'Fiction', author: 'John Doe' },
    { id: 2, name: 'The Great Gatsby', genre: 'Fiction', author: 'John Doe' },
    { id: 3, name: 'Animal Farm', genre: 'Fiction', author: 'John Doe' },
    { id: 4, name: 'Example Book', genre: 'Non-fiction', author: 'Jane Smith' },
  ];

  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  // Function to filter books based on search query, genre, and author
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterBooks(query, selectedGenre, selectedAuthor);
  };

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value);
    filterBooks(searchQuery, value, selectedAuthor);
  };

  const handleAuthorChange = (value: string) => {
    setSelectedAuthor(value);
    filterBooks(searchQuery, selectedGenre, value);
  };

  const filterBooks = (query: string, genre: string, author: string) => {
    const filtered = allBooks.filter(
      (book) =>
        book.name.toLowerCase().includes(query.toLowerCase()) &&
        (genre === '' || book.genre === genre) &&
        (author === '' || book.author === author)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div style={{ width: '450px', marginTop: '40px', }}>
      <Space direction="vertical" style={{ width: '100' }}>
        <Input
          placeholder="Search by Title"
          value={searchQuery}
          style={{
            border:"2px solid black",
            marginTop:"3px"
          }}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Select
          placeholder="Select Genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          style={{ width: '130px' }}
        >
          {Array.from(new Set(allBooks.map((book) => book.genre))).map((genre) => (
            <Option key={genre} value={genre}>
              {genre}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Select Author"
          value={selectedAuthor}
          onChange={handleAuthorChange}
          style={{ width: '130px' }}
        >
          {Array.from(new Set(allBooks.map((book) => book.author))).map((author) => (
            <Option key={author} value={author}>
              {author}
            </Option>
          ))}
        </Select>
      </Space>

      {/* Display search results or filtered books */}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.name} - {book.genre} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSelector;
