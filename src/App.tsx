//Stylesheet files
import './styles/Global.css'

//React files
import { Header } from './pages/Header'
import {Presets} from './pages/Presets'

export function App() {
    return (
        <div>
            <Header />
            <Presets />
        </div>
    )
}