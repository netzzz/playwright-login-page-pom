import { logger } from './logger';

export class Logging {
    public static logError(err: any) {
        logger.error(err);
    }

    public static logInfo(message: string) {
        logger.info(message);
    }
}

