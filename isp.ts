// interface segregation principle - Принцип разделения интерфеса
// Нельзя заставлять клиента реализовывать интерфейс, которым он не пользуется

const createStore = (initial: any) => {}
const initialData = () => {}

// Маршруты
enum Route {
  ABOUT='about_page',
  HOME='home_page',
}

// Роутер
interface Router {
  parseUrl: (url) => void;
  addQueryParams: (params: Record<string, string>) => void;
}

// Интерфейс для работы на клиенте
interface IClientRouter extends Router {
  navigate: (route: Route) => void;
  attachEventListeners: () => void;
}

// Интерфейс для работы на сервере
interface IServerRouter extends Router {
  prepareUrlForClient: (url: string) => void;
}

// Серверный роутинг
class ServerRouter implements IServerRouter {
  parseUrl(url): void {}
  addQueryParams(params: Record<string, string>): void {}
  prepareUrlForClient(url: string): void {}
}

// Клиентский роутинг
class ClientRouter implements IClientRouter {
  addQueryParams(params: Record<string, string>): void {}
  parseUrl(url): void {}
  attachEventListeners(): void {}
  navigate(route: Route): void {}
}

// Контейнер зависимостей
const createDependencyContainer = (router: Router, store) => {
  return {
    getRouter: () => router,
    getStore: () => store,
  }
}

const renderHtmlPage = (store: any, url: any) => {}

// Клиент
const client = () => {
  const store = createStore(initialData);
  const router = new ClientRouter();

  const di = createDependencyContainer(router, store);
}

// Сервер
const server = (req, res) => {
  const store = createStore(initialData);
  const router = new ServerRouter();

  const di = createDependencyContainer(router, store);

  const htmlPage = renderHtmlPage(store, req.url)
}
