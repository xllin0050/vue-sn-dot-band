import { supabase } from '@/supabase.js'
import { storeUserAuth } from '@/stores/user'
const store = storeUserAuth()

export default function useAuthUser() {
  /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {
    await supabase.auth.signIn({ email, password }).then((data) => {
      const { user, error } = data
      if (error) throw error
      if (user) {
        store.$patch((state) => {
          state.user = supabase.auth.user().aud
        })
      }
    })
  }
  /**
   * Logout
   */
  // const logout = async () => {
  //   const { error } = await supabase.auth.signOut()
  //   if (error) throw error
  // }
  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {
    await supabase.auth
      .signUp({
        email,
        password,
      })
      .then((data) => {
        const { user, error } = data
        if (error) throw error
        if (user) {
          store.$patch((state) => {
            state.user = supabase.auth.user().aud
          })
        }
      })
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
    register,
    update,
    sendPasswordRestEmail,
  }
}
