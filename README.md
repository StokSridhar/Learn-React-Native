<a href="/"><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" alt="React Native"> </a>

# React-Native
React Native Environment Setup 

Installing dependencies
 1) Node, Python2, JDK
 2) Android development environment
 3) React Native Command Line Interface

Download Node js from Offical Website  - https://nodejs.org/en/download/

Run Command Promptas Adminstator - choco install -y nodejs.install python2 jdk8

Install Android Studio - https://developer.android.com/studio/index.html

  - Android SDK
  
  - Android SDK Platform
  
  - Android Virtual Device
  
Install the Android SDK
   - "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager"
   
   - Android SDK Platform 28
   
   - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
   
Configure the ANDROID_HOME environment variable 
  - Open the Windows Control Panel.
  - Click on User Accounts, then click User Accounts again
  - Click on Change my environment variables
  - Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

Install React Native CLI - $ npm install -g react-native-cli

Create New Project -  $ npm react-native init Helloworld 

Change Folder Directoty - $ cd Helloworld

Run React Native - $ npx react-native run-android

That's it!
Congratulations! You've successfully run and modified your first React Native app.
