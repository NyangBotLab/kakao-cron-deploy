import { CronJobFactor } from "./lib/cron-job-factor";
import type { CronOpt } from './lib/type';
type myFun = (uuid: string) => void;
export declare namespace CronJob {
    /**
     *
     * cronjob을 실행합니다
     *
     * [반복 시간 만드는 법](https://crontab.guru/)
     * @param {string} cronJobString
     * @param fun
     * @param opt
     * @return string
     */
    function add(cronJobString: string, fun: myFun, opt?: CronOpt): CronJobFactor;
    /**
     * 특정 cronjob을 없엡니다.
     * @param uuid
     */
    function remove(uuid: string): boolean;
    /**
     * 모든 cronjob을 없엡니다.
     */
    function removeAll(): boolean;
    /**
     * 모든 cronjob없에고 스레드풀을 없엡니다.
     */
    function off(): void;
    /**
     * off한 스레드풀을 다시 생성합니다.
     */
    function on(): void;
    /**
     * 도즈 모드를 키거나 끕니다.
     * @param {boolean} setWakeLock ture면 키고 false면 끄기
     */
    function setWakeLock(setWakeLock: boolean): void;
}
export {};
