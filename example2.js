/**
 *
 * Deep Dark License - Type A
 *
 * Copyright `2023` `saroro`, All rights reserved.
 *
 * 1. To use a work including software that the `Deep Dark License` has been applied, retaining the above copyright notice, this list of conditions and the following notice, the contents of the `Deep Dark License` must be distributed together.
 *
 * 2. The copyright holder cannot be held responsible for any problems arising from the use of a work including software that the `Deep Dark License` has been applied.
 *
 * 3. Works including software that the `Deep Dark License` has been applied cannot be used commercially.
 *
 * 4. For works including software that the `Deep Dark License` has been applied, the guidelines set by the copyright holder take precedence over the license and Non-copyright person(s) or equivalents cannot interfere with the guidelines set by the copyright holder.
 */

let Cronjob = require("cronjob").CronJob;
const PARSE_ORDER = ["second", "minute", "hour","date","month", "day"]
Cronjob.setWakeLock(true);
/**
 * 여기에 방 이름
 * @type {string[]}
 */
let rooms = [];
/**
 * @typedef {number[]|"*" } CronString
 */
/**
 *
 * @param {CronString}c
 */
function convertString(c){
    if(c === "*"){
        return c
    }
    return c.join(",");
}

let opt ={
    /**
     * 원하는 초
     * *는 모든 초
     * 0초
     * @type {CronString}
     */
    second : [0],

    /**
     * 원하는 분
     * *는 모든 분
     * 0분
     * @type {CronString}
     */
    minute : [0],
    /**
     * *는 모든 시
     * 원하는 시
     * @type {CronString }
     * 0시
     */
    hour : [0],
    /**
     * *는 모든 일
     * 원하는 일
     * @type {CronString}
     * 모든 일
     */
    date : "*",
    /**
     * *는 모든 월
     * 원하는 월
     * @type {CronString}
     * 모든 월
     */
    month : "*",
    /**
     * *는 모든 요일
     * 원하는 요일
     * @type {CronString}
     * 모든 요일
     * 0부터 시작 0은 일요일
     */
    day : "*",
}
// 0 0 0 * * *
let cronString = "";
for(let i of PARSE_ORDER){
    cronString += convertString(opt[i])+" ";
}
let cron = Cronjob.add(cronString.trim(), ()=>{
    for(let i of rooms){
        Api.replyRoom(i, '딩동 알림왔어요');
    }
})

/**
 * 필수로 넣어줘야 함
 */
function onStartCompile() {
    Cronjob.setWakeLock(false);
    Cronjob.off();
}

