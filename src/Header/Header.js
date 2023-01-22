import'./Header.css'
function Header() {
    return (
        <div className='header-site'>
            <h1 className='header-site__name'>Andrew <br/>
                Liseckiy</h1>
            <h2 className='header-site__profession'><i>Developer</i></h2>
            <div className='header-site__info-container'>
                <h3 className='header-site__profession-info'>CAREER SUMMARY:</h3>
                <ul className='header-site__list'>
                    <li>My personal experience and my initiative.</li>
                </ul>
            </div>
            <div className='header-site__info-container'>
                <h3 className='header-site__profession-info'>CONTACT INFO:</h3>
                <ul className='header-site__list'>
                    <li>Telegram: <a rel="info" href="https://web.telegram.org/" target="_blank">@Liseczkij</a></li>
                    <li>Mail: <a rel="info" href="https://www.gmail.com/mail/help/intl/ru/about.html?de." target="_blank">liseczkij2@gmai.com</a></li>
                    <li>Instagram: <a rel="info" href="https://www.instagram.com/lisetskiiy__/" target="_blank">lisetskiiy__</a></li>
                    <li>Git: <a rel="info" href="https://github.com/Liseckij2" target="_blank">https://github.com/Liseckij2</a></li>
                </ul>
            </div>
            <div className='header-site__info-container'>
                <h3 className='header-site__profession-info'>HOBBIES & INTERESTS:</h3>
                <ul className='header-site__list'>
                    <li>Film</li>
                    <li>Creative Writing</li>
                    <li>Dancing</li>
                    <li>Musical Instruments</li>
                    <li>Cooking</li>
                    <li>Soccer</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;