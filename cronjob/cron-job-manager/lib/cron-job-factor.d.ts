import type { CronOpt } from "./type";
export declare class CronJobFactor {
    private readonly uuid;
    private readonly _cronJobString;
    private readonly _opt;
    constructor(uuid: string, _cronJobString: string, _opt?: CronOpt);
    /**
     * 현재 cronjob을 멈춥니다.
     */
    stop(): void;
    /**
     * cronjob에 할당한 아이디를 가져옵니다.
     */
    get id(): string;
    /**
     * cron 문자열을 가져옵니다.
     */
    get cronString(): string;
    /**
     * 다음 실행될 날짜를 가져옵니다.
     *
     * null이면 없음
     */
    get nextExecutedDate(): Date | null;
    /**
     * 다음 실행까지 다음 초
     *
     * -1이면 실행 안됨
     */
    get remainSeconds(): number;
}
