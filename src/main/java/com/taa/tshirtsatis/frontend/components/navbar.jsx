import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showAccount, setShowAccount] = useState(false);

    // Sidebar'ı kapatan fonksiyon
    const closeSidebar = () => {
        setShowSidebar(false);
    };

    return (
        <div className="navbar">
            {/*left icon*/}
            <button 
                onClick={() => setShowSidebar(!showSidebar)} 
                className="menu-toggle"
                aria-label="Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            
            {/*logo*/}
            <div className="navbar-logo">
                <Link to="/">BUCATA</Link>
            </div>
        
            {/**right icons */}
            <div className="navbar-icons">
                <button 
                    onClick={() => setShowAccount(!showAccount)} 
                    className="icon-button"
                    aria-label="Account"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                
                <button 
                    onClick={() => setShowSearch(!showSearch)} 
                    className="icon-button"
                    aria-label="Search"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
              
                <Link to="/card" className="icon-button" aria-label="Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </Link>
                
            </div>
            
            {showSidebar && (
                <div className="sidebar-menu">
                    <div className="sidebar-header">
                        <button 
                            onClick={() => setShowSidebar(false)}
                            className="close-button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <ul className="sidebar-links">
                        <h3>Kategoriler</h3>
                        <li><Link to="/categories/TheKheshig" onClick={closeSidebar}>The Kheshig</Link></li>
                        <li><Link to="/categories/AnatolianPars" onClick={closeSidebar}>Anatolian Pars</Link></li>
                        <li><Link to="/categories/KonfuseTheKilim" onClick={closeSidebar}>Konfuse The Kilim</Link></li>
                        <li><Link to="/categories/SleeplessKnight" onClick={closeSidebar}>Sleepless Knight</Link></li>
                        <li><Link to="/categories/BucataSpecial" onClick={closeSidebar}>Bucata Special</Link></li>
                        <li><Link to="/categories/Basic" onClick={closeSidebar}>Basic</Link></li>
                    </ul>
                </div>
            )}
            
            
            {showSearch && (
                <div className="search-panel">
                    <div className="search-header">
                        <button 
                            onClick={() => setShowSearch(false)}
                            className="close-button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="search-content">
                        <input 
                            type="text" 
                            placeholder="Ara..."
                            className="search-input"
                        />
                    </div>
                </div>
            )}
            
            
            
            {showAccount && (
                <div className="account-panel">
                    <div className="account-header">
                        <button 
                            onClick={() => setShowAccount(false)}
                            className="close-button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="account-content">
                        <ul>
                            <li><Link to="/orders" onClick={() => setShowAccount(false)}>Siparişlerim</Link></li>
                            <li><Link to="" onClick={() => setShowAccount(false)}>Çıkış</Link></li>
                        </ul>
                    </div>
                </div>
            )}
            
            
            {(showSidebar || showSearch || showAccount) && (
                <div 
                    className="overlay"
                    onClick={() => {
                        setShowSidebar(false);
                        setShowSearch(false);
                        setShowAccount(false);
                    }}
                ></div>
            )}
        </div>
    );
}

export default Navbar;
{/*
             */}