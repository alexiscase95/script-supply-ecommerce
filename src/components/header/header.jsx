/** @jsxImportSource @emotion/react */
import SearchBar from '../search-bar/search-bar';
import {headerStyle, logoStyle, logoTextStyle, searchBarStyle, iconsStyle, iconStyle} from "./header-styles";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/**
 * Header component to display a text logo, search bar, and user/cart icons.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
    const navigate = useNavigate();

    const searchQuery = (query) => {
        if (query.trim()) {
            navigate(`/search-results?query=${encodeURIComponent(query)}`); 
          }
    }

  return (
    <header css={headerStyle}>
        <Link to="/home" css={logoStyle}>
        <span css={logoTextStyle}>Script Supply</span>
      </Link>
      <div css={searchBarStyle}>
        <SearchBar 
          placeholder="Search for products..." 
          roundedCorners={true} 
          showButton={true} 
          showDropdown={true} 
          onSearch={searchQuery} // TODO add search handler
        />
      </div>
      <div css={iconsStyle}>
        <span css={iconStyle}>👤</span> {/* TODO get from fontawesome */}
        <span css={iconStyle}>🛒</span>  {/* TODO get from fontawesome */}
      </div>
    </header>
  );
};

export default Header;
