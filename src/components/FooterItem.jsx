import React from "react";

function FooterItem({item}) {
  return (
    <div id="footerItem">
      <div>
        <a
          className="link link-dark link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          href="#"
        >
          {item}
        </a>
      </div>
    </div>
  );
}

export default FooterItem;
