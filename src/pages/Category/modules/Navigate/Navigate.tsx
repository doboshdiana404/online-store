import { NavLink } from 'react-router-dom';

const Navigate = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/category/all'}>All category</NavLink>
        </li>
        <li>
          <NavLink to={'/category/create'}>Create</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
