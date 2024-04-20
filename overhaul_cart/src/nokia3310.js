function displayMainMenu() {
    console.log("1. Phone book");
    console.log("2. Messages");
    console.log("3. Chat");
    console.log("4. Call Register");
    console.log("5. Tones");
    console.log("6. Settings");
    console.log("7. Call Divert");
    console.log("8. Games");
    console.log("9. Calculator");
    console.log("10. Reminders");
    console.log("11. Clock");
    console.log("12. Profiles");
    console.log("13. SIM Services");
}

function displayPhoneBookSubMenu() {
    console.log("1. Search");
    console.log("2. Service Nos");
    console.log("3. Add name");
    console.log("4. Erase");
    console.log("5. Edit");
    console.log("6. Assign tone");
    console.log("7. Send b'card");
    console.log("8. Options");
    console.log("9. Speed dials");
    console.log("10. Voice tags");
    console.log("0. Back");
}

function handlePhoneBookSearch() {
    console.log("Search");
}

function handlePhoneBookOptions() {
    console.log("1. Type of view");
    console.log("2. Memory status");
}

function displayMessagesSubMenu() {
    console.log("1. Write and send a text message");
    console.log("2. Read text message");
    console.log("3. Views saved messages");
    console.log("4. Picture message");
    console.log("5. Templates");
    console.log("6. Smileys");
    console.log("7. Message settings");
    console.log("8. Info service");
    console.log("9. Voice mailbox number");
    console.log("10. Service command editor");
}

function handleMessageSettings() {
    console.log("Message settings");
}

function displayChatSubMenu() {
    console.log("1. Chat options");
    console.log("0. Back");
}

function handleChatOptions() {
    console.log("Chat options");
}

function displayCallRegisterSubMenu() {
    console.log("1. Show call duration");
    console.log("0. Back");
}

function handleShowCallDuration() {
    console.log("Show call duration");
}

function displayTonesSubMenu() {
    console.log("1. Composer");
    console.log("0. Back");
}

function handleComposer() {
    console.log("Composer");
}

function displaySettingsSubMenu() {
    console.log("1. Call settings");
    console.log("2. Phone settings");
    console.log("3. Security settings");
    console.log("0. Back");
}

function handleCallSettings() {
    console.log("Call settings");
}

function handlePhoneSettings() {
    console.log("Phone settings");
}

function handleSecuritySettings() {
    console.log("Security settings");
}


displayMainMenu();
let userInput = 2;
if (userInput === 2) {
    displayMessagesSubMenu();
    let subMenuInput = 7; 
    if (subMenuInput === 7) {
        handleMessageSettings();
    } else if (subMenuInput === 0) {
        displayMainMenu();
    }
}

function displayCallDivertSubMenu() {
    console.log("Call Divert Submenu");
}

function displayGamesSubMenu() {
    console.log("Games Submenu");
}

function displayCalculatorSubMenu() {
    console.log("Calculator Submenu");
}

function displayReminderSubMenu() {
    console.log("Reminder Submenu");
}

function displayClockSubMenu() {
    console.log("Clock Submenu");
}

function displayProfilesSubMenu() {
    console.log("Profiles Submenu");
}

function displaySimServicesSubMenu() {
    console.log("SIM Services Submenu");
}

displayMainMenu();
let userInput = 7; 
if (userInput === 7) {
    displayCallDivertSubMenu();
    let subMenuInput = 1; 
}

function displaySearchSubMenu() {
    console.log("Search Submenu");
}

function handleAddName() {
    console.log("Add name");
}

function handleErase() {
    console.log("Erase");
}

function handleEdit() {
    console.log("Edit");
}

function handleAssignTone() {
    console.log("Assign tone");
}

function handleSendBusinessCard() {
    console.log("Send business card");
}

function handleSpeedDials() {
    console.log("Speed dials");
}

function handleVoiceTags() {
    console.log("Voice tags");
}

displayPhoneBookSubMenu();
let userInput = 3;
if (userInput === 3) {
    handleAddName();
}

function handleReadTextMessage() {
    console.log("Read text message");
}

function handleViewsSavedMessages() {
    console.log("Views saved messages");
}

function handlePictureMessage() {
    console.log("Picture message");
}

function handleTemplates() {
    console.log("Templates");
}

function handleSmileys() {
    console.log("Smileys");
}

function handleMessageSettings() {
    console.log("Message settings");
}

function handleInfoService() {
    console.log("Info service");
}

function handleVoiceMailboxNumber() {
    console.log("Voice mailbox number");
}

function handleServiceCommandEditor() {
    console.log("Service command editor");
}

displayMessagesSubMenu();
let userInput = 3; 
if (userInput === 3) {
    handlePictureMessage();
}

function handleComposer() {
    console.log("Composer");
}

function handleCallSettings() {
    console.log("Call settings");
}

function handlePhoneSettings() {
    console.log("Phone settings");
}

function handleSecuritySettings() {
    console.log("Security settings");
}

displayMainMenu();
let userInput = 2;
if (userInput === 2) {
    displaySettingsSubMenu();
    let subMenuInput = 1; 
    if (subMenuInput === 1) {
        handleCallSettings();
    } else if (subMenuInput === 2) {
        handlePhoneSettings();
    } else if (subMenuInput === 3) {
        handleSecuritySettings();
    } else if (subMenuInput === 0) {
        displayMainMenu();
    }
}

function handleHelp() {
    console.log("Help");
}

displayMainMenu();
let userInput = 9;
if (userInput === 9) {
    handleHelp();
}

function handleCallDivert() {
    console.log("Call Divert");
}

function handleCallBarring() {
    console.log("Call Barring");
}

function handleCallWaiting() {
    console.log("Call Waiting");
}

function handleFixedDialing() {
    console.log("Fixed Dialing");
}

function handleOwnNumbers() {
    console.log("Own Numbers");
}

function handlePreferredNetworks() {
    console.log("Preferred Networks");
}

displaySIMServicesSubMenu();
let userInput = 1; 
if (userInput === 1) {
    handleCallDivert();
}