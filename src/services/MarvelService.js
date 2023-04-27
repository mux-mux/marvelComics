class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = '01f2e2e123368220041720582fe584a4';
  getResource = async (url) => {
    const res = await fetch(url);
    //fetch only OK when status 200-299
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`);
  };

  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
  };
}

export default MarvelService;
