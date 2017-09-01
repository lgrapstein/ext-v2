import React from 'react';

const LinkListItem = ({link, onLinkSelect}) => {
  // if (!link) {
  //   return <div>Loading...</div>;
  // }

  const searchTerm = link.linkId;
  const url = `http://www.google.com/?q=${searchTerm}`;

  return (
    <li onClick={() => onLinkSelect(link)} className="list-group-item">
      <div className="link-title col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} title={link.title}></iframe>
        </div>
      </div>
    </li>
  );
};

export default LinkListItem;
