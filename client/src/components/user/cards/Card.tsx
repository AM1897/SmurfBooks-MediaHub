import { FC } from 'react'
import { ReadUser } from '../../../utils/interface/Users'
import css from './Table.module.css'

interface Props {
	user: ReadUser
}

const Card: FC<Props> = ({user}) => {
	
	return (
		<tr className={ css.border }>
			<td className={ css.border }>{ user._id }</td>
			<td className={ css.border }>{ user.username }</td>
			<td className={ css.border }>{ String(user.createdAt) }</td>
			{/* <td className={ css.border }>{ user.gender }</td> */}
		</tr>
	)
}

export default Card