import React from 'react'
import {
	FaChevronDown,
	FaInbox,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa'

const Sidebar = () => {
	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Calendar</span>
				</li>
				<li>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 Days</span>
				</li>
			</ul>

			<div className="sidebar__middle">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>

			<ul className="sidebar__projects">Projects will go here</ul>
		</div>
	)
}

export default Sidebar
