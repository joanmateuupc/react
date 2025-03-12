import  { useState } from 'react'


export function TwitterFollowCard ({userName = 'Uknown', name = 'Uknown', initialIsFollowing}) {

    //devuelve un array con dos posiciones
    const [isFollowing, setIsFolllowing] = useState(initialIsFollowing) 


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFolllowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar'
                src="https://unavatar.io/duckduckgo/gummibeer.dev"
                alt="El avatar del oso panda" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserNam'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}