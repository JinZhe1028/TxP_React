import { crudSaga } from 'redux-crud-store';
import client from '../utils/ApiClient';

export default crudSaga(client);
