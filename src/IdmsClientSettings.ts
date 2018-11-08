
export class IdmsClientSettings {
    
    constructor({
        authority = '',
        clientId = '',
        redirectUri = '',
        logoutRedirectUri = '',
        silentRefreshRedirectUri = ''
    } = {}) {
        this._authority = authority;
        this._clientId = clientId;
        this._redirectUri = redirectUri;
        this._logoutRedirectUri = logoutRedirectUri;
        this._silentRefreshRedirectUri = silentRefreshRedirectUri;
        this._responseType = 'id_token token'
        this._scope = 'openid profile api1';
        this._automaticSilentRenew = true;
        this._logger = console;
    }
    
    private _authority : string;
    public get authority() : string {
        return this._authority;
    }
    public set authority(v : string) {
        this._authority = v;
    }
    
    private _clientId : string;
    public get clientId() : string {
        return this._clientId;
    }
    public set clientId(v : string) {
        this._clientId = v;
    }
    
    private _redirectUri : string;
    public get redirectUri() : string {
        return this._redirectUri;
    }
    public set redirectUri(v : string) {
        this._redirectUri = v;
    }
    
    private _logoutRedirectUri : string;
    public get logoutRedirectUri() : string {
        return this._logoutRedirectUri;
    }
    public set logoutRedirectUri(v : string) {
        this._logoutRedirectUri = v;
    }
    
    private _silentRefreshRedirectUri : string;
    public get silentRefreshRedirectUri() : string {
        return this._silentRefreshRedirectUri;
    }
    public set silentRefreshRedirectUri(v : string) {
        this._silentRefreshRedirectUri = v;
    }

    private _responseType : string;
    public get responseType() : string {
        return this._responseType;
    }
    public set responseType(v : string) {
        this._responseType = v;
    }
    
    private _scope : string;
    public get scope() : string {
        return this._scope;
    }
    public set scope(v : string) {
        this._scope = v;
    }
    
    private _automaticSilentRenew : boolean;
    public get automaticSilentRenew() : boolean {
        return this._automaticSilentRenew;
    }
    public set automaticSilentRenew(v : boolean) {
        this._automaticSilentRenew = v;
    }

    private _logger : any;
    public get logger() : any {
        return this._logger;
    }
    public set logger(v : any) {
        this._logger = v;
    }
}