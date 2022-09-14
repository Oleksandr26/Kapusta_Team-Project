import s from './Calendar.module.css';
import DatePicker from 'react-datepicker';
import { ReactComponent as NewCalendar } from 'assets/svg/calendar.svg';

import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ date, setDate }) => {
  console.log('date: ', date);
  return (
    <div className={s.container}>
      <NewCalendar className={s.icon} />
      <DatePicker
        className={s.calendar}
        selected={date}
        onChange={date => setDate(date)}
      />
    </div>
  );
};

export default Calendar;