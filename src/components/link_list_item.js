import React from 'react';

const LinkListItem = ({ link }) => {

  const searchTerm = link.linkId;
  const url = `http://www.google.com/?q=${searchTerm}&output=embed`;

  return (
    <li onClick={() => (link)} className="list-group-item">
      <iframe width="420" height="315" src={url} frameBorder="0" title={link.title} allowFullScreen></iframe>
    </li>
  );
};

export default LinkListItem;
