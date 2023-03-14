import './Main.css';
function Main() {
    return (
        <div className='main-page'>
            <div className='main-page__container'>
                <h2 className='main-page__container-skills'>SKILLS:</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Saas</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Js</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='main-page__container'>
                <h2 className='main-page__container-skills'>EDUCATIONAL HISTORY:</h2>
                <h3>Engineer</h3>
                <h3>Odessa National Technical University</h3>
                <h3>Qualification:  Bachelor's</h3>
                <h3>Form of education: Constantly</h3>
            </div>
            <div className='main-page__container'>
                <h2 className='main-page__container-skills'>ADDITIONAL EDUCATION:</h2>
                <h3>It School: basic, pro course's</h3>
                <h3>Numerical control of machine tools</h3>
            </div>
        </div>
    );
}
export default Main;