import cartIcon from "../assets/cart.svg";
import favoriteIcon from "../assets/favorite.svg";
import profileIcon from "../assets/profile.svg";
import appIcon from "../assets/icon.png";

function Navbar({ setView, setSelectedCategory }) {
  const handleCategoryClick = (category) => {
    setView("main");
    setSelectedCategory(category);
  };

  return (
    <header className="main-nav">
      <nav>
        <div className="nav-links">
          <span
            className="title"
            onClick={() => handleCategoryClick("All")}
          >
            <img src={appIcon} className="icon" alt="ShopEase logo" />
            ShopEase
          </span>
          <p>New Arrivals</p>
          <p>Featured</p>
          <p onClick={() => handleCategoryClick("Men")}>Men</p>
          <p onClick={() => handleCategoryClick("Women")}>Women</p>
          <p onClick={() => handleCategoryClick("Accessories")}>Accessories</p>
        </div>

        <div className="nav-buttons">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search products"
          />
          <img src={favoriteIcon} alt="Favorites" />
          <img
            src={cartIcon}
            alt="Cart"
            onClick={() => setView("cart")}
          />
          <img
            src={profileIcon}
            alt="Orders"
            onClick={() => setView("orders")}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
