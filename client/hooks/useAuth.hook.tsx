import {AuthContext } from '@/contexts/auth.context'
import { useContext } from 'react'

const useAuth = () => {
    if (!AuthContext) {
        console.log('useAuth must be used inside auth provider')
    }
    const data = useContext(AuthContext)
    return { ...data }
}

export default useAuth