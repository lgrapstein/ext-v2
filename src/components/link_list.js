import React from 'react';
import LinkListItem from './link_list_item.js';

const LinkList = (props, link) => {
  const linkItems = props.links.map((link) => {
    return (
      <LinkListItem
        onClick={props.onClick}
        key={link}
        link={link} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {linkItems}
    </ul>
  );
};

export default LinkList;
