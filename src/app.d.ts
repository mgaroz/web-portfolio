// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
<<<<<<< HEAD
		// interface Platform {}
=======
		// interface PageState {}
		interface Platform {
			context: {
				waitUntil(promise: Promise<any>): void;
			};
		}
>>>>>>> cf-mailchannels
	}
}

export {};
