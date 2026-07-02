/* =========================================================================
   시스템 프로그래밍 — 지필평가 형광펜 마킹 데이터
   - SUBJECTS : 마킹된 원문(요약 없이 그대로) + 상하관계(대단원→절→상위개념)
   - QUIZ     : 마킹 내용 기반 시험 문제
   출처: 3개 PDF의 형광펜 마킹 페이지에서 추출
     · 응용SW 기초 기술 활용 (p.16,18~23,117)
     · 개발자 환경 구축 (p.16~18,24,33,35,47,64,65,67,69)
     · SQL활용 (p.15,21~24,27~30,33,38,39,57~59)

   item 종류
     {k:"ctx",  lvl, text}            마킹 안 된 상위 제목(구조 맥락)
     {k:"head", lvl, text, c?}        마킹된 소제목
     {k:"para", lvl, text, c?}        마킹된 문단  (c:"g"=초록 밑줄 / [[ ]]=구간 초록)
     {k:"def",  lvl, term, desc, c?}  마킹된 용어:설명
   c:"g" → 초록 형광펜(초록 밑줄), 없으면 노란 형광펜
   ========================================================================= */

const SUBJECTS = [
{
  id:"gicho", title:"응용SW 기초 기술 활용", badge:"기초",
  pages:[
    { page:16, title:"프로토콜의 개념", path:["학습 1. 네트워크 기초 활용하기","1-1. 네트워크 프로토콜 활용","1. 프로토콜(protocol)"], items:[
      { k:"ctx",  lvl:0, text:"1. 프로토콜(protocol)" },
      { k:"head", lvl:1, text:"(1) 프로토콜의 개념" },
      { k:"para", lvl:2, text:"네트워크 프로토콜은 통신을 통제하는 규칙들을 모아 놓은 것으로, 무엇을 통신할 것이며, 어떻게 그리고 언제 통신할지를 정의한다." }
    ]},
    { page:18, title:"OSI 7계층의 개념", path:["1-1. 네트워크 프로토콜 활용","2. OSI 7계층(Open System Interconnection 7 Layer)"], items:[
      { k:"ctx",  lvl:0, text:"2. OSI 7계층(Open System Interconnection 7 Layer)" },
      { k:"head", lvl:1, text:"(1) OSI 7계층의 개념" },
      { k:"para", lvl:2, text:"OSI 7계층 모델은 국제표준화기구(ISO: International Organization for Standardization)에서 개발한 네트워크 모델로 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다. OSI 7계층은 네트워크의 이론적인 모델이며, 상용화된 것은 TCP/IP 모델이다." },
      { k:"def",  lvl:2, term:"OSI 7계층", desc:"응용(Application) · 표현(Presentation) · 세션(Session) · 전송(Transport) · 네트워크(Network) · 데이터링크(Data Link) · 물리(Physical)" }
    ]},
    { page:19, title:"OSI 7계층별 특징 · 응용계층 프로토콜", path:["2. OSI 7계층","(2) 계층별 특징 / (3) 주요 계층의 동작 방식"], items:[
      { k:"ctx",  lvl:0, text:"OSI 7계층 모델의 계층별 역할 (초록: 각 계층의 역할)" },
      { k:"def",  lvl:1, term:"7. Application Layer", desc:"서비스 제공 · 사용자 입출력 정의 · 응용 프로세스 관리", c:"g" },
      { k:"def",  lvl:1, term:"6. Presentation Layer", desc:"인코딩, 암호화, 압축, 코드 변환", c:"g" },
      { k:"def",  lvl:1, term:"5. Session Layer", desc:"연결 관리 · 통신 오류 복구 및 재전송", c:"g" },
      { k:"def",  lvl:1, term:"4. Transport Layer", desc:"세그먼트 구성 · 포트 지정 · 혼잡제어, 흐름제어 · 오류제어", c:"g" },
      { k:"def",  lvl:1, term:"3. Network Layer", desc:"패킷 구성 · 논리 주소(IP) 지정", c:"g" },
      { k:"def",  lvl:1, term:"2. Data Link Layer", desc:"프레임 구성 · 물리 주소(MAC) 지정", c:"g" },
      { k:"def",  lvl:1, term:"1. Physical Layer", desc:"비트 · 물리적 연결", c:"g" },
      { k:"ctx",  lvl:0, text:"(3) 주요 계층의 동작 방식 — (가) 응용계층 프로토콜" },
      { k:"def",  lvl:1, term:"HTTP", desc:"Hypertext Transfer Protocol — 웹 브라우저와 웹 서버 간의 통신에 사용되는 프로토콜" },
      { k:"def",  lvl:1, term:"HTTPS", desc:"HTTP에 TLS/SSL 암호화를 사용하여 보안 프로토콜로 확장" },
      { k:"def",  lvl:1, term:"SSH", desc:"서버에 원격 접속 또는 파일을 전송하기 위한 프로토콜" },
      { k:"def",  lvl:1, term:"FTP", desc:"File Transfer Protocol — 서버에 파일을 주고받기 위한 프로토콜" }
    ]},
    { page:20, title:"전송계층 프로토콜", path:["2. OSI 7계층","(3) 주요 계층의 동작 방식","(나) 전송계층"], items:[
      { k:"ctx",  lvl:0, text:"(나) 전송계층 프로토콜" },
      { k:"def",  lvl:1, term:"DHCP", desc:"Dynamic Host Configuration Protocol — IP주소를 포함한 네트워크 정보를 동적으로 할당받기 위한 프로토콜", c:"g" },
      { k:"def",  lvl:1, term:"SMTP", desc:"Simple Mail Transfer Protocol — 이메일을 전송하기 위한 표준 프로토콜", c:"g" },
      { k:"def",  lvl:1, term:"POP3", desc:"Post Office Protocol version 3 — 메일 서버에서 메일을 수신하기 위한 프로토콜(한 컴퓨터에서 수신하면 다른 컴퓨터에서 확인 불가)", c:"g" },
      { k:"def",  lvl:1, term:"IMAP", desc:"Internet Message Access Protocol — POP3와 달리 메일을 서버에서 관리하고 여러 단말기와 동기화하여 확인 가능" }
    ]},
    { page:21, title:"TCP / UDP 특징", path:["2. OSI 7계층","(3) 주요 계층의 동작 방식","전송계층 TCP/UDP"], items:[
      { k:"def", lvl:0, term:"TCP", desc:"통신 전 송수신지 간 연결 확립을 위해 3-way handshake 진행 · 신뢰성 있는 통신 지원 · 수신 확인 요구 · 헤더 20Byte · 송수신지 간 수신 확인 신호를 주고받음(Acknowledgment 필드) · 오류/손실 데이터 재전송 요청" },
      { k:"def", lvl:0, term:"UDP", desc:"3-way handshake 없음 · 신뢰성보다 지연에 민감 · 헤더 8Byte · 수신 확인 과정 없음 · 오류제어 및 손실 데이터 처리 없음" },
      { k:"ctx", lvl:0, text:"(다) 인터넷 계층(네트워크 계층)" },
      { k:"para", lvl:1, text:"인터넷 계층은 IP(Internet Protocol)가 대표적인 프로토콜이다. 인터넷 계층에서는 최종 목적지까지 전달될 패킷(Packet)이라는 데이터 단위를 생성한다." }
    ]},
    { page:22, title:"네트워크 접근 계층(데이터링크 계층)", path:["2. OSI 7계층","(3) 주요 계층의 동작 방식","(라) 네트워크 접근 계층"], items:[
      { k:"head", lvl:0, text:"(라) 네트워크 접근 계층(데이터링크 계층)" },
      { k:"para", lvl:1, text:"네트워크 접근 계층은 컴퓨터나 장비와 연결된 물리적인 속성이 유선(UTP, 동축케이블, 광케이블 등) 또는 무선(WI-FI 등) 상황에 구애받지 않고 패킷을 온전히 목적지까지 전달해 주는 역할을 한다." }
    ]},
    { page:23, title:"PDU · 캡슐화", path:["2. OSI 7계층","PDU / 캡슐화"], items:[
      { k:"head", lvl:0, text:"PDU(Protocol Data Unit)" },
      { k:"para", lvl:1, text:"PDU는 각 네트워크 계층에서 사용하는 데이터 단위를 의미하는 용어로 통신에 필요한 헤더 정보(제어 정보)와 데이터를 캡슐화하여 구성하며 Frame, Packet, Segment 등 계층별로 다른 단위를 사용한다. 예를 들어 4계층에서는 Segment 단위를 사용하며 송신지를 생성한 Segment는 수신지의 4계층에서 해석된다." },
      { k:"head", lvl:0, text:"캡슐화(Encapsulation)" },
      { k:"para", lvl:1, text:"응용계층에서의 데이터가 하위 계층으로 가면서 추가 정보인 헤더를 붙이는 것을 캡슐화라고 한다.", c:"g" }
    ]},
    { page:117, title:"DCL · 트랜잭션(TCL) 명령어", path:["학습 3. 데이터베이스 기초 활용하기","권한 관리 / 트랜잭션"], items:[
      { k:"head", lvl:0, text:"(1) 주요 DCL 명령어" },
      { k:"def",  lvl:1, term:"GRANT", desc:"권한 부여" },
      { k:"def",  lvl:1, term:"REVOKE", desc:"권한 회수" },
      { k:"ctx",  lvl:0, text:"5. 트랜잭션을 관리한다. — (1) 주요 명령어" },
      { k:"def",  lvl:1, term:"COMMIT", desc:"변경 내용 확정" },
      { k:"def",  lvl:1, term:"ROLLBACK", desc:"변경 내용 취소" },
      { k:"def",  lvl:1, term:"SAVEPOINT", desc:"되돌릴 위치 지정" }
    ]}
  ]
},
{
  id:"hwan", title:"개발자 환경 구축", badge:"환경",
  pages:[
    { page:16, title:"운영체제", path:["학습 1. 운영체제 기초 활용하기","1-1. 운영체제 식별","운영체제"], items:[
      { k:"head", lvl:0, text:"운영체제" },
      { k:"para", lvl:1, text:"운영체제란 컴퓨터 시스템이 제공하는 하드웨어(H/W)와 소프트웨어(S/W) 기능을 사용할 수 있도록 해 주는 시스템 소프트웨어(S/W)로,", c:"g" },
      { k:"para", lvl:1, text:"한정된 시스템 자원을 효율적으로 사용할 수 있도록 관리 및 운영함으로써 사용자에게 편리성을 제공한다." }
    ]},
    { page:17, title:"운영체제의 기능 · 종류", path:["1-1. 운영체제 식별","운영체제의 기능/종류"], items:[
      { k:"head", lvl:0, text:"1. 운영체제의 주요 기능" },
      { k:"para", lvl:1, text:"처리 능력 향상 · 응답시간 단축 · 신뢰도 향상 · 컴퓨터 시스템과 사용자 간 인터페이스 기능 제공 · 출력 역할 지원 · 각 프로그램과 사용자 간 보호 · 주기억 장치 관리 · CPU를 통한 프로그램 실행 관리 · 파일 관리 · 명령어 해석/수행" },
      { k:"head", lvl:0, text:"2. 운영체제의 종류" },
      { k:"def",  lvl:1, term:"(1) 윈도우 OS", desc:"마이크로소프트(Microsoft)사 제품으로 유료. 주로 중소규모 및 개인용 PC의 OS로 사용되며, 직관적인 그래픽 사용자 인터페이스(GUI)를 제공하여 사용 편의성이 높다.", c:"g" },
      { k:"def",  lvl:1, term:"(2) 유닉스(UNIX)", desc:"IBM, HP사의 제품으로 유료. 주로 대용량 처리, 안전성이 요구되는 서버(Server) 제품군에 사용된다.", c:"g" },
      { k:"def",  lvl:1, term:"(3) 리눅스(Linux)", desc:"오픈 소스로 누구나 자유롭게 사용·수정·배포할 수 있어 무료. 주로 서버, 슈퍼컴퓨터, 임베디드 시스템 등 다양한 분야에서 널리 사용.", c:"g" },
      { k:"def",  lvl:1, term:"(4) iOS", desc:"애플(Apple)사 제품으로 하드웨어의 번들(Bundle)이다.", c:"g" }
    ]},
    { page:18, title:"안드로이드", path:["1-1. 운영체제 식별","운영체제의 종류"], items:[
      { k:"def", lvl:0, term:"(5) 안드로이드(Android)", desc:"구글(Google)사 제품으로 무료이다.", c:"g" }
    ]},
    { page:24, title:"CLI / GUI", path:["1-2. 운영체제 기본 명령어 활용","운영체제 제어 수단"], items:[
      { k:"def", lvl:0, term:"1. CLI(Command Line Interface)의 특징", desc:"CLI는 사용자가 직접 명령어를 입력하여 컴퓨터 시스템에 명령을 내리는 방식" },
      { k:"def", lvl:0, term:"2. GUI(Graphic User Interface) 기본 사용법", desc:"GUI는 사용자가 마우스 등을 통해 윈도우에서 프로그램을 실행하고 파일을 이동하는 방식" }
    ]},
    { page:33, title:"운영체제 프로세스", path:["1-3. 운영체제 기초 활용","프로세스 개요"], items:[
      { k:"head", lvl:0, text:"1. 운영체제의 프로세스의 개념" },
      { k:"para", lvl:1, text:"CPU를 통해 수행되는 사용자 및 시스템 프로그램 · 시스템의 작업 단위" },
      { k:"head", lvl:0, text:"2. 운영체제의 프로세스의 특징", c:"g" },
      { k:"para", lvl:1, text:"(1) 현재 실행 중이거나 곧 실행이 가능한 프로그램 (2) 운영체제 내에 PCB를 가진 프로그램 (3) 목적·결과에 따라 발생하는 사건들의 과정 (4) 병행 수행 가능 (5) CPU는 수시로 프로세스들 사이를 다중화하여 전환 (6) 계통적 동작 (7) 비동기적 행위(Asynchronous Activity) (8) 디스패치(Dispatch) 가능한 개체(Entity)", c:"g" },
      { k:"head", lvl:0, text:"순차 프로세스" }
    ]},
    { page:35, title:"프로세스 상태", path:["1-3. 운영체제 기초 활용","프로세스 상태의 개념"], items:[
      { k:"ctx",  lvl:0, text:"프로세스 상태(State) — 프로그램은 다음 상태들을 순환한다 (초록: 각 상태)" },
      { k:"def",  lvl:1, term:"(1) 제출(Submit)", desc:"프로세스가 처음 생성되어 운영체제에 실행을 요청하는 단계", c:"g" },
      { k:"def",  lvl:1, term:"(2) 보류(Hold)", desc:"제출된 프로세스가 보조기억장치에 잠시 대기하는 상태", c:"g" },
      { k:"def",  lvl:1, term:"(3) 준비(Ready)", desc:"주기억장치에 로드되어 CPU를 할당받기 위해 기다리는 상태", c:"g" },
      { k:"def",  lvl:1, term:"(4) 실행(Running)", desc:"실제로 CPU를 사용하며 명령어를 실행하고 있는 상태(코어당 한 번에 하나)", c:"g" },
      { k:"def",  lvl:1, term:"(5) 대기(Waiting)", desc:"입출력(I/O) 작업 완료를 기다리거나 자원을 얻기 위해 잠시 멈춘 상태", c:"g" },
      { k:"def",  lvl:1, term:"(6) 완료(Complete)", desc:"모든 작업을 마치고 종료된 상태(자원을 시스템에 반환)", c:"g" }
    ]},
    { page:47, title:"운영체제별 개발 환경", path:["학습 2. 기본 개발 환경 구축하기","2-1. 운영체제 설치","운영체제별 개발 환경의 이해"], items:[
      { k:"head", lvl:0, text:"운영체제별 개발 환경의 이해" },
      { k:"para", lvl:1, text:"개발 환경 구축은 설치하는 운영체제에 따라 웹 서버, 데이터베이스, 프로그래밍 언어가 상이할 수 있다. 운영체제별로 종속되는 소프트웨어가 있거나 호환성 확보를 위해서 별도의 프로그램을 필요에 따라 설치할 수 있다." }
    ]},
    { page:64, title:"개발도구 설치 시 고려 요소", path:["개발도구 설치","수행 tip"], items:[
      { k:"head", lvl:0, text:"개발도구 설치 시 고려해야 할 요소" },
      { k:"para", lvl:1, text:"개발도구와 운영체제의 호환성 및 충돌 여부 · 개발도구 버전 확인 · 상용 S/W의 경우 라이선스 수량 확인 · 개발도구 보안성을 고려한 최신 패치 여부", c:"g" }
    ]},
    { page:65, title:"Eclipse + JDK 설치", path:["개발도구 설치","Windows 운영체제 검토"], items:[
      { k:"ctx",  lvl:0, text:"수행 tip — Eclipse + JDK 설치 순서 (초록)" },
      { k:"para", lvl:1, text:"1. JDK 설치 (jdk-17_windows-x64_bin.exe) → 2. 환경변수 등록 (JAVA_HOME, Path) → 3. Eclipse 설치 (eclipse-inst-jre-win64.exe) → 4. 실행 후 Window > Preferences > Java > Installed JREs에서 JDK 경로 확인", c:"g" }
    ]},
    { page:67, title:"IntelliJ + JDK 설치", path:["개발도구 설치","macOS/Linux 검토"], items:[
      { k:"head", lvl:0, text:"수행 tip — IntelliJ + AdoptOpenJDK 설치" },
      { k:"para", lvl:1, text:"응용소프트웨어 개발에 필요한 개발도구 설치를 완료한다. (JDK 설치 → 환경변수 등록 → IntelliJ IDEA 설치 → 실행 확인)" }
    ]},
    { page:69, title:"개발도구의 종류", path:["개발 환경","개발도구의 종류"], items:[
      { k:"head", lvl:0, text:"2. 개발도구의 종류" },
      { k:"def",  lvl:1, term:"JDK", desc:"자바 기반 개발 및 자바 런타임 환경을 제공하는 도구 모음 (컴파일러 javac, JRE, javadoc, jdb)", c:"g" },
      { k:"def",  lvl:1, term:"Eclipse", desc:"통합 개발 환경 지원 툴(IDE)", c:"g" },
      { k:"def",  lvl:1, term:"Web 서버", desc:"http 요청을 서비스하며 클러스터 구성으로 부하 분산 및 Fail-Over 기능 제공", c:"g" },
      { k:"def",  lvl:1, term:"WAS", desc:"웹 서버로부터 요청을 받아 처리하는 처리 엔진(J2EE 환경의 분산·클러스터링)", c:"g" },
      { k:"def",  lvl:1, term:"DBMS", desc:"업무에 의해 발생하는 정보의 저장을 담당", c:"g" },
      { k:"def",  lvl:1, term:"형상관리", desc:"소스관리의 최적화된 환경을 제공 (SVN/Dimension)", c:"g" }
    ]}
  ]
},
{
  id:"sql", title:"SQL활용", badge:"SQL",
  pages:[
    { page:15, title:"데이터 사전(Data Dictionary)", path:["학습 1. 기본 SQL 작성하기","1-1. 테이블의 데이터 사전 조회","데이터 사전"], items:[
      { k:"head", lvl:0, text:"1. 데이터 사전 개념" },
      { k:"para", lvl:1, text:"데이터 사전(Data Dictionary)에는 데이터베이스의 데이터(사용자 데이터)를 제외한 모든 정보(DBMS가 관리하는 데이터)가 있다.", c:"g" },
      { k:"para", lvl:1, text:"데이터 사전의 내용을 변경하는 권한은 시스템 사용자(데이터베이스 관리자: DBA)가 가진다. 데이터 사전은 메타 데이터(Meta data)로 구성되어 있다." },
      { k:"ctx",  lvl:0, text:"2. 데이터 사전 내용 (메타 데이터 유형)" },
      { k:"para", lvl:1, text:"사용자 정보(ID, 비밀번호 및 권한 등) · 데이터베이스 객체(테이블, 인덱스, 뷰 등) · 무결성 제약 상태 · 함수, 프로시저 및 트리거 정보 등", c:"g" }
    ]},
    { page:21, title:"DDL 개념", path:["1-2. 기본적인 SQL 작성","데이터 정의(DDL문)"], items:[
      { k:"head", lvl:0, text:"1. DDL 개념" },
      { k:"para", lvl:1, text:"DDL(Data Definition Language)은 영문 그대로 ‘데이터를 정의하는 언어'이다. 보다 직관적으로 설명하자면 ‘데이터를 담을 그릇을 생성하는 언어'이다. 이렇게 생성한 그릇을 DBMS에서는 오브젝트(Object)라고 한다." }
    ]},
    { page:22, title:"DDL 유형 · 테이블 생성", path:["데이터 정의(DDL문)","DDL 유형/작성"], items:[
      { k:"ctx",  lvl:0, text:"2. DDL 유형 (명령어)" },
      { k:"def",  lvl:1, term:"CREATE", desc:"오브젝트 생성" },
      { k:"def",  lvl:1, term:"ALTER", desc:"오브젝트 변경" },
      { k:"def",  lvl:1, term:"DROP", desc:"오브젝트 삭제" },
      { k:"def",  lvl:1, term:"TRUNCATE", desc:"오브젝트 내용 삭제(로깅 작업 건너뜀)" },
      { k:"head", lvl:0, text:"3. DDL 작성 — 테이블 생성" },
      { k:"para", lvl:1, text:"CREATE TABLE 테이블명 ( 칼럼명 데이터 타입 [DEFAULT 값] [NOT NULL] … [PRIMARY KEY (칼럼 리스트),] … );" }
    ]},
    { page:23, title:"테이블 변경 · 삭제", path:["데이터 정의(DDL문)","테이블 변경/삭제"], items:[
      { k:"head", lvl:0, text:"(2) 테이블 변경 (ALTER)" },
      { k:"def",  lvl:1, term:"열 추가", desc:"ALTER TABLE 테이블명 ADD 칼럼명 데이터 타입 [DEFAULT 값]" },
      { k:"def",  lvl:1, term:"열 데이터 타입 변경", desc:"ALTER TABLE 테이블명 MODIFY 칼럼명 데이터 타입" },
      { k:"def",  lvl:1, term:"열 삭제", desc:"ALTER TABLE 테이블명 DROP 칼럼명" },
      { k:"head", lvl:0, text:"(3) 테이블 삭제, 절단, 이름 변경" },
      { k:"def",  lvl:1, term:"테이블 삭제", desc:"DROP TABLE 테이블명" },
      { k:"def",  lvl:1, term:"테이블 내용 삭제", desc:"TRUNCATE TABLE 테이블명" },
      { k:"def",  lvl:1, term:"테이블명 변경", desc:"RENAME TABLE 이전_테이블명 TO 새로운_테이블명" }
    ]},
    { page:24, title:"제약 조건 · 조인 개념", path:["데이터 정의(DDL문)","제약 조건 / 다중 테이블 조회"], items:[
      { k:"ctx",  lvl:0, text:"제약 조건 (참고)" },
      { k:"ctx",  lvl:0, text:"1. 조인(JOIN)" },
      { k:"head", lvl:1, text:"(1) 조인 개념" },
      { k:"para", lvl:2, text:"조인은 영문 의미 그대로는 결합을 의미하며, 관계형 데이터베이스에서의 조인은 교집합 결과로 데이터 결합 방법을 의미한다. 교집합이 되는 공통점은 다양한 관점에서 정의될 수 있다. 여기서 그 관점을 정의하는 것이 바로 조인의 조건이 된다. 조인은 두 테이블의 공통값을 이용하여 칼럼을 조합하는 수단이다. 보통 PK와 FK값을 결합하여 사용하는 것이 일반적이다." }
    ]},
    { page:27, title:"서브쿼리 유형", path:["1-2. 기본적인 SQL 작성","서브쿼리"], items:[
      { k:"ctx",  lvl:0, text:"(2) 서브쿼리 유형 (반환 데이터 형태별)" },
      { k:"def",  lvl:1, term:"Single Row(단일 행) 서브쿼리", desc:"서브쿼리의 결과가 항상 1건 이하 · 단일 행 비교 연산자 =, <, <=, >, >=, <> 등 사용" },
      { k:"def",  lvl:1, term:"Multiple Row(다중 행) 서브쿼리", desc:"실행 결과가 여러 건 · 다중 행 비교 연산자 IN, EXISTS, ALL, ANY 등 사용" },
      { k:"def",  lvl:1, term:"Multiple Column(다중 칼럼) 서브쿼리", desc:"실행 결과가 2개 이상 칼럼으로 반환 · 비교하는 칼럼 개수·위치가 동일해야 함" }
    ]},
    { page:28, title:"집합 연산자 · DCL 개념", path:["1-2. 기본적인 SQL 작성","집합 연산자 / 데이터 제어(DCL문)"], items:[
      { k:"ctx",  lvl:0, text:"(2) 집합 연산자 유형" },
      { k:"def",  lvl:1, term:"UNION", desc:"2개 이상 SQL문 실행 결과의 중복을 제거한 합집합" },
      { k:"def",  lvl:1, term:"UNION ALL", desc:"중복을 제거하지 않은 합집합" },
      { k:"def",  lvl:1, term:"INTERSECTION", desc:"중복을 제거한 교집합" },
      { k:"def",  lvl:1, term:"EXCEPT(MINUS)", desc:"선행·후행 SQL문 실행 결과 사이의 중복을 제거한 차집합" },
      { k:"head", lvl:0, text:"1. DCL 개념" },
      { k:"para", lvl:1, text:"데이터베이스에서 데이터 외의 오브젝트를 조작하려고 하는 경우에 DCL 명령을 사용한다. Data Control Language의 약자로, 데이터 제어 언어라고 한다. TCL(Transaction Control Language)과는 작업 대상이 상이하나, 제어 기능이라는 공통점으로 TCL은 DCL의 일부로 분류하기도 한다." }
    ]},
    { page:29, title:"DCL 명령어 · 사용자 권한", path:["데이터 제어(DCL문)","DCL 명령어"], items:[
      { k:"def",  lvl:0, term:"GRANT", desc:"데이터베이스 사용자 권한 부여" },
      { k:"def",  lvl:0, term:"REVOKE", desc:"데이터베이스 사용자 권한 회수" },
      { k:"def",  lvl:0, term:"COMMIT", desc:"트랜잭션 확정 (TCL)" },
      { k:"def",  lvl:0, term:"ROLLBACK", desc:"트랜잭션 취소 (TCL)" },
      { k:"def",  lvl:0, term:"CHECKPOINT", desc:"복귀지점 설정 (TCL)" }
    ]},
    { page:30, title:"트랜잭션 · TCL", path:["데이터 제어(DCL문)","트랜잭션"], items:[
      { k:"ctx",  lvl:0, text:"트랜잭션 개념" },
      { k:"para", lvl:1, text:"트랜잭션은 논리적인 연산 단위이다. 하나 이상의 SQL문이 포함되며, 거래를 의미한다. 거래의 모든 결과가 모두 반영되거나 모두 취소되어야 한다. 분해되지 않는 최소 단위이다." },
      { k:"ctx",  lvl:0, text:"(2) 트랜잭션 제어 (TCL 명령어)" },
      { k:"def",  lvl:1, term:"COMMIT", desc:"작업거래 내용 확정" },
      { k:"def",  lvl:1, term:"ROLLBACK", desc:"작업거래 내용 취소" },
      { k:"def",  lvl:1, term:"CHECKPOINT", desc:"작업거래의 저장 시점 설정 (ROLLBACK 위치 지정)" }
    ]},
    { page:33, title:"데이터 타입 · 제약 조건", path:["학습 1","테이블 생성 준비"], items:[
      { k:"para", lvl:0, text:"위 그림에서 고객은 N개의 주문을 수행하고 있고, 또한 주문 데이터는 고객 데이터 없이 존재할 수 없는 종속되는 구조를 가진다." }
    ]},
    { page:38, title:"조인으로 다중 테이블 조회", path:["다중 테이블 조회","조인"], items:[
      { k:"para", lvl:0, text:"크로스 조인(Cross Join): SELECT 고객.*, 주문.* FROM 고객, 주문 ; — 조건절이 없으므로 연결 가능한 모든 데이터를 조회(고객 5건 × 주문 10건 = 50건)." },
      { k:"para", lvl:0, text:"WHERE절로 공통 데이터 추출: SELECT … FROM 고객, 주문 WHERE 고객.고객번호 = 주문.고객번호; — 두 테이블에 동시 존재하는 데이터 10건." }
    ]},
    { page:39, title:"내부 조인 · 서브쿼리 조회", path:["다중 테이블 조회","조인/서브쿼리"], items:[
      { k:"para", lvl:0, text:"조건 조인: SELECT … FROM 고객, 주문 WHERE 고객.고객번호 = 주문.고객번호 AND 이름 = '홍길동';" },
      { k:"para", lvl:0, text:"INNER JOIN: SELECT … FROM 고객 INNER JOIN 주문 ON 고객.고객번호 = 주문.고객번호 WHERE 이름 = '홍길동';" },
      { k:"para", lvl:0, text:"연관 서브쿼리(주문 횟수): SELECT 고객.이름, (SELECT COUNT(1) FROM 주문 WHERE 고객.고객번호 = 주문.고객번호) AS 주문횟수 FROM 고객;" }
    ]},
    { page:57, title:"인덱스 개념", path:["학습 2. 고급 SQL 작성하기","2-2. 인덱스와 뷰 작성","인덱스 활용"], items:[
      { k:"head", lvl:0, text:"1. 인덱스 개념" },
      { k:"para", lvl:1, text:"인덱스는 저장된 데이터를 빠르게", c:"g" },
      { k:"para", lvl:1, text:"검색할 수 있는 수단이자, 테이블에 대한 조회 속도를 높여 주는 자료 구조를 말한다." }
    ]},
    { page:58, title:"인덱스 사용 · 생성", path:["인덱스 활용","인덱스 사용"], items:[
      { k:"head", lvl:0, text:"(1) 인덱스 사용 주체" },
      { k:"para", lvl:1, text:"‘이름' 칼럼에 대한 인덱스가 생성되어 있다면 데이터를 빠르게 찾을 수 있다. 이 때 DBMS는 인덱스를 사용하여 빠른 검색을 수행한다." },
      { k:"head", lvl:0, text:"인덱스 생성" },
      { k:"para", lvl:1, text:"CREATE [UNIQUE] INDEX <인덱스명> ON <테이블명> (<칼럼명 나열>);" }
    ]},
    { page:59, title:"인덱스 삭제·변경 · 뷰 개념", path:["인덱스 활용","인덱스 조작 / 뷰"], items:[
      { k:"def",  lvl:0, term:"인덱스 삭제", desc:"DROP INDEX <index name>;" },
      { k:"def",  lvl:0, term:"인덱스 변경", desc:"ALTER [UNIQUE] INDEX <index name> ON <table name> (<column(s)>);" },
      { k:"head", lvl:0, text:"뷰(View) 개념" },
      { k:"para", lvl:1, text:"뷰는 기본 테이블로부터 유도된 가상 테이블로서, 사용자에게(생성 관점 아닌 사용 관점에서)는 물리적으로 존재하지 않지만 테이블로 있는 것처럼 간주된다." }
    ]}
  ]
}
];

