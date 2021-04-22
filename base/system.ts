/**
 * Global system settings, like timezone or server port.
 */
import { TypeSystemSettings } from '../types/system';

export const systemSettings: TypeSystemSettings = {
	serverPort: 3333, // Port where your RootyJS server will run on.
	timezone: 'Europe/Berlin', // Set the server timezone (E.g. Europe/Berlin).
};
