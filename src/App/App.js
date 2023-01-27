import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import '../assets/fonts/Inconsolata-Black.ttf'
import './App.css'


function App() {
    return  (
        <div className='container-page'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}
export default App;