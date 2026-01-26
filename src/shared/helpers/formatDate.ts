import { format } from 'date-fns';
export enum FormatEnum {
  DATEMONTH = 'date-month',
  FULL = 'full',
}

type FormatDateProps = {
  date: Date;
  dateFormat: FormatEnum;
};

export const handleDateFormation = ({
  date,
  dateFormat,
}: FormatDateProps): string | null => {
  if (date) {
    switch (dateFormat) {
      case 'date-month':
        return format(new Date(date), 'dd.MM');
      default:
        return format(new Date(date), 'dd.MM.yyyy');
    }
  }
  return null;
};
