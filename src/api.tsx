class MoviesApi{
  private _baseUrl: string;
  private _headers: HeadersInit;


  constructor({baseUrl, headers}: {baseUrl:string; headers: HeadersInit}) {
    this._baseUrl= baseUrl;
    this._headers = headers;
  }

  _check(res: Response) {
    if(res.ok) {
      return res.json();
    }else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    const request = this._baseUrl
    return fetch(request, {
      method: "GET",
      headers: this._headers
    }).then((res) => this._check(res))
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://musicbrainz.org/ws/2/area/45f07934-675a-46d6-a577-6f8637a411b1?inc=aliases',
  headers: {
    'Content-Type': 'application/json'
  }
});
