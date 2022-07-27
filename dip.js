// dependency inversion principle - Принцип инверсии (перестановки) зависимостей
// Модуль более высокого уровня не должны зависеть от модулей более низкого уровня

// Методл для получения треков
interface MusicApi {
    getTracks: () => void;
}

// Яндекс музыка
class YandexMusicApi implements MusicApi {
    getTracks(): void {}
}

// Spotify музыка
class SpotifyApi implements MusicApi {
    getTracks(): void {}
}

// Вк музыка
class VKMusicApi implements MusicApi {
    getTracks(): void {}
}

// Абстрактный класс для получения треков
class MusicClient implements MusicApi {
    client: MusicApi;

    // Яндекс, Spotify, Вк и т.д.
    constructor(client: MusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    }
}

const MusicApp = () => {
    const API = new MusicClient(new SpotifyApi())

    API.getTracks()
}