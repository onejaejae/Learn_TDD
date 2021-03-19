### 왜 어플리케이션을 TEST 해야할까?

___

<br>

-   간단하게 말하면 여러 방법으로 테스트를 해줘야 더 안정적인 어플리케이션이 될 수 있다.

<br>

### 테스팅으로 얻는 이점은 무엇일까?

___

<br>

1. 디버깅 시간을 단축❗
 만약 데이터가 잘못 나왔다면 그것이 UI의 문제인지 DB의 문제인지 등 전부 테스트를 해봐서 찾아야 하는데 테스팅 환경이 구축되어있다면 자동화된 유닛 테스팅으로 특정 버그를 쉽게 찾아낼 수 있다.

2.  더욱 안정적인 어플리케이션❗ 많은 테스팅 코드와 함께 작성된 코드의 어플리케이션이 되기 때문에 훨씬 안정적인 어플리케이션이 된다.

3. 이 밖에도 재설계 시간의 단축, 추가로 무언가를 더 구현해야 할 때 더 용이하게 할 수 있는 등의 이점들이 있다.

<br>

### 사용할 모듈

___

<br>

-   Express : Node.js의 API를 단순화하고 유용한 기능들은 더 추가 시켜 Node.js를 더 편리하고 유용하게 사용할 수 있게 해주는 모듈

-   Mongoose : MongoDB를 편리하게 사용하게 해주는 노드의 확장 모듈

-   Jest : 단위 테스트를 위한 모듈

-   node-mocks-http : 단위 테스트를 위한 모듈

-   supertest : 통합 테스트를 위한 모듈

<br>

### express.json()

___

<br>

express 버전 4.16.0 부터는 express에 들어 있는 내장 미들웨어 함수로 bodyParser 모듈을 대체해줄 수 있다.

<br>

### 몽구스(mongoose)는 무엇인지?
___

<br>

-   몽고 DB 사용을 위한 다양한 기능을 추가하고 몽고 DB를 더 편리하게 이용하기 위해서 사용하는 모듈!

-   몽구스를 이용해서 데이터를 만들고 관리하기 위해서 먼저 Schema를 만들고 그 Schema로 model을 만든다.

-   몽구스는 몽고 DB를 쓸 때 사용해도 되고 안 사용해도 되는 선택사항이다.


✔ Schema가 무엇인지?

-   Mongoose shema는 문서(Document)의 구조, 기본값, 유효성 검사기 등을 정의한다.

📝 예시 
    
    기본값 ==> default : 0
        
    유효성 검사 ==> required : true
                  

✔ model은 무엇인지?

-   Mongoose 모델은 레코드 생성, 쿼리, 업데이트, 삭제 등을 위한 데이터베이스 인터페이스를 제공한다.

<br>

### 단위 테스트(Unit test)에 대하여

___
<br>

✔ 단위(Unit) 테스트란?

단위 테스트는 개발자가 수행하고 자신이 개발 한 코드 단위 (일명 모듈, 구성 요소)를 테스트한다.
소스 코드의 `개별 단위`를 테스트하여 사용 할 준비가 되었는지 확인 하는 테스트 방법이다. 개발 라이프 사이클의 초기 단계에서 버그가 식별되므로 버그 수정 비용을 줄이는데 도움이 된다. 간단하게 생각하면 메소드를 테스트하는 또 다른 메소드라고 생각하면 된다.

✔ 단위(Unit) 테스트의 조건

1.  독립적이여야 하며, 어떤 테스트도 다른 테스트에 의존하지 않아야 한다.

2.  격리 되어야 한다. Ajax, Axios, LocalStorage 등 테스트 대상이 의존하는 것을 다른 것으로 대체해야 한다.   

✔ 왜 단위(Unit) 테스트를 하는지?

1.  프로그램이 크고, 메모리가 많이 들고, 다른 리소스(데이터베이스 등)이 필요한 경우 로컬 환경에서 쉽게 코드를 실행시켜보기 어렵기 때문이다.
이런 프로그램을 개발하는 개발자들은 유닛테스트를 만들어서 빠르게 자신의 코드가 정상적으로 작동 하는지 확인 할 수 있다.

2.  종속성이 있는 다른 클래스들에서 버그가 나는 것을 방지하기 위해서

<br>

### Jest란 무엇인지?

___

<br>

facebook에서 만든 테스팅 프레임워크이다.
최소한의 설정으로 동작하며 Test Case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해준다.
단위 (Unit) 테스트를 위해서 이용한다.

<br>

✨ Jest 시작하기

1. Jest 라이브러리 설치

2. Test 스크립트 변경

3. 테스트 작성할 폴더 및 파일 기본 구조 생성

<br>

👀 Jest가 Test 파일을 찾는 방법

1. {filename}.test.js

