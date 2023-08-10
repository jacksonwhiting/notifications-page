export {
	insertNotificationBody,
	insertNotifcationMessage,
	insertPictureSnippet,
	displayNumberUnread,
	markAsRead,
}

//Insert the notification (minus the message and picture snippet - these are conditional below)
const insertNotificationBody = (notification, i) => {
	return `<div id="notifications-container${i}">
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
}

//Insert the message (used in main.js if a message exists
const insertNotifcationMessage = (notification) => {
	return `<div
               class="ml-[4.4rem] sm:ml-[5.4rem] mt-2 border border-veryLightGreyBlue rounded-xl p-2 sm:p-4 hover:bg-lightGreyBlue hover:cursor-pointer">
               <p>
                  ${notification.message}
               </p>
            </div>`
}

//Insert the picture snippet (used in main.js if a picture snippet exists)
const insertPictureSnippet = (notification) => {
	return `<img
               src="${notification.pictureSnippet}"
               class="ml-4 max-w-[2.8rem] max-h-[2.8rem]"
               alt="lady playing chess" 
            />`
}

// Gets the number of unread notifications(unread: true) and displays
// it in the header
const displayNumberUnread = (notificationData) => {
	const numberUnreadEl = document.querySelector("#number-unread-notes")
	const unreadNotes = notificationData.filter((note) => {
		return note.unread === true
	})
	numberUnreadEl.textContent = unreadNotes.length
}

//If the "Mark as read" span is clickec, mark all notification as read
//Remove the red dot, remove the light blue background, and turn all unread to false in the data object
let markAsRead = (notificationData, notesList) => {
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
		notificationData.forEach((notification) => {
			notification.unread = false
		})
		displayNumberUnread(notificationData)
	})
}
