import axios from 'axios';

export class StoreRepo {

  static getAllProducts = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://alternova-store-default-rtdb.firebaseio.com/products.json',
      });

      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  static getAllDetails = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://alternova-store-default-rtdb.firebaseio.com/details.json',
      });

      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

}
