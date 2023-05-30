npm init

npm install --save-dev typescript

// tsconfig.json 파일을 열고, "allowJs" 옵션을 true로 설정 후 아래 커맨드 진행
// TypeScript 설정 파일(tsconfig.json)을 확인하여 해당 파일이 프로젝트 디렉토리에 있는지 확인하세요. 설정 파일이 없다면, TypeScript 프로젝트로 초기화 "npx tsc --init"

npx tsc .\index.ts // index.js 생성(변환)

npm install --save-dev ts-node

npx ts-node .\index.ts // 파일 안의 결과 실행
<=> node index.ts