import React from 'react'
import { LeftBar } from '../sections/LeftBar'
import { Content } from '../components/Content'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Dashboard = () => {
  const { currentUser } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    currentUser.usuario === '' && router.push('http://localhost:3000')
  }, [])

  return (
    <div className="inline-flex h-screen w-screen">
      <LeftBar />
      <Content />
    </div>
  )
}

export default Dashboard
