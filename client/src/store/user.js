import { makeAutoObservable } from 'mobx';
import { setCookie } from '../utils/cookies';
import { checkAPI, loginAPI } from '../api/user';

class User {
    isAuth = false;
    constructor() {
        makeAutoObservable(this)
    }

    checkAuth() {
        checkAPI().then(
            (resp) => {
                setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, resp.token);
                this.setIsAuth(true);
            }
        ).catch(
            (resp) => {
                console.log(resp)
            }
        );
    }
    
    login(login, password) {
        loginAPI(login, password).then(
            (resp) => {
                setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, resp.token);
                this.setIsAuth(true);
            }
        )
    }

    setIsAuth(value) {
        this.isAuth = value;
    }

    get watchIsAuth() {
        return this.isAuth
    }
}

export default new User();