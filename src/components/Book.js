import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup';

const Book = ({ book }) => {
  const {
    id, title, author, progress, category,
  } = book;

  return (
    <div className="book">
      <div className="book-info">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h4 className="book-author">{author}</h4>
        <ButtonGroup id={id} />
      </div>
      <div className="progress-box">
        <div className="progress-bar" />
        <div className="percent-display">
          <span className="percent">{progress.toString().concat('%')}</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="vertical-divider" />
      <div className="status-container">
        <h2>Current Chapter</h2>
        <p className="chapter">Chapter 28</p>
        <button type="button" className="update-btn">
          Update Progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
