import { notificationData } from "./data.js"

import {
	insertNotificationBody,
	insertNotifcationMessage,
	insertPictureSnippet,
	displayNumberUnread,
	markAsRead,
} from "./functions.js"

const notesContainer = document.querySelector("#notificationsContainer")

let generateNotesList = () => {
	notificationData.forEach((notification, i) => {
		notesContainer.insertAdjacentHTML(
			"afterbegin",
			insertNotificationBody(notification, i)
		)

		if (notification.message) {
			const messageDiv = document.querySelector(
				`#notifications-container${i}`
			)
			messageDiv.insertAdjacentHTML(
				"beforeend",
				insertNotifcationMessage(notification)
			)
		}
		if (notification.pictureSnippet) {
			const notificationDiv = document.querySelector(`#notification${i}`)
			notificationDiv.insertAdjacentHTML(
				"beforeend",
				insertPictureSnippet(notification)
			)
		}
		if (notification.unread) {
			const redDot = document.querySelector(`#red-dot${i}`)
			const notificationDiv = document.querySelector(`#notification${i}`)
			redDot.classList.remove("hidden")
			notificationDiv.classList.add("bg-snow")
		}
	})
	displayNumberUnread(notificationData)
	return [...notesContainer.children]
}

let notesList = generateNotesList()

markAsRead(notificationData, notesList)
