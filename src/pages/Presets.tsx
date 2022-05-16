import '../styles/Presets.css'

export function Presets() {
    return (
        <div id='presetsDiv'>
            <header>Presets</header>
            <div id='presetsBnk'>
                <p id='bnkName'>Banco A</p>
                <div id='presetsCfg'>  
                    <p>• A1.</p>
                        <input type="text" placeholder='Nome' />
                        <select name="Preset" id="">
                            <option value="Preset">Preset</option>
                            <option value="Action">Action</option>
                            <option value="Toggle Action">Toggle Action</option>
                            <option value="Momentary">Momentary</option>
                            <option value="Tap">Tap</option>
                            <option value="Tuner">Tuner</option>
                            <option value="Muted">Muted</option>
                        </select>
                </div>
            </div>
        </div>
    )
}