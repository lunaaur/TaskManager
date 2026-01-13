import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const handleUserRegisterError = (response: FetchBaseQueryError) => {
  const { status, data } = response;

  if (
    status === 409 &&
    typeof data === 'object' &&
    data !== null &&
    'error' in data
  ) {
    const errorData = data as { error: string };
    return {
      message: errorData.error,
      status,
    };
  }

  return {
    message: 'Произошла ошибка при регистрации',
    status: status || 500,
  };
};
