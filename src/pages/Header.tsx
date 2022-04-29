import saturnoLogo from '../assets/images/saturnoLogo.png' //Error to resolve

import '../styles/Header.css' // Stylesheet

export function Header() {
    var siteSaturno = 'saturnopedais.com.br';

    return (
        <div id='header'>
            <a href={siteSaturno}>
                <img src={saturnoLogo} alt="saturno-logo"/>
            </a>
            <h1>EDITOR</h1>
        </div>
    )
}