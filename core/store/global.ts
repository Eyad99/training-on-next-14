import { User_Res } from '../models/page';
import { create } from 'zustand';

interface GlobalStore {
	users?: User_Res;
	setUsers: (users: User_Res) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
	usres: [],
	setUsers: (users) => set({ users }),
}));
