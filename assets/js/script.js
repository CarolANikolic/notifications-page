// Get first three sections elements (new notifications)
const markReadBt = document.getElementById('read-bt');
const notificationOne = document.getElementById('notification-one');
const notificationTwo = document.getElementById('notification-two');
const notificationThree = document.getElementById('notification-three');

// Get span element with number of notifications
const numberNotifications = document.getElementById('notifications-number');

// Get first three divs elements where the notification red dot (peseudo element) was built upon (new notifications)
const newNotificationOne = document.getElementById('notifications-content-one');
const newNotificationTwo = document.getElementById('notifications-content-two');
const newNotificationThree = document.getElementById('notifications-content-three');

// Access CSS pseudo element style properties
const cssNotificationOne = window.getComputedStyle(newNotificationOne, '::after');
const cssNotificationTwo = window.getComputedStyle(newNotificationTwo, '::after');
const cssNotificationThree = window.getComputedStyle(newNotificationThree, '::after');

// Add event listner to button "Mark all as read"
markReadBt.addEventListener('click', () => {
    markNotificationsRead();  
});

// Add white background color in variable
let backgroundColorWhite = 'hsl(0, 0%, 100%)';

const markNotificationsRead = () => {
    
    //Update number of notifications
    numberNotifications.innerHTML = '0';

    // Change background color
    notificationOne.style.backgroundColor = backgroundColorWhite;
    notificationTwo.style.backgroundColor = backgroundColorWhite;
    notificationThree.style.backgroundColor = backgroundColorWhite;
    
    // Change color of pseudo element to be like bacground when button clicked
    newNotificationOne.style.setProperty('--red', '--white');
    newNotificationTwo.style.setProperty('--red', '--white');
    newNotificationThree.style.setProperty('--red', '--white');

}