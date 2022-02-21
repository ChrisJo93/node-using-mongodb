import { addnewProduct } from '../controllers/controllers';
import { getProducts } from '../controllers/controllers';

const routes = (app) => {
  app.route('/products').post(addnewProduct);
  app.route('/products').get(getProducts);
};

export default routes;
