import React from 'react';

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de lua"
                    src="./images/cat.png" />
                <div className='tw-followCard-info'>
                    <strong>Lua Bazar</strong>
                    <span className='tw-followCard-infoUsername'>@luabazar</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}