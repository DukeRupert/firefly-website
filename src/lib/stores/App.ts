import { writable, type Writable } from 'svelte/store';

export const isMobileMenu = writable(false);

interface Client {
	first: string;
	last: string;
}

// track client name for success message
export const client: Writable<Client> = writable({ first: '', last: '' });
