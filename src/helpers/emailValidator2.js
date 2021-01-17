//For the contacts email, can be empty


export function emailValidator2(email) {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return ''
    if (!re.test(email)) return 'Please, enter a valid email address.'
    return ''
  }