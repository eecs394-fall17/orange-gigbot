This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

You can start cloning the repo:
```bash
git clone https://github.com/eecs394-fall17/orange-gigbot.git
```

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

Run the code:
```bash
ionic serve
```
Test into your browser with the follow URL `http://<server-ip>:8100`

### TODO ###

First screen, Home `'src/pages/home/'`
 - Add the button to log in with the account in LinkedIn.
 - Add button and template "SIGN UP" to create a new user.
 - Restrict to navigate only registered users into the apps.

After login it will be redirect to the Main template.

Main Screen `'src/pages/main/main.html'`
 Add buttons:
  - "Resume Helper".
  - "Search GIGBOT Network".
  - "Create / Edit Profile".

QA Library `'src/pages/library/'`
  - Mark selected questions on screen.
  - To fix, allow selected question only once.

Record Mock Interview `'src/pages/record/record/'`
 - Make buttons bigger (UX).
 - Limit the questions to test. Now, you can record more than the questions added into the favorite category.