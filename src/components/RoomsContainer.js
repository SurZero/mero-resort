import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

import {RoomContextConsumer} from '../RoomContext'
import Loading from './Loading'

export default function RoomsComponent(){
	return(
		<RoomContextConsumer>
			{value => {
				const {loading, sortedRooms, rooms} = value // here value is context
				if(loading){
					return <Loading />
				}
				return(
					<>
						<RoomsFilter rooms={rooms}/>
						<RoomsList rooms={sortedRooms}/>
					</>
				)		 
				}
			}
		</RoomContextConsumer>

	)
}