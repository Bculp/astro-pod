export const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact-us">Contact Us</a>
    </li>
  </ul>
);
