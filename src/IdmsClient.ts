import { UserManager, User } from 'oidc-client'
import { UserManagerSettings } from 'oidc-client'
import { IdmsClientSettings } from './IdmsClientSettings';
import { IdmsUser } from './IdmsUser';

export class IdmsClient{
    private _userManager: UserManager;

    constructor(clientSettings?: IdmsClientSettings) {
        if(clientSettings){
        let userMangerSettings: UserManagerSettings = {
            authority: clientSettings.authority,
            client_id: clientSettings.clientId,
            redirect_uri: clientSettings.redirectUri,
            silent_redirect_uri: clientSettings.silentRefreshRedirectUri,
            post_logout_redirect_uri: clientSettings.logoutRedirectUri,
            response_type: clientSettings.responseType,
            scope: clientSettings.scope
          };
        this._userManager = new UserManager(userMangerSettings);
        }
        else{
            this._userManager = new UserManager({});
        }
    }
    
    public login() : Promise<void>{
        return this._userManager.signinRedirect();
    }

    public logout(): Promise<void>{
        return this._userManager.signoutRedirect();
    }

    public  getUser(): Promise<IdmsUser> {
        return this._userManager.getUser().then(function(user){
            var idmsUser = new IdmsUser()
            idmsUser.accessToken = user.access_token;
            return idmsUser;
        });
    }

    public signinRedirectCallback(): Promise<IdmsUser> {
        return this._userManager.signinRedirectCallback().then(function(user){
            var idmsUser = new IdmsUser()
            idmsUser.accessToken = user.access_token;
            return idmsUser;
        });
    }

    public signinPopupCallback(): Promise<IdmsUser>{
        return this._userManager.signinPopupCallback().then(function(user){
            var idmsUser = new IdmsUser()
            idmsUser.accessToken = user.access_token;
            return idmsUser;
        });
    }

    public signinSilentCallback(): Promise<any> {
        return this._userManager.signinSilentCallback();
    }
}