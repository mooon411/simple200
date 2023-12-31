# client

```bash
npx create-react-app .
npm install react-router-dom
npm install react-bootstrap bootstrap
npm install axios
npm install http-proxy-middleware
npm install sass
npm install @emotion/css
npm install @emotion/react
npm install @emotion/styled
npm install firebase
npm install react-redux
npm install @reduxjs/toolkit

```

# server

```bash
npm init -y
npm install express --save
npm install nodemon --save
npm install path --save
npm install mongoose --save
npm install multer --save
npm install aws-sdk@2.348.0 --save
npm install multer-s3@2.10.0 --save


```

## ERROR

### 깃허브 화살표

1. .git 파일 제거 `rm -rf .git`
2. 스테이지에 존재하는 파일 제거 `git rm --cached . -rf`
3. 마지막으로 최상단에서 `add, commit, push`로 변경 사항을 반영해주면 폴더의 화살표가 사라져있는 것을 볼 수 있습니다.

### cors 에러

Cross Origin Resource Sharing, 교차 출처 리소스 공유

CORS는 다른 출처의 자원의 공유를 가능하게 만듭니다. 또한, 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 에플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. CORS 에러는 브라우저가 뿜어내는 것입니다. Server↔Server는 CORS 에러가 나지 않습니다.

[CORS 에러 해결하기]("https://www.datoybi.com/http-proxy-middleware/")
