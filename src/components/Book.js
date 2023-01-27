import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const {
    /* eslint-disable */
    category, title, author, summary,
  } = props;

  return (
    <>
      <div className="book">
        <h6>{category}</h6>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{summary}</p>
        <ul className="actions">
          <li><Link to="#">Edit</Link></li>
          <li><Link to="#">Comments</Link></li>
          <li><Link to="#">Remove</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Book;
