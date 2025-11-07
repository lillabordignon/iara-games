import React from 'react'
import styles from './MenuList.module.css'

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <nav>
            <ul className={styles.menu}>
                {children}
            </ul>
        </nav>
    )
}

export default MenuList