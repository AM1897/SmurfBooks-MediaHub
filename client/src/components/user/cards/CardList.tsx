import { FC } from 'react'
import { ReadUser } from '../../../utils/interface/Users'
import css from './Table.module.css'
import Card from './Card'

interface Props {
	users: Array<ReadUser>
}

const CardList: FC<Props> = ({users}) => {
	
	return (
		<>
			<table className={ css.border }>
				<thead>
				<tr className={ css.border }>
					<th className={ `${ css.border }, ${ css.idWidth }` }>Id</th>
					<th className={ `${ css.border }, ${ css.nameWidth }` }>Name</th>
					<th className={ `${ css.border }, ${ css.ageWidth }` }>Age</th>
					<th className={ `${ css.border }, ${ css.genderWidth }` }>Gender</th>
				</tr>
				</thead>
				<tbody>
				{ users.map(user => (
					<Card key={user._id} user={user}/>
				))}
				</tbody>
			</table>
		
		</>
	)
}

export default CardList