### 📍자료 모음

[React-django Login.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b06ce5f-f32f-49a4-a368-ef62b5015426/React-django_Login.pdf)

---

### 📍세션 기반 인증 vs 토큰 기반 인증

- HTTP stateless: 서버로 가는 요청이 이전 요청과 독립적으로 다뤄짐
    - 나 이서현이야 → 나 아까 걔니까, 내 폰번호 알려줘! ⇒ 라고 하면, 서버는 모름. 1번 요청과 2번째 요청은 독립적으로 처리되기 때문.
    - 서버는 같은사람인지 인식을 못함.

---

### 📍쿠키&세션

- 위 문제점을 해결하기 위해 필요. (나 이서현이야! 라는 요청을 기억하게 만든다)
- 쿠키: 사용자의 컴퓨터에 저장하는 기록 정보 파일
    - 데이터를 클라이언트 측에 저장 
    ( ↔ 세션은 데이터를 서버측에 저장)
    - 정보가 담겨서 이동하게 해주는 역할 → 정보를 담는 도자기
    - 통신을 하게되면, 자동으로 생성됨
    - 데이터  크기에 제한 O
    - 이름, 값, 만요일, 경로 정보로 구성됨
    - ex. 아이디 비밀번호 자동저장, 팝업창 14일간 안보기(쿠키의 만료일 지정 기능 이용)
    - 데이터를 브라우저에 저장되어 있어 개인정보 유출에 취약
    → 데이터를 서버에 저장하는 방식으로 발전: 세션!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd002139-40ad-40bb-8ee9-3a298812d1b1/Untitled.png)

- 세션: 일정동안 브라우저로 돌아오는 요구를 유지시키는 기술
    - 쿠키와는 다르게, 데이터를 서버 측에 저장
    - session-id: 명찰과 같은 역할
    - ex. 화면이 이동해도 로그인이 안풀림
    - session-id 로 클라이언트 구분
    - session-id 는 쿠키타고 (저장) 다님!!
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e68c7293-7e53-4795-96fa-10a7ee1b4a03/Untitled.png)

- 세션 기반 인증: 서버가 사용자가 로그인 중임을 기억하고 있는 로직
    1. 로그인 하면, 서버는 세션 저장소에 사용자 정보를
    조회, 없으면 세션id 발급
    2. 발급된 id는 브라우저 쿠키에 저장
    3. 클라이언트가 다른 요청 보낼 때마다 서버는
    세션저장소에서 세션id로 조회 후 로그인 여부 결정
- 아니 세션이 더 좋은 거 아님? 왜 쿠키 씀?
    - Session-id 값을 쿠키에 저장
    - 과부하 방지를 위해, 간단한 것들은 쿠키에 저장
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ec3b075-8e5f-4f48-abf2-a33c0d1279e2/Untitled.png)

---

### 📍토큰&토큰 기반 인증

- 토큰: 서버가 만들어주는 문자열
    - in 문자열→ 사용자의 로그인 정보, 해당 정보가 서버에서 발금됐음을 증명하는 서명
    - 명함과 같은 기능이라고 생각하자
    - 토큰을 1개만 쓰면 보안 이슈가 있음 → 2개를 써서 서로의 유효성을 검사함.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80f0f2ed-ed35-43c0-a344-f7e406094db3/Untitled.png)

---

### 📍CORS

- CORS: Cross-origin resource sharing
- cross-origin 발생
    1. 프로토콜: http 와 https는 프로토콜이 다름
    2. 도메인: [domain.com](http://domain.com) 과 other-domain.com은 다름
    3. 포트 번호: 8080 포트와 3000포트는 다름
- Cross-origin하려면 서버와 클라이언트 모두 CORS에러에 대한 처리를 해주어야 함(프론트, 백 모두 에러처리 필요!)
- 참고 링크
    
    [CORS란? CORS를 해결해보자](https://bohyeon-n.github.io/deploy/web/cors.html)
    

---

### 📍웹 스토리지: localStorage vs sessionStorage

- 웹 스토리지
    - key-value 형태
    - 클라이언트에 대한 정보 저장
    - 웹스토리지는 브라우저에만 정보저장
    쿠키는 서버, 로컬에 정보 저장
    - 서버에 불필요하게 정보 저장 x
    - 로컬스토리지, 세션스토리지로 나뉨