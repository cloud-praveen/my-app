// it defining a navigation stacks
import { Stack } from "expo-router";

import { useCallback } from "react";
// load and manage custom fonts 
import { useFonts } from "expo-font";


import *  as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()


//initial layout
const  Layout =()=>{

const [fontsLoader]=useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),

})

const onLayoutRootView = useCallback(async()=>{
    if(fontsLoader){
        await SplashScreen.hideAsync();
    }
},[fontsLoader])

if(!fontsLoader) return null;


    return
    (
<Stack onLayout={onLayoutRootView}/>

    ) 
}


export default Layout