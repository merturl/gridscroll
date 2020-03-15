import apiClient from './apiClient';

export type SigninSignupRequestDto = {
  username: string;
  password: string;
};

export type UserProfile = {
  id: number;
  username: string;
}

export type SigninSignupResponseDto = {
  token: string;
  user: UserProfile;
}

export const signin = async (body: SigninSignupRequestDto) => {
  const response = await apiClient.post<SigninSignupResponseDto>('/api/auth/signin', body);
  return response.data;
}

export const signup = async (body: SigninSignupRequestDto) => {
  const response = await apiClient.post<SigninSignupResponseDto>('/api/auth/signup', body);
  return response.data;
}

export const signout = async () => {
  const response = await apiClient.get('/api/auth/signout');
  return response.data;
}

export const signcheck = async ()=> {
  const response = await apiClient.get('/api/auth/check');
  return response.data;
}
