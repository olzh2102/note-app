import React from 'react'
import {
	FaChevronDown,
	FaInbox,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa'

const SidebarItem = ({ ui, title }) => (
	<li>
		<span>{ui}</span>
		<span>{title}</span>
	</li>
)

const Sidebar = () => {
	const items = {
		Inbox: <FaInbox />,
		Calendar: <FaRegCalendar />,
		'Next 7 Days': <FaRegCalendarAlt />,
	}

	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				{Object.entries(items).map((item) => (
					<SidebarItem ui={item[1]} title={item[0]} />
				))}
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
