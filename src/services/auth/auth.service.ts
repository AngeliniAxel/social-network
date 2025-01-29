import { LoginResponseType } from '@/app/types/auth.types';
import { httpPostPublic } from '../common/http.service';

class AuthApi {
  login = async (username: string, password: string): Promise<LoginResponseType> =>
    httpPostPublic(`/auth/login`, { username: username, password: password });
}

const authApi = new AuthApi();
export default authApi;