/* ======================= 시험 문제 ======================= */
const QUIZ = {
  gicho:{ title:"응용SW 기초 기술 활용",
    blank:[
      { q:"네트워크 ___은 통신을 통제하는 규칙들을 모아 놓은 것으로, 무엇을·어떻게·언제 통신할지를 정의한다.", answer:"프로토콜", accept:["프로토콜","protocol"], explain:"p.16 프로토콜의 개념." },
      { q:"___ 7계층 모델은 국제표준화기구(ISO)에서 개발한 이론적인 네트워크 모델이다.", answer:"OSI", accept:["OSI","osi"], explain:"p.18 OSI 7계층." },
      { q:"OSI 7계층 중 논리 주소(IP)를 지정하고 최적 경로를 탐색하는 계층은 ___ 계층이다.", answer:"네트워크", accept:["네트워크","network"], explain:"p.19 Network Layer." },
      { q:"전송계층 프로토콜 중 통신 전 3-way handshake로 연결을 확립하고 신뢰성 있는 통신을 지원하는 것은 ___이다.", answer:"TCP", accept:["TCP","tcp"], explain:"p.21 TCP 특징." },
      { q:"응용계층 데이터가 하위 계층으로 가면서 헤더를 붙이는 것을 ___라고 한다.", answer:"캡슐화", accept:["캡슐화","encapsulation"], explain:"p.23 캡슐화(Encapsulation)." },
      { q:"권한을 부여하는 DCL 명령어는 GRANT, 회수하는 명령어는 ___이다.", answer:"REVOKE", accept:["REVOKE","revoke","리보크"], explain:"p.117 DCL 명령어." },
      { q:"트랜잭션에서 변경 내용을 확정하는 명령어는 ___이다.", answer:"COMMIT", accept:["COMMIT","commit","커밋"], explain:"p.117 COMMIT." }
    ],
    ox:[
      { q:"UDP는 3-way handshake를 수행하여 신뢰성 있는 통신을 보장한다.", answer:false, explain:"3-way handshake·신뢰성은 TCP. UDP는 수신 확인 과정이 없다. (p.21)" },
      { q:"SSH는 서버에 원격 접속하거나 파일을 전송하기 위한 프로토콜이다.", answer:true, explain:"p.19 SSH." },
      { q:"OSI 7계층에서 물리 주소(MAC)를 지정하는 계층은 데이터링크 계층이다.", answer:true, explain:"p.19 Data Link Layer." },
      { q:"ROLLBACK은 변경 내용을 확정하는 명령어이다.", answer:false, explain:"ROLLBACK은 변경 내용 '취소'. 확정은 COMMIT. (p.117)" }
    ],
    choice:[
      { q:"메일을 서버에서 관리하고 여러 단말기와 동기화하여 확인할 수 있는 프로토콜은?",
        options:["SMTP","POP3","IMAP","DHCP"], answer:2, explain:"p.20 IMAP." },
      { q:"OSI 7계층 중 인코딩·암호화·압축·코드 변환을 담당하는 계층은?",
        options:["응용 계층","표현 계층","세션 계층","전송 계층"], answer:1, explain:"p.19 Presentation Layer." }
    ]
  },
  hwan:{ title:"개발자 환경 구축",
    blank:[
      { q:"___란 하드웨어와 소프트웨어 기능을 사용할 수 있도록 해 주는 시스템 소프트웨어로, 시스템 자원을 효율적으로 관리한다.", answer:"운영체제", accept:["운영체제","OS","os"], explain:"p.16 운영체제 정의." },
      { q:"사용자가 직접 명령어를 입력하여 시스템에 명령을 내리는 방식을 ___라 한다.", answer:"CLI", accept:["CLI","cli"], explain:"p.24 CLI." },
      { q:"프로세스가 실제로 CPU를 사용하며 명령어를 실행하고 있는 상태를 ___ 상태라 한다.", answer:"실행", accept:["실행","running"], explain:"p.35 실행(Running)." },
      { q:"자바 기반 개발 및 런타임 환경을 제공하는 도구 모음(컴파일러 javac 등)을 ___라 한다.", answer:"JDK", accept:["JDK","jdk"], explain:"p.69 JDK." },
      { q:"오픈 소스로 누구나 자유롭게 사용·수정·배포할 수 있어 무료인 운영체제는 ___이다.", answer:"리눅스", accept:["리눅스","Linux","linux"], explain:"p.17 리눅스." }
    ],
    ox:[
      { q:"윈도우 OS는 마이크로소프트사 제품으로 무료로 배포된다.", answer:false, explain:"윈도우는 유료(다양한 라이선스 정책). 무료는 리눅스·안드로이드. (p.17)" },
      { q:"GUI는 사용자가 마우스 등을 통해 프로그램을 실행하고 파일을 이동하는 방식이다.", answer:true, explain:"p.24 GUI." },
      { q:"프로세스의 ‘대기(Waiting)’ 상태는 입출력(I/O) 완료를 기다리는 상태이다.", answer:true, explain:"p.35 대기(Waiting)." },
      { q:"유닉스(UNIX)는 주로 개인용 PC의 OS로 사용되며 편의성이 높다.", answer:false, explain:"개인용 PC는 윈도우. 유닉스는 대용량·안정성이 요구되는 서버용. (p.17)" }
    ],
    choice:[
      { q:"운영체제 프로세스 상태 중 ‘처음 생성되어 운영체제에 실행을 요청하는 단계’는?",
        options:["제출(Submit)","준비(Ready)","실행(Running)","완료(Complete)"], answer:0, explain:"p.35 제출(Submit)." },
      { q:"웹 서버로부터 요청을 받아 처리하는 처리 엔진으로, J2EE 환경의 분산·클러스터링을 담당하는 것은?",
        options:["JDK","Eclipse","WAS","형상관리"], answer:2, explain:"p.69 WAS." }
    ]
  },
  sql:{ title:"SQL활용",
    blank:[
      { q:"___(Data Dictionary)에는 데이터베이스의 데이터(사용자 데이터)를 제외한 모든 정보(DBMS가 관리하는 데이터)가 있다.", answer:"데이터 사전", accept:["데이터사전","데이터 사전","data dictionary"], explain:"p.15 데이터 사전." },
      { q:"‘데이터를 담을 그릇을 생성하는 언어’로, 오브젝트를 정의하는 SQL 분류는 ___이다.", answer:"DDL", accept:["DDL","ddl"], explain:"p.21 DDL 개념." },
      { q:"오브젝트의 내용을 삭제하되 로깅 작업을 건너뛰는 DDL 명령어는 ___이다.", answer:"TRUNCATE", accept:["TRUNCATE","truncate"], explain:"p.22 TRUNCATE." },
      { q:"관계형 DB에서 두 테이블의 공통값을 이용하여 칼럼을 조합하는(교집합 결과) 기법을 ___이라 한다.", answer:"조인", accept:["조인","join"], explain:"p.24 조인 개념." },
      { q:"2개 이상 SQL문의 실행 결과에서 중복을 제거한 합집합 연산자는 ___이다.", answer:"UNION", accept:["UNION","union","유니온"], explain:"p.28 UNION." },
      { q:"저장된 데이터를 빠르게 검색하고 조회 속도를 높여 주는 자료 구조를 ___라 한다.", answer:"인덱스", accept:["인덱스","index"], explain:"p.57 인덱스 개념." },
      { q:"기본 테이블로부터 유도된 가상 테이블로, 물리적으로 존재하지 않지만 테이블처럼 간주되는 것은 ___이다.", answer:"뷰", accept:["뷰","view"], explain:"p.59 뷰 개념." }
    ],
    ox:[
      { q:"데이터 사전의 내용을 변경하는 권한은 일반 사용자가 가진다.", answer:false, explain:"변경 권한은 시스템 사용자(DBA). 일반 사용자는 읽기 전용 조회만 가능. (p.15)" },
      { q:"UNION ALL은 2개 이상 SQL문 실행 결과의 중복을 제거하지 않은 합집합이다.", answer:true, explain:"p.28 UNION ALL." },
      { q:"단일 행(Single Row) 서브쿼리의 비교 연산자로 IN, EXISTS, ALL, ANY가 사용된다.", answer:false, explain:"IN·EXISTS·ALL·ANY는 다중 행 서브쿼리용. 단일 행은 =, <, > 등. (p.27)" },
      { q:"PK 칼럼으로 만들어진 PK 인덱스는 자동으로 생성된다.", answer:true, explain:"p.57 — 기본 키 생성 시 PK 인덱스 자동 생성." }
    ],
    choice:[
      { q:"트랜잭션 제어(TCL) 명령어 중 ‘복귀지점(저장 시점)을 설정’하는 것은?",
        options:["COMMIT","ROLLBACK","CHECKPOINT","GRANT"], answer:2, explain:"p.29·30 CHECKPOINT." },
      { q:"서브쿼리 실행 결과가 2개 이상 칼럼으로 반환되는 유형은?",
        options:["Single Row 서브쿼리","Multiple Row 서브쿼리","Multiple Column 서브쿼리","연관 서브쿼리"], answer:2, explain:"p.27 Multiple Column 서브쿼리." },
      { q:"테이블 이름을 변경하는 명령문으로 올바른 것은?",
        options:["DROP TABLE 테이블명","TRUNCATE TABLE 테이블명","RENAME TABLE 이전명 TO 새이름","ALTER TABLE 테이블명 ADD 칼럼명"], answer:2, explain:"p.23 RENAME TABLE." }
    ]
  }
};
