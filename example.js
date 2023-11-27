/**
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
//도즈 모드 키기
Cronjob.setWakeLock(true);
//초기화 처음 실행할 땐 필요 없음
//Cronjob.on()
// 매 0시 마다 실행
// cronjob 자세한 내용은 https://crontab.guru/ 여기 참고
let cronJob = Cronjob.add("0 0 * * *", function () {
    Log.d("딩동 12시")
});
//크론잡 아이디
let cronId = cronJob.id;
//크론잡 끄기
// cronJob.stop()
// Cronjob.remove(cronId);
//크론 문자열
cronJob.cronString
//다음 실행될 날짜 실행 날짜가 없으면 null
cronJob.nextExecutedDate;
//현재 남은 시간 실행 불가능이면 -1
cronJob.remainSeconds;
// 매주 월 0시에 실행 start end date 지정 가능
// 아래는 효과가 없음
let secondCronjob = Cronjob.add("@weekly", function () {
}, {
    startDate: new Date(),
    endDate: new Date()
})

/**
 * 한시간 마다 실행 0 * * * * 랑 같음
 * before 10을 주면 10ms 이전에 작동함
 */
let thirdJob = Cronjob.add("@hourly", function () {
}, {
    before: 10,
})

/**
 * 컴파일시 초기화 필수
 */
function onStartCompile() {
    Cronjob.setWakeLock(false);
    Cronjob.off();
}






