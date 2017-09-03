import React from 'react';
import { onLinkSelect, link } from './App.js';

const LinkListItem = ({link, onLinkSelect}) => {

  const searchTerm = link.linkId;
  const url = `http://www.google.com/?q=${searchTerm}&output=embed`;

  return (
    <li onClick={() => onLinkSelect(link)} className="list-group-item">
      <iframe width="420" height="315" src={url} frameBorder="0" title={link.title} allowFullScreen></iframe>
    </li>
  );
};

export default LinkListItem;

// {link.title}
