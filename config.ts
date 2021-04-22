import { TypeSystemConfig } from './types/config';

/**
 * Global system settings, like timezone or server port.
 */
export const systemConfig: TypeSystemConfig = {
	serverPort: 3333, // Port where your RootyJS server will run on.
	timezone: 'Europe/Berlin', // Set the server timezone (E.g. Europe/Berlin).
};
