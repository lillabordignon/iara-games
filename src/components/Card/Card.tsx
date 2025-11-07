import Link from '../Link/Link'
import styles from './Card.module.css'

type CardProps = {
    href: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    genre: string;
}

const Card = ({ href, src, alt, title, description, genre }: CardProps) => {
    return (
        <section className={styles.cardContainer}>
            <Link className={styles.card} href={href}>
                <img src={src} alt={alt} />
                <div className={styles.cardContent}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>{genre}</span>
                </div>
            </Link>
        </section>

    )
}

export default Card