
import './Footer.css';

function Footer() {
    return (  
        <footer className="footer">
            <div className="footer-features">
                <div className="feature-item">
                    <div className="feature-icon">😁</div>
                    <div className="feature-text">Uygun Fiyatlar</div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">🚚</div>
                    <div className="feature-text">1500₺ üzeri kargo bedava</div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">©</div>
                    <div className="feature-text">Yüksek Kalite Baskı</div>
                </div>
            </div>

            <div className="footer-navigation">
                <div className="footer-column">
                    <h3>Koleksiyonlar</h3>
                    <ul>
                        <li><a href="">The Kheshig</a></li>
                        <li><a href="">Anatolian Pars</a></li>
                        <li><a href="">Konfuse The Kilim</a></li>
                        <li><a href="">Sleepless Knight</a></li>
                        <li><a href="">Bucata Special</a></li>
                        <li><a href="">Basic</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Hesabım</h3>
                    <ul>
                        <li><a href="">Giriş Yap</a></li>
                        <li><a href="">Kayıt Ol</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Hakkımızda</h3>
                    <ul>
                        <li><a href="">İletişim</a></li>
                        <li><a href="">S.S.S</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Destek</h3>
                    <ul>
                        <li><a href="">Kargo ve İade</a></li>
                        <li><a href="">Gizlilik Sözleşmesi</a></li>
                        <li><a href="">Kullanıcı Sözleşmesi</a></li>
                        <li><a href="">Mesafeli Satış Sözleşmesi</a></li>
                    </ul>
                </div>

                <div className="footer-logo">
                    <img src="" alt="Bucata Logo" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="" aria-label="Instagram">
                        <img src="" alt="Instagram" />
                    </a>
                </div>

                <div className="payment-methods">
                    <img src="" alt="Visa" />
                    <img src="" alt="Mastercard" />
                    <img src="" alt="Maestro" />
                </div>
            </div>

            <div className="copyright">
                ©2025 Tüm Hakları Saklıdır.
            </div>
        </footer>
    );
}

export default Footer;  