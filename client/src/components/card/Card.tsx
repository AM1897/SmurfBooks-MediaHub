import {FC} from 'react'
import css from './Card.module.css'

interface Props {
    message: string,
    author: string,
    created: Date,
    updated: Date
}

const Card: FC<Props> = ({message, author, created, updated}) => {
    return (
        <>
            <section>
                <div className={css.cardDiv} key={String(created)}>
                    <p className={css.username}>{author ? `${author}` : 'Unknown: '}</p>
                    <div>
                        <p className={css.message}>{message}</p>
                    </div>
                    <p className={css.timestamps}>
                        <span>{String(`${created}`)}</span><span>{!(created === updated) ? String(`| UPDATED AT: ${updated}`) : null}</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Card