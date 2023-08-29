import { create } from 'zustand';

interface MenuState {
    menuIsOpen: boolean,
    toggleMenu: () => void
}

const useState = create<MenuState>()((set) => ({
    menuIsOpen: false,
    toggleMenu: () => set(state => ({ menuIsOpen: !state.menuIsOpen }))
}));