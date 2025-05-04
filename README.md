# <div align='center'>Baileys - Typescript/Javascript WhatsApp Web API</div>

<div align="center"><img src="https://files.catbox.moe/en9x5i.jpg"></div>

## Important Note

The original repository was initially removed by its creator and subsequently taken over by [WhiskeySockets](https://github.com/WhiskeySockets). Building upon this foundation, I have implemented several enhancements and introduced new features that were not present in the original repository. These improvements aim to elevate functionality and provide a more robust and versatile experience.

## Install

Install in package.json:
```json
"dependencies": {
    "baileys": "github:SecretCompany777/station"
}
```
or install in terminal:
```
npm install baileys@github:SecretCompany777/station
```

Then import the default function in your code:
```ts 
// type esm
import makeWASocket from 'baileys'
```

```js
// type cjs
const { default: makeWASocket } = require("baileys")
```

## Added Features and Improvements
Here are some of the features and improvements I have added:

- **Support for Sending Messages to Channels**: You can now easily send messages to channels.

- **Support for Button Messages and Interactive Messages**: Added the ability to send messages with buttons and interactive messages.

- **AI Message Icon**: Added customizable AI icon settings for messages

- **Profile Picture Settings**: Allows users to upload profile pictures in their original size without cropping, ensuring better quality and visual presentation.

- **Custom Pairing Code**: Users can now create and customize pairing codes as they wish, enhancing convenience and security when connecting devices.

- **Libsignal Fixes**: Cleaned up logs for a cleaner and more informative output.

More features and improvements will be added in the future.

## Feature Examples

### NEWSLETTER

- **To get info newsletter**
``` ts
const metadata = await sock.newsletterMetadata("invite", "xxxxx")
// or
const metadata = await sock.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```
- **To update the description of a newsletter**
``` ts
await sock.newsletterUpdateDescription("abcd@newsletter", "New Description")
```
- **To update the name of a newsletter**
``` ts
await sock.newsletterUpdateName("abcd@newsletter", "New Name")
```  
- **To update the profile picture of a newsletter**
``` ts
await sock.newsletterUpdatePicture("abcd@newsletter", buffer)
```
- **To remove the profile picture of a newsletter**
``` ts
await sock.newsletterRemovePicture("abcd@newsletter")
```
- **To mute notifications for a newsletter**
``` ts
await sock.newsletterUnmute("abcd@newsletter")
```
- **To mute notifications for a newsletter**
``` ts
await sock.newsletterMute("abcd@newsletter")
```
- **To create a newsletter**
``` ts
const metadata = await sock.newsletterCreate("Newsletter Name", "Newsletter Description")
console.log(metadata)
```
- **To delete a newsletter**
``` ts
await sock.newsletterDelete("abcd@newsletter")
```
- **To follow a newsletter**
``` ts
await sock.newsletterFollow("abcd@newsletter")
```
- **To unfollow a newsletter**
``` ts
await sock.newsletterUnfollow("abcd@newsletter")
```
- **To send reaction**
``` ts
// jid, id message & emoticon
// way to get the ID is to copy the message url from channel
// Example: [ https://whatsapp.com/channel/xxxxx/175 ]
// The last number of the URL is the ID
const id = "175"
await sock.newsletterReactMessage("abcd@newsletter", id, "🪭")
```

### BUTTON MESSAGE & INTERACTIVE MESSAGE

- **To send button with text**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    text: "This is Button Messages",
    footer: 'Secret Company',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```
- **To send button with image**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    image: { url: "https://files.catbox.moe/en9x5i.jpg" }, // image: buffer or path
    caption: "This is button message with image",
    footer: 'Secret Company',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })

```
- **To send button with video**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    video: { url: "https://files.catbox.moe/zmphlw.mp4" }, // video: buffer or path
    caption: "This is button message with video",
    footer: 'Secret Company',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

- **To send interactive message**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Website",
             url: "https://noodlemagazine.com"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy",
             id: "666",
             copy_code: "777"
        })
     }
]

const interactiveMessage = {
    text: "Welcome to Salazar Bot",
    title: "botname",
    footer: "bossname",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with image**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Reply",
             id: "menu"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Website",
             url: "https://noodlemagazine.com"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Salin Code",
             id: "666",
             copy_code: "777"
        })
     }
]

const interactiveMessage = {
    image: { url: "https://files.catbox.moe/en9x5i.jpg" }, // image: buffer or path
    caption: "Welcome to the Hell",
    title: "botname",
    footer: "bossname",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with video**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Reply",
             id: "bug-menu"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Website",
             url: "https://noodlemagazine.com"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Salin Code",
             id: "666",
             copy_code: "777"
        })
     }
]

const interactiveMessage = {
    video: { url: "hhttps://files.catbox.moe/zmphlw.mp4" }, // video: buffer or path
    caption: "Welcome to the Hell",
    title: "botname",
    footer: "bossname",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```

### AI Icon

```ts
// just add "ai: true" function to sendMessage
await sock.sendMessage(id, { text: "Barua", ai: true })
```

### Custom Code Pairing

```ts
if(usePairingCode && !sock.authState.creds.registered) {
    const phoneNumber = await question('🪭𝚂𝙸𝙻𝙰 𝙸𝚂𝙸 𝙽𝙾𝙼𝙱𝙾𝚁 𝙿𝙷𝙾𝙽𝙴:\n')
    const custom = "MAHARAJA" // must be 8 digits, can be letters or numbers
    const code = await sock.requestPairingCode(phoneNumber, custom)
    console.log(`🪭𝚈𝙾𝚄𝚁 𝙿𝙰𝙸𝚁-𝙲𝙾𝙳𝙴: ${code?.match(/.{1,4}/g)?.join('-') || code}`)
}
```

## Reporting Issues
If you encounter any issues while using this repository or any part of it, please feel free to open a [new issue](https://github.com/SecretCompany777/station/issues) here.

## Notes
Everything other than the modifications mentioned above remains the same as the original repository. You can check out the original repository at [WhiskeySockets](https://github.com/WhiskeySockets/Baileys)
