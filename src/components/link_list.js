import React from 'react';
import LinkListItem from './link_list_item.js';

const LinkList = (props, link) => {
  // const linkItems = props.links.map((link) => {
  //   return (
  //     <LinkListItem
  //       onLinkSelect={props.onLinkSelect}
  //       key={link.etag}
  //       link={link} />
  //   );
  // });

  return (
    <ul className="col-md-4 list-group">
      <LinkListItem
        onLinkSelect={props.onLinkSelect}
        key={link.etag}
        link={link} />
    </ul>
  );
};

export default LinkList;
