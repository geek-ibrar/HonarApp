# HonarApp

## Technical Assessment 
First of all, you have to create the home screen which is given below and over here add the functionality to be able to click the free course "Intro to web development" and navigate to the next screen, in the next screen there should be a video player which should play the video in the landscape mode by default and should have the social aspect on the right side of the screen as shown in the image. Additionally, there should be 3 checkpoints for the video progress bar while playing the video (33%, 66% and 100%). 

The video link is as follows: https://www.youtube.com/watch?v=q_AJK75oaqA 

Create the app using expo and the app should be in runnable form. 
(https://reactnative.dev/docs/environment-setup) 

Feel free to add your own images where required. 

Publish your work on github and share the link of the repo at hamd@thedevnation.com 



## Issues
- As this app is developed in expo & there's no youtube-player library that support expo. Therefore we used web-view, which's not the best solution. So there are two possible fixes for this issue
  1. Either we host video outside of youtube, where we can directly access it using [expo-video](https://docs.expo.dev/versions/latest/sdk/video/). In this way we will have full control on player UI customization. 
  2. Eject expo app or use react-native-cli for this app. To integrate other available [youtube-player](https://github.com/barmej/react-native-youtube-player) libraries



**The app is tested on android, so there might be UI issue on iOS**
