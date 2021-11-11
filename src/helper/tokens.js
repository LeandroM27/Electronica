
  export const agregarStorage = (token) => {
    sessionStorage.setItem('token', 'admin');
    sessionStorage.token = token;
  };
  
  export const leerStorage = () => {
    let token = sessionStorage.getItem('token');
    if (token) {
      return { token };
    }
  };