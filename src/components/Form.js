import React from 'react';

const Form = () => (
  <>
    <div className="form">
      <h4>ADD NEW BOOK</h4>
      <form className="addBookForm">
        <input type="text" placeholder="Book Title" required />
        <input type="text" placeholder="Author" />
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default Form;
