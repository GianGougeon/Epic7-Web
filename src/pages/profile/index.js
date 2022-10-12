import React from 'react'
import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import Profile from '../../components/profile/Profile'
const index = () => {
  return (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
  )
}

export default index

