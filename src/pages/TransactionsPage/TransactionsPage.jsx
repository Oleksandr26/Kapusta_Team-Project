import s from './TransactionsPage.module.css';
import { ReactComponent as BarChart } from 'assets/svg/bar_chart.svg';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from 'redux/transaction/transactionOperations';

import Balance from 'components/Balance/Balance';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateBalance } from '../../redux/auth/auth-slice';
import { ExpensesAndIncome } from 'components/Dashboard/ExpensesAndIncome/ExpensesAndIncome';

const HomePage = () => {
  const { pathname } = useLocation();
  const vision = window.innerWidth > 767 || pathname === '/transactions';
  const dispatch = useDispatch();
  const [addExpenseResult] = useAddExpenseMutation();
  const [addIncomeResult] = useAddIncomeMutation();
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    if (addIncomeResult.isSuccess) {
      dispatch(updateBalance(addIncomeResult.data));
    }
  }, [dispatch, addIncomeResult]);

  useEffect(() => {
    if (addExpenseResult.isSuccess) {
      dispatch(updateBalance(addExpenseResult.data));
    }
  }, [dispatch, addExpenseResult]);

  return (
    <main className={s.meta}>
      <div className={s.container}></div>
      <div className={s.main}>
        {vision && (
          <div className={s.wrap}>
            <Link className={s.reportsBtn} to="/reports">
              <span className={s.reports}>Reports</span>
              <BarChart className={s.icon} />
            </Link>
            <Balance dateTransactions={date} />
          </div>
        )}
        <Dashboard />
        <Routes>
          <Route
            path="expenses"
            element={<ExpensesAndIncome date={date} setDate={setDate} />}
          />
          <Route
            path="incomes"
            element={<ExpensesAndIncome date={date} setDate={setDate} />}
          />
        </Routes>
      </div>
    </main>
  );
};

export default HomePage;
