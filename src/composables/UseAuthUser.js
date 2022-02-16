import { ref } from 'vue'
import { supabase } from '@/supabase.js'

// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user

const user = ref(null)
const isVaild = ref(false)

export default function useAuthUser() {
    /**
     * Login with email and password
     */
    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signIn({ email, password })
        if (error) throw error
        if (user.identities.length) isVaild.value = true
        return user
    }

    /**
     * Logout
     */
    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    /**
     * Check if the user is logged in or not
     */
    const isLoggedIn = () => {
        return !!isVaild.value
    }

    /**
     * Register
     */
    const register = async ({ email, password, ...meta }) => {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        })
        if (error) throw error
        return user
    }

    /**
     * Update user email, password, or meta data
     */
    const update = async ({ email, password }) => {
        const { user, error } = await supabase.auth.update({
            email,
            password,
        })
        if (error) throw error
    }

    /**
     * Send user an email to reset their password
     * (ie. support "Forgot Password?")
     */
    const sendPasswordRestEmail = async (email) => {
        let { data, error } = await supabase.auth.api.resetPasswordForEmail(
            email
        )
    }

    return {
        user,
        login,
        isLoggedIn,
        logout,
        register,
        update,
        sendPasswordRestEmail,
    }
}
