export class IdmsUser{
    
    private _accessToken : string;
    public get accessToken() : string {
        return this._accessToken;
    }
    public set accessToken(v : string) {
        this._accessToken = v;
    }
}