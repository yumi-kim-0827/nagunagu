# 💡Sticker Diary

스티커와 생성된 텍스트를 드래그해서 꾸민 다이어리 페이지를 다운받는 서비스입니다.

# 🖥️View web site

https://yumi-kim-0827.github.io/nagunagu/

<!--프로젝트 대문 이미지-->

![스크린샷 2024-06-06 152954](https://github.com/yumi-kim-0827/nagunagu/assets/116349476/21f759a4-95dd-426a-81a8-b4a1cd765154)

<!--목차-->

# Table of Contents

- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Contribution](#4-contribution)
- [[5] Acknowledgement](#5-acknowledgement)
- [[6] Contact](#6-contact)
- [[7] License](#7-license)

# [1] About the Project

이름을 적어 로그인 후 스티커를 드래그하고 5개의 텍스트를 생성, 드래그해서  
다이어리를 꾸민 후 스크린 이미지를 다운받을 수 있습니다.

## Features

- gsap react를 활용하여 유연한 드래그 드롭 기능
- html2canvas와 saveon을 활영하여 지정된 영역 캡쳐와 다운로드 기능
- api 연결을 통한 user 고유 아이디, 다이어리 컨텐츠 생성

## Technologies

- React js
- Router
- Axios
- scss
- javascript
- GSAP

# [2] Getting Started

## Prerequisites

API 요청 파일은 공유되지 않습니다.

- npm

```bash
npm install npm@latest -g
```

## Installation

1. Repository 클론

```bash
git clone https://github.com/your-username/project-repository
```

2. NPM packages 설치

```bash
npm install
```

# [3] Usage

- html2canvas 설치 후 지정한 영역을 캡쳐하여 이미지로 다운받을 수 있습니다.

```java

import html2canvas from "html2canvas";

.
.
.

const captureArea = useRef();
  //html2canvas
  const onCapture = () => {
    html2canvas(captureArea.current).then((canvas) => {
      onSaveAs(canvas.toDataURL("./assets"), "image-download.png");
    });
  };
  const onSaveAs = (uri, filename) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  .
  .
  .
  return (
          <div className="captured_area" ref={captureArea}>
          캡쳐영역
          </div>
  )

```

# [4] Contribution

버그 수정에 🐞, 아이디어 제공에 💡, 새로운 기능 구현에 ✨를 사용할 수 있습니다.\*

- (예시) 🐞 [YUMEEKIM](https://github.com/yumi-kim-0827): 메인페이지 버그 수정

# [5] Acknowledgement

- Idea https://github.com/aptheparker/diary

# [6] Contact

- 📧 yumee0827@naver.com
- 📋 [https://github.com/yumi-kim-0827](https://github.com/yumi-kim-0827)

# [7] License

MIT 라이센스

<!--Url for Badges-->

[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->

[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->

[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md
