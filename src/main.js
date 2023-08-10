import { notificationData } from "./data.js"

import {
	insertNotificationBody,
	insertNotifcationMessage,
	insertPictureSnippet,
	displayNumberUnread,
	markAsRead,
} from "./functions.js"

// Generate the list of notifications from a data source
let generateNotesList = () => {
	const notesContainer = document.querySelector("#notificationsContainer")
	notificationData.forEach((notification, i) => {
		notesContainer.insertAdjacentHTML(
			"afterbegin",
			insertNotificationBody(notification, i)
		)
		// Insert the notification message if one exists
		if (notification.message) {
			const messageDiv = document.querySelector(
				`#notifications-container${i}`
			)
			messageDiv.insertAdjacentHTML(
				"beforeend",
				insertNotifcationMessage(notification)
			)
		}
		// Insert a picture snippet if one exists
		if (notification.pictureSnippet) {
			const notificationDiv = document.querySelector(`#notification${i}`)
			notificationDiv.insertAdjacentHTML(
				"beforeend",
				insertPictureSnippet(notification)
			)
		}
		// Add a red dot and light blue background if the notification is unread
		if (notification.unread) {
			const redDot = document.querySelector(`#red-dot${i}`)
			const notificationDiv = document.querySelector(`#notification${i}`)
			redDot.classList.remove("hidden")
			notificationDiv.classList.add("bg-snow")
		}
	})
	//Display the number of unread notifications in the header
	displayNumberUnread(notificationData)

	//return all of of the notifications in an array to be used later
	return [...notesContainer.children]
}

let notesList = generateNotesList()

//If the link is clicked, take the generated notes list and
//remove the red dot and light blue background
markAsRead(notificationData, notesList)
