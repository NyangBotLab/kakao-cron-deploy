카카오톡 봇 cron job
======================

#### 컴퓨터에서 작업하는걸 추천합니다.

> 놀랄 만큼 쉽고 믿기 힘들 만큼 간단합니다
>
>

__라이센스 요약__

1. 상업적 이용 금지
2. 이 라이센스 그대로 배포

# 초기설정

#### 콘솔에 npm install을 친다.(타입 자동완성 때문에)

```shell
npm install
```

****
크론잡이란???

[한글](https://ko.wikipedia.org/wiki/Cron)

[영어(여기가 더 정확함)](https://en.wikipedia.org/wiki/Cron)

[직접 만들어보기](https://crontab.guru/)

# 예제

```javascript
let cronJob = require("cronjob").CronJob;
cronJob.add("0 0 * * *", function () {
    Log.d("12시입니다");
});
```

정확한 내용은 example.js를 참고하세요

# 패치노트

## 1.2

1.이제 크론잡 문자열을 여러개를 줄 수 있습니다
<pre>*/2 * * * * | */3 * * * * </pre>
이리 하면 2분 혹은 3분마다 반복됩니다.

2.크론잡을 여러개 쓰면 꼬이는 문제 해결

## 1.1.3

1.remainSeconds에 before인자 반영

2.에러처리 세분화

## 1.1.2

1.startDate 인자가 제대로 동작 안하는 현상 수정

2.before인자를 사용할 시 도배되는 현상 수정

## 1.1.1

1. 타입검증 추가

## 1.1.0

1. before인자 추가

## 1.0.0

1. 아 몰랑 배포

# 제작자 및 도움 주신 분

### https://github.com/saroro1 (사로로 본인)

### https://github.com/app6460 (앱)

### https://github.com/naijun0403 (~~토끼귀~~ archethic )

### https://github.com/vientorepublic (도연씌 )

### 그리고 이걸 사용해주는 모든 여러분들....
