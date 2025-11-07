import React from 'react'
import styles from '../Header.module.css'

const HeaderListItem = ({ children }: React.HtmlHTMLAttributes<HTMLLIElement>) => {
    return (
        <li className={styles.item}>{children}</li>
    )
}

export default HeaderListItem