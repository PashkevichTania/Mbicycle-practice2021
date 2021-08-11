import React, {useState} from 'react';

const ThemeToggle = () => {

    const [theme, setTheme] = useState(false)
    console.log('set theme')

    const ThemeHandler = () =>{
        console.log('theme handler')
        const app = document.getElementById('App')
        const header = document.getElementById('header')
        const search = document.getElementById('search')
        const searchResults = document.getElementById('search-result')
        if (!theme){
            setTheme(true)
            app!.style.backgroundColor = '#313235'
            header!.classList.add('header__dark')
            if (search){
                search.classList.add('dark')
            }
            if (searchResults){
                searchResults.classList.add('dark')
            }
        }else {
            setTheme(false)
            app!.style.backgroundColor = '#fff'
            header!.classList.remove('header__dark')
            if (search){
                search.classList.remove('dark')
            }
            if (searchResults){
                searchResults.classList.remove('dark')
            }
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
