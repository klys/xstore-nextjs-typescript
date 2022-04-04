import React from 'react';

const Breadcrumbs = () => {
    return <>
    <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-home" aria-hidden="true"/>
        </span>
        <span>Anthony's Art</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-book" aria-hidden="true"/>
        </span>
        <span>Merchandise</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-puzzle-piece" aria-hidden="true"/>
        </span>
        <span>Memorial</span>
      </a>
    </li>
    <li className="is-active">
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-thumbs-up" aria-hidden="true"/>
        </span>
        <span>List</span>
      </a>
    </li>
  </ul>
</nav>
    </>
}

export default Breadcrumbs;