import classes from './Card.module.scss';

interface CardProps {
    image: string;
    title: string;
    text: string;
}

export function Card({ image, text, title }: CardProps) {
    return (
        <>
            <div className={classes.cardContainer}>
                <img src={image} alt={title} className={classes.cardImage} />
                <div className={classes.seMer}>
                    <div>Se mer</div>
                </div>
            </div>
            <div className={classes.textNede}>
                <div>{title}</div>
                <div>{text}</div>
            </div>


        </>
    );
}