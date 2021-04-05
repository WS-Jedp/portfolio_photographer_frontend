import React from 'react'
import { LayoutWrapper } from './styles'

import { Menu } from '../components/menu'

export const Layout:React.FC = ({ children }) => {

    return (
        <LayoutWrapper>
            <Menu />
            <article className="layout-content">
                {
                    children
                }
            </article>
        </LayoutWrapper>
    )
}