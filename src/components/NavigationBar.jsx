import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Todo List
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" exact>
            About Nowt
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" exact>
            Don't Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Not a Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
