import saturnoLogo from '../assets/images/saturnoLogo.svg'

import '../styles/Header.css' // Stylesheet

export function Header() {
    var siteSaturno = 'saturnopedais.com.br';

    return (
        <div>
            <header>
                <a href={siteSaturno}>
                    <img src={saturnoLogo} alt="saturno-logo" />
                </a>
                <h1>EDITOR</h1>
            </header>
        </div>
    )
}