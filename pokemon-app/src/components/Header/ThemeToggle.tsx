import React, {useState} from 'react';

const ThemeToggle = () => {

    const [theme, setTheme] = useState(false)
    console.log('set theme')

    const ThemeHandler = () =>{
        console.log('theme handler')
        const app = document.getElementById('App')
        if (!theme){
            setTheme(true)
            app!.style.backgroundColor = '#313235'
        }else {
            setTheme(false)
            app!.style.backgroundColor = '#fff'
        }
    }

    return (
        <div className="form-check form-switch">
            <label htmlFor="flexSwitchCheckChecked" className={"theme-text"}>
                Theme change
                <input onClick={ThemeHandler} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
            </label>
        </div>
    );
};

export default React.memo(ThemeToggle);
