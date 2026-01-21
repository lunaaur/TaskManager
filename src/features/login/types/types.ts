export interface IUserState {
  id: number | null;
  name: string | null;
  isAuthenticated: boolean;
}

export interface IUserInfoState {
  user: {
    id: number;
    name: string;
    created_at: Date;
  }
}