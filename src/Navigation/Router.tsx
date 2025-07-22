import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import MainStack from './MainStack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
// import { useSelector } from 'react-redux'
// import { getAccessToken } from '../../utils/AxiosInstance'

const Router = () => {
    // const { user } = useSelector((state: any) => state.userReducer);

    useLayoutEffect(() => {
        // getAccessToken()
    }, [])

    return (
        <React.Fragment>
            <NavigationContainer>
                {/* <AuthStack /> */}
                <MainStack />
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Router

const styles = StyleSheet.create({})