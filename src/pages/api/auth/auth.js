export async function signIn(method, credentials) {
    // Implementación de la función signIn
    if (method === 'credentials') {
      const { usuario, password } = credentials;
      // Lógica para verificar las credenciales
      if (usuario === 'admin' && password === 'password') {
        return { success: true };
      } else {
        const error = new Error('Invalid credentials');
        error.type = 'CredentialsSignin';
        throw error;
      }
    }
    throw new Error('Unsupported sign-in method');
  }