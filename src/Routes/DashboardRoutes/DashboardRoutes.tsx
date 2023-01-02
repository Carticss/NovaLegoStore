import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import { PrivateRoutes } from '../PrivateRoutes';
import { PublicRoutes } from '../PublicRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { useDashboardRoutes } from './useDashboardRoutes';

export default function DashboardRouter() {  

  const {user} = useDashboardRoutes();

  return (
    <>
        <NavigationContainer>
                    {user ? (   
                        <PrivateRoutes />
                    ) : (
                        <PublicRoutes />
                    )}
        </NavigationContainer>
    </>
  );
}