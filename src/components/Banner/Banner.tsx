import styles from "./Banner.module.css";

type BannerProps = {
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
};

const Banner = ({ image, title, description, buttonText, onButtonClick }: BannerProps) => {
    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {buttonText && (<button onClick={onButtonClick}>{buttonText}</button>)}
                </div>
            </div>
        </section>
    );
};

export default Banner;
