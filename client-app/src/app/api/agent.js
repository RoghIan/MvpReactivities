import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Customers = {
  list: () => requests.get("/customer"),
  create: (customer) => requests.post("/customer", customer),
  update: (customer) => requests.put(`/customer/${customer.id}`, customer),
  del: (id) => requests.del(`/customer/${id}`),
};

const Products = {
  list: () => requests.get("/product"),
  create: (product) => requests.post("/product", product),
  update: (product) => requests.put(`/product/${product.id}`, product),
  del: (id) => requests.del(`/product/${id}`),
};

const Stores = {
  list: () => requests.get("/store"),
  create: (store) => requests.post("/store", store),
  update: (store) => requests.put(`/store/${store.id}`, store),
  del: (id) => requests.del(`/store/${id}`),
};

const Sales = {
  list: () => requests.get("/sales"),
  create: (sales) => requests.post("/sales", sales),
  update: (sales) => requests.put(`/sales/${sales.id}`, sales),
  del: (id) => requests.del(`/sales/${id}`),
};

const agent = {
  Customers,
  Products,
  Stores,
  Sales,
};

export default agent;
