const notesContainer = document.querySelector("#notificationsContainer")

const notifications = [
	{
		name: "Anna Kim",
		avatar: "./assets/images/avatar-anna-kim.webp",
		action: "left the group",
		regarding: "Chess Club",
		pictureSnippet: "",
		message: "",
		timeStamp: "2 weeks ago",
		unread: false,
	},
	{
		name: "Nathan Peterson",
		avatar: "./assets/images/avatar-nathan-peterson.webp",
		action: "reacted to your recent post",
		regarding: "5 end-game strategies to increase your win rate",
		pictureSnippet: "",
		message: "",
		timeStamp: "2 weeks ago",
		unread: false,
	},
	{
		name: "Kimberly Smith",
		avatar: "./assets/images/avatar-kimberly-smith.webp",
		action: "commented on your picture",
		regarding: "",
		pictureSnippet: "./assets/images/image-chess.webp",
		message: "",
		timeStamp: "1 week ago",
		unread: false,
	},
	{
		name: "Rizky Hasanuddin",
		avatar: "./assets/images/avatar-rizky-hasanuddin.webp",
		action: "sent you a private message",
		regarding: "",
		pictureSnippet: "",
		message:
			"Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
		timeStamp: "5 days ago",
		unread: false,
	},
	{
		name: "Jacob Thompson",
		avatar: "./assets/images/avatar-jacob-thompson.webp",
		action: "has joined your group",
		regarding: "Chess Club",
		pictureSnippet: "",
		message: "",
		timeStamp: "1 day ago",
		unread: true,
	},
	{
		name: "Angela Gray",
		avatar: "./assets/images/avatar-angela-gray.webp",
		action: "followed you",
		regarding: "",
		pictureSnippet: "",
		message: "",
		timeStamp: "5m ago",
		unread: true,
	},
	{
		name: "Mark Weber",
		avatar: "./assets/images/avatar-mark-webber.webp",
		action: "reacted to your recent post",
		regarding: "My first tournament today!",
		pictureSnippet: "",
		message: "",
		timeStamp: "1m ago",
		unread: true,
	},
]

const displayNumberUnread = () => {
	const numberUnreadEl = document.querySelector("#number-unread-notes")
	const unreadNotes = notifications.filter((note) => {
		return note.unread === true
	})
	numberUnreadEl.textContent = unreadNotes.length
}

let generateNotesList = () => {
	notifications.forEach((notification, i) => {
		notesContainer.insertAdjacentHTML(
			"afterbegin",
			`<div id="notifications-container${i}">
            <div id="notification${i}" class="js-notifications flex justify-between rounded-xl mt-4 p-3 sm:p-5">
               <div class="flex">
                  <img
                     src="${notification.avatar}"
                     alt="mark weber avatar"
                     class="max-w-[2.8rem] max-h-[2.8rem]" />
                  <div id="message-container${i}" class="ml-4 sm:ml-6 ">
                     <p>
                        <span
                           class="text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer font-extrabold"
                           >${notification.name}</span
                        >
                        ${notification.action}
                        <span
                           class="text-darkGreyBlue hover:text-blue hover:cursor-pointer font-extrabold"
                           >${notification.regarding}
         
                           <!-- Red dot -->
                           <span
                              id="red-dot${i}"   
                              class="js-red-dot hidden ml-1 bg-red w-2 h-2 inline-block rounded-full"></span>
                        </span>
                     </p>
                     <span class="mt-1 block text-greyBlue">${notification.timeStamp}</span>
               
                  </div>
               </div>
            </div>`
		)

		if (notification.message) {
			const messageDiv = document.querySelector(
				`#notifications-container${i}`
			)
			messageDiv.insertAdjacentHTML(
				"beforeend",
				`<div
			      class="ml-[4.4rem] sm:ml-[5.4rem] mt-2 border border-veryLightGreyBlue rounded-xl p-2 sm:p-4 hover:bg-lightGreyBlue hover:cursor-pointer">
			      <p>
			         ${notification.message}
			      </p>
			   </div>`
			)
		}
		if (notification.pictureSnippet) {
			const notificationDiv = document.querySelector(`#notification${i}`)
			notificationDiv.insertAdjacentHTML(
				"beforeend",
				`<img
               src="${notification.pictureSnippet}"
               class="ml-4 max-w-[2.8rem] max-h-[2.8rem]"
               alt="lady playing chess" />`
			)
		}
		if (notification.unread) {
			const redDot = document.querySelector(`#red-dot${i}`)
			const notificationDiv = document.querySelector(`#notification${i}`)
			redDot.classList.remove("hidden")
			notificationDiv.classList.add("bg-snow")
		}
	})
	displayNumberUnread()
	return [...notesContainer.children]
}

// generateNotesList()

let notesList = generateNotesList()
console.log(notesList)

let markAsRead = () => {
	const markAsReadEl = document.querySelector("#mark-as-read")
	const redDots = document.querySelectorAll(".js-red-dot")
	markAsReadEl.addEventListener("click", (e) => {
		notesList.forEach((note) => {
			note.firstElementChild.classList.remove("bg-snow")
		})
		redDots.forEach((redDot) => {
			if (!redDot.classList.contains("hidden")) {
				redDot.classList.add("hidden")
			}
		})
		notifications.forEach((notification) => {
			notification.unread = false
		})
		displayNumberUnread()
	})
}

markAsRead()
