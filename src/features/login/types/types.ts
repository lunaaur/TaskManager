export interface IUserState {
  id: number | null;
  name: string | null;
}

export interface IUserInfoState {
  user: {
    id: number;
    name: string;
    created_at: Date;
  }
}