2. {filename}.spec.js

3. All files inside "`tests`" folders

<br>

### Jest 파일 구조 및 사용법

___

<br>

✔ describe 

-   여러 관련 테스트를 `그룹화`하는 블록을 만든다.

✔ it same as test

-   `개별 테스트`를 수행하는 곳. 각 테스트를 작은 문장처럼 설명한다.

✔ expect

-   expect 함수는 값을 테스트할 때마다 사용된다. 그리고 expect 함수 혼자서는 거의 사용 되지 않으며 matcher와 함께 사용된다.

✔ matcher

-   `다른 방법`으로 값을 테스트 하도록 "매처"를 사용한다.

<br>

### jest.fn()
___
<br>

✔ jest.fn() 이란?

Mock 함수를 생성하는 함수이다. mock의 한글 번역을 보면 모의고사 할 때 모의라는 뜻이 있으며, 가짜, 흉내내는 이라는 뜻도 가진다. 이것으로 비추어 볼 때 Mock 함수가 하는 일은 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜로 대체하는 일을 해준다.

📌 참고 자료 

https://www.daleseo.com/jest-mock-modules/

https://stackoverflow.com/questions/45195025/what-is-the-difference-between-tobe-and-toequal-in-jest

<br>

✔ 단위 테스트는 왜 독립적이여야 하는가?

의존적인 부분을 구현하기가 까다로울 경우가 있으며, 의존적인 부분의 상태에 따라서 테스트하고자 하는 부분의 테스트 결과가 영향을 받을 수 있기 때문이다.

<br>

### node-mocks-http
---
<br>

🤷‍♂️ 원래 몽구스 모델을 이용해서 데이터를 저장할 때는 Product.create(req.body)와 같이 req 객체를 이용해서 요청에 함께 들어온 body를 create method에 인자로 넣어 데이터베이스에 저장한다.

그래서 단위 테스트에서도 req 객체가 필요하다.
`그러면 어떻게 이 req 객체를 단위 테스트에서 사용할까?`

<br>

✔ node-mocks-http 모듈 이용❕❕❕

<br>

### beforeEach

___


<br>

✔ 여러개의 테스트에 공통된 Code가 있다면 beforeEach 안에 넣어서 반복을 줄여줄 수 있다.  

<br>

### postman
___

<br>

Postman은 개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼이다.
현재 API에 요청을 전달하는 클라이언트가 없기 때문에 포스트맨을 사용해서 요청을 임의로 전달하자.

<br>

### 에러 처리를 위한 단위 테스트 작성
___
<br>

```js
  it("should handle errors", async () => {
    const errorMessage = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.create.mockReturnValue(rejectedPromise);
    await createProduct(req, res, next);
    expect(next).tobeCalledWith(errorMessage);
  });
```

<br>


```js
it("should handle errors", async () => {
    const errorMessage = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.create.mockReturnValue(rejectedPromise);
```
<br>

✔ 몽고 디비에서 처리하는 부분은 문제가 없다는 것을 가정하는 단위 테스트이기 때문에 원래 몽고 디비에서 처리하는 에러 메시지 부분은 Mock 함수를 이용해서 처리하는 부분이다.

<br>

```js
 const rejectedPromise = Promise.reject(errorMessage);
```

<br>

✔ 비동기 요청에 대한 결과값은 성공할 때는 Promise.resolve(value) 에러일 때는 Promise.reject(reason)

✔ 비동기 요청 (Async Request)

-   성공

    - resolve 메소드 실행 -> resolve 메소드 인자 값은 then 메소드를 통해서 처리 가능

-   에러

    -   reject 메소드 실행 reject(reason)

<br>

### 통합 테스트(Integration Test)

___

<br>

🤷‍♀️ 통합 테스트란?

<br>

통합 테스트는 모듈을 통합하는 단계에서 수행하는 테스트이다. 단위 테스트를 먼저 수행하여 모듈들이 잘 작동되는 것을 확인했다면 이제 이 모듈들을 연동해서 테스트를 수행한다. 이렇게 연동해서 테스트하는 것이 통합테스트이다.

<br>

🙋‍♀️ 통합 테스트를 하는 이유?

<br>

1.  모듈들의 상호작용이 잘 이루어지는지 검증하기 위해서

2.  통합하는 과정에서 발생할 수 있는 오류를 찾기 위해서

<br>

🤷‍♂️ Supertest란 무엇인가?

<br>

nodejs http 서버를 테스트하기 위해 만들어진 모듈이다.
supertest 모듈을 이용해서 통합 테스트를 쉽게 구현할 수 있다.

<br>

✔ toBeDefined

- 변수가 undefined가 아닌지 체크한다.

✔ toBeTruthy

- value 값이 무엇인지보다 value가 True인지 아닌지를 확인한다.
