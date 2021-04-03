import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { MenuWrapper } from './styles'

export const Menu:React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <MenuWrapper className="menu" isOpen={isOpen}>
            <div className="menu__button" onClick={() => setIsOpen(!isOpen)}>
                <MdMenu size="30px" />
            </div>
            <div>
                Hello world
            </div>
            <div>
                Media
            </div>

            <article className={isOpen ? 'menu--open' : 'menu--close'}>
                <ul>
                    <li>Home</li>
                    <li>World</li>
                    <li>:D</li>
                </ul>
            </article>
        </MenuWrapper>
    )
}