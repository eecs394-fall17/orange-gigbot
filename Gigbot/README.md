# GIGBOT

GIGBOT is a smart, on-demand interview preparation resource. GIGBOT allows one to browse a selective Q&A library and record mock interview Q&A sessions with GIGBOT to receive feedback and suggestions.

## Getting Started:

- [Download the installer](https://nodejs.org/en/) for Node.js 6 or greater.
- Install the Ionic CLI globally: `npm install -g ionic cordova`
- Clone this repository: `git clone https://github.com/eecs394-fall17/orange-gigbot.git`
- Navigate to the project root: `cd Gigbot`
- Run `npm install` at the project root.

*Note: You may need to add "sudo" in front of any global commands to install utilities.*

## Platform Constraints:

This app requires the use of the native device's audio recording feature. GIGBOT is developed for mobile applications only. GIGBOT can deploy in browser, but does not have an audio recording function.

All deployment was done through Ionic View; deployment directly onto iOS or Android devices has not yet been tested.

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
