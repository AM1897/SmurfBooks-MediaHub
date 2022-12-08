import css from './Header.module.css'
import smurfar from '../../utils/image/smurfar.gif'

function Header() {
    return (
        <div className={css.headerContainer}>
            <div className={css.containerDiv}>
                <div className={css.itemB}>
                    <h1 data-testid='texth1' className={css.text}>SmurfBooks</h1>
                </div>
                <div className={css.itemA}>
                    <img className={css.imageSmurfar} src={smurfar} alt="smurfGif"/>
                </div>
            </div>
        </div>
    )
}

export default Header