import { create } from 'zustand';
import api from '../api';

const useStore = create((set, get) => ({
  // User state
  user: null,
  isLoading: true,
  balance: 0,
  transactions: [],

  // Actions
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setBalance: (balance) => set({ balance }),
  setTransactions: (transactions) => set({ transactions }),

  // Selectors
  getRecentTransactions: (limit = 5) => {
    const { transactions } = get();
    return transactions.slice(0, limit);
  },

  getFormattedBalance: () => {
    const { balance } = get();
    // Convert to number and check if it has decimals
    const num = Number(balance);
    // Format with commas and handle decimals
    const formatted = num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return formatted;
  },

  // Async actions
  fetchUser: async () => {
    try {
      set({ isLoading: true });
      const response = await api.get('/users/me');
      const userData = response.data;
      set({
        user: userData,
        balance: userData.account?.savings_account || 0,
        isLoading: false,
      });
      return userData;
    } catch (error) {
      console.error('Error fetching user:', error);
      set({ isLoading: false });
      return null;
    }
  },

  fetchTransactions: async () => {
    try {
      set({ isLoading: true });
      const response = await api.get('/transactions');
      set({
        transactions: response.data,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      set({
        transactions: [],
        isLoading: false,
      });
      return [];
    }
  },

  updateBalance: async (accountId, amount) => {
    try {
      set({ isLoading: true });
      const response = await api.put(`/accounts/${accountId}`, { amount });
      const newBalance =
        response.data?.account?.savings_account ||
        response.data?.savings_account ||
        0;
      set({
        balance: newBalance,
        isLoading: false,
      });
      return newBalance;
    } catch (error) {
      console.error('Error updating balance:', error);
      set({ isLoading: false });
      throw error;
    }
  },

  createTransaction: async (transactionData) => {
    try {
      set({ isLoading: true });
      const response = await api.post('/transactions', transactionData);
      const newTransaction = response.data.transaction || response.data;
      set((state) => ({
        transactions: [newTransaction, ...state.transactions],
        isLoading: false,
      }));
      return newTransaction;
    } catch (error) {
      console.error('Error creating transaction:', error);
      set({ isLoading: false });
      throw error;
    }
  },

  // Initialize app data
  initializeApp: async () => {
    const { fetchUser, fetchTransactions } = get();
    await fetchUser();
    await fetchTransactions();
  },
}));

export default useStore;
