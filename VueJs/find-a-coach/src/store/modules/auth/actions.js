async function authenticate(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    })
  });

  const responseData = await response.json();

  if (!response.ok) {
    console.log(responseData);
    const error = new Error(responseData.message || "Failed to authenticate. Check your credentials");
    throw error;
  }

  console.log(responseData);
  return responseData;
}

export default {
  async login(context, payload) {
    const responseData = await authenticate(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY}`, payload);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },

  async signup(context, payload) {
    const responseData = await authenticate(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_API_KEY}`, payload);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  }
};


// export default {
//   async login() {
//     const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY}`, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: payload.email,
//         password: payload.password,
//         returnSecureToken: true,
//       })
//     });

//     const responseData = await response.json();

//     if (!response.ok) {
//       console.log(responseData);
//       const error = new Error(responseData.message || "Failed to authenticate. Check your login details");
//       throw error;
//     }

//     console.log(responseData);
//     context.commit('setUser', {
//       token: responseData.idToken,
//       userId: responseData.localId,
//       tokenExpiration: responseData.expiresIn
//     })
//   },

//   async signup(context, payload) {
//     const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_API_KEY}`, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: payload.email,
//         password: payload.password,
//         returnSecureToken: true,
//       })
//     });

//     const responseData = await response.json();

//     if (!response.ok) {
//       console.log(responseData);
//       const error = new Error(responseData.message || "Failed to authenticate. Check your login details");
//       throw error;
//     }

//     console.log(responseData);
//     context.commit('setUser', {
//       token: responseData.idToken,
//       userId: responseData.localId,
//       tokenExpiration: responseData.expiresIn
//     })
//   }
// };