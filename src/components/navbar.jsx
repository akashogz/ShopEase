import cartIcon from '../assets/cart.svg';
import favoriteIcon from '../assets/favorite.svg';
import profileIcon from '../assets/profile.svg';

function navbar({ setShowCart }) {
    return (
        <>
        <div className="main-nav">
            <nav>
                <div className="nav-links">
                    <span className="title" onClick={() => setShowCart(false)}>ShopEase</span>
                    <p>New Arrivals</p>
                    <p>Featured</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Accessories</p>
                </div>
                <div className="nav-buttons">
                    <input type ="text" placeholder="Search"/>
                    <img src={favoriteIcon}/>
                    <img src={cartIcon} onClick={() => setShowCart(true)}/>
                    <img src={profileIcon}/>
                </div>
                </nav>
        </div>
        </>
    );
}

export default navbar