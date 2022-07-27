// Single responsibility principle - Принцип единственной ответственности
// Один класс (функий, компонент, метод) должен(а) решать только одну задачу

// Класс отвечает за http-методы
class HttpClient {
  get(){}
  post(){}
  update(){}
  delete(){}
}

// Класс отвечает за обработку данных
class DataFetcher {
  client: HttpClient
  constructor(client) {
    this.client = client;
  }

  getClient() {
    return this.client.get();
  }

  postClient() {
    return this.client.post();
  }

  updateClient() {
    return this.client.update();
  }

  deleteClient() {
    return this.client.delete();
  }
}