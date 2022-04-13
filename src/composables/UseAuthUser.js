import { supabase } from '@/supabase.js'
import { store } from '@/store'

export default function useAuthUser() {
  /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    if (user.identities.length) store.user = supabase.auth.user()
  }
  /**
   * Logout
   */
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
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
    if (user.identities.length) store.user = supabase.auth.user()
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
    let { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
  }
  return {
    login,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  }
}
