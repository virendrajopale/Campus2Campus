import { configureStore } from '@reduxjs/toolkit'
import  driveSlice  from './Slices/DriveSlice'

import  profileSlice  from './Slices/StudentSlice'
import userSlice  from './Slices/UserSlice'

export const store=configureStore({
    reducer:{
        drives:driveSlice,
        users:userSlice,
        profile:profileSlice
    }
})