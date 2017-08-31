import React from 'react';

const LinkListItem = ({link, onLinkSelect}) => {
  if (!link) {
    return <div>Loading...</div>;
  }

  const searchTerm = link.id.linkId;
  const url = `http://www.google.com/?q=${searchTerm}`;

  return (
    <div className="link-title col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={link.snippet.title}></iframe>
      </div>
        hi
    </div>
  );
};

export default LinkListItem;
