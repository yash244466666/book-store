import React from 'react';
import Book from './Book';

const DisplayBookList = () => {
  const bookInfo = [
    {
      title: ' THE HOUSE OF MIRTH',
      author: 'EDITH WHARTON',
      category: 'Action',
      summary: 'Another Ecclesiastes quotation, this time from line 7:4. A brilliant sentence: The heart of the wise is in the house of mourning; but the heart of fools is in the house of mirth. One of Wharton’s best-known novels, it came out in 1905.',
    },
    {
      title: 'A TIME TO KILL',
      author: 'JOHN GRISHAM',
      category: 'History',
      summary: 'This one is from 3:3 in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who relates and analyses events in his own life. This has resonated strongly with a lot of people: Abraham Lincoln quoted Ecclesiastes when addressing Congress in 1862.',
    },
    {
      title: 'VILE BODIES BY',
      author: 'EVELYN WAUGH',
      category: 'Kids',
      summary: 'Waugh took the title for his 1930 novel from Philippians, full name Epistle to the Philippians, which is part of the New Testament and generally attributed to Paul the Apostle. Most scholars consider it to be a collection of letter fragments sent from Paul to the church of Philippi, a city on the Greek island of Thasos.',
    },
  ];
/* eslint-disable */
  return (
    <>
    
      <Book title={bookInfo[0].title} author={bookInfo[0].author} category={bookInfo[0].category} summary={bookInfo[0].summary} />
      <Book title={bookInfo[1].title} author={bookInfo[1].author} category={bookInfo[1].category} summary={bookInfo[1].summary} />
      <Book title={bookInfo[2].title} author={bookInfo[2].author} category={bookInfo[2].category} summary={bookInfo[2].summary} />
    </>

  );
/* eslint-enable */
};

export default DisplayBookList;
