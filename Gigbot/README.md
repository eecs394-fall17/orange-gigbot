# GIGBOT

GIGBOT is a smart, on-demand interview preparation resource. GIGBOT allows one to browse a selective Q&A library and record mock interview Q&A sessions with GIGBOT to receive feedback and suggestions.

## Getting Started:

- [Download the installer](https://nodejs.org/en/) for Node.js 6 or greater.
- Install the Ionic CLI globally: `npm install -g ionic cordova`
- Clone this repository: `git clone https://github.com/eecs394-fall17/orange-gigbot.git`
- Navigate to the project root: `cd Gigbot`
- Run `npm install` at the project root.

*Note: You may need to add "sudo" in front of any global commands to install utilities.*

## Configure Firebase:

GIGBOT reads its mock interview questions from a Firebase realtime database. Use the following instructions to setup GIGBOT to read from your own database.

- [Setup a Firebase account](https://firebase.google.com/) and create a new project.
- From the Firebase console, click "Add Firebase to your Web App".
- Replace the contents of the firebaseConfig JSON located in [app.module.ts](src/app/app.module.ts) with your own Firebase project's config values.
- Create a Realtime Database with the following structure:
```
Question-database
|-qid-0001
| |-Question: <Question Text>
| |-Category: <Question Category>
| |-GoodResponseAttributes:
|   |-0: <1st Good Response Attribute>
|   |-1: <2nd Good Response Attribute>
|   |-2: <3rd Good Response Attribute>
|
|-qid-0002
  ...
```
- Edit the [rules](https://firebase.google.com/docs/database/security/quickstart) of your Realtime Database so that anyone can read from your database.

## Platform Constraints:

This app requires the use of the native device's audio recording feature. GIGBOT is developed for mobile applications only. GIGBOT can deploy in browser, but does not have an audio recording function.

All deployment was done through [Ionic View](https://ionicframework.com/products/view); deployment directly onto iOS or Android devices has not yet been tested.

## Deployment:

  - Browser: run `ionic serve` at the project root


  - Android:
    ```bash
    $ ionic cordova platform add android
    $ ionic cordova run android
    ```

  - iOS:
    ```bash
    $ ionic cordova platform add ios
    $ ionic cordova run ios
    ```

  - Ionic View:
  
    - Create an [IonicView account](https://ionicframework.com/products/view).
    - Select "New App"
    - Follow the instructions regarding linking Ionic Pro to your app.
