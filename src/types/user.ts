export interface IUserApiResponse {
  user: {
    id: number;
    name: string;
    created_at: Date;
  };
  token: string;
  error?: {
    message?: string;
  };
}

export interface IUserApiBody {
  name: string;
  password: string;
}

export type RegisterUserErrorResponse = {
  data: {
    error: string;
  };
  status: number;
};
