import { addnewProduct } from '../controllers/controllers';

const routes = (app) => {
  app.route('/products');
  app.post(addnewProduct);
};

export default routes;
