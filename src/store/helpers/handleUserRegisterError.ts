import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const handleUserRegisterError = (response: FetchBaseQueryError) => {
    const { status, data } = response;
    const errorData = data as { error: string };

  return {
    message: errorData.error,
    status: status || 500,
  };
};
