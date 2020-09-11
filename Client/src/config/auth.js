import store from 'react-native-simple-store';

export const JWT_TOKEN_KEY = 'JWT_TOKEN_KEY';
// export const BASE_URL = 'https://api.navozyme.com';

class Auth {
    async storeToken(token) {
      return await store.save(JWT_TOKEN_KEY, {
        token
      });
    }
  
    async clearSession() {
      await store.delete(JWT_TOKEN_KEY);
    }
  
    async getToken() {
      const token = await store.get(JWT_TOKEN_KEY);
      return token.token;
    }
  
    async getHeaders() {
      const token = await this.getToken();
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };
    }
  
    async getAccessToken() {
      const token = await this.getToken();
      return {
        Authorization: `Bearer ${token}`
      };
    }
  
    getContentType() {
      return { name: 'Content-Type', value: 'application/json' };
    }
  
    // getMarinaHeaders() {
    //   return {
    //     'X-MISMO-Token': '64d034305f15860463a4474b9f0b884c',
    //     'X-MISMO-Code': 'NAVYZOME'
    //   };
    // }
  }
  
  export const auth = new Auth();
  