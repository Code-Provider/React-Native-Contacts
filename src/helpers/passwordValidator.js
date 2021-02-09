export function passwordValidator(password) {
    if (!password || password.length <= 0) return "Password can't be empty."
    if (password.length < 5) return "Password needs to be at least 6 characters"
    return ''
  }