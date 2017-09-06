import React from 'react';
import LinkListItem from './link_list_item.js';


const LinkList = (props, value) => {
  const linkItems = props.links.map((link) => {
    return (
      <LinkListItem
        onClick={props.onClick}
        key={this.state.value}
        link={this.state.value} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {linkItems}
    </ul>
  );
};

export default LinkList;
