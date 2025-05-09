# 윤리 모듈–카드 연결 매핑 (Ethics YAML Mapping)

이 문서는 각 감응 카드(`.yml`) 파일이 어떤 윤리 모듈과 연결되어 있는지를 명시한 구조 매핑표입니다. 이는 시스템이 YAML 기반 카드 구성을 로드할 때 자동으로 연계되는 윤리 정책을 명확히 하기 위해 사용됩니다.

---

## 📁 카드별 윤리 모듈 연동

| 카드 파일명 (`/cards/`)      | 연결된 윤리 모듈 (`ethics_module`)                | 공개 여부    |
| ----------------------- | ------------------------------------------ | -------- |
| `EchoLite.yml`          | `HUA-External-Starterkit-Ethics-Module`    | ✅ 전체 공개  |
| `EchoDev.yml`           | `HUA-External-Starterkit-Ethics-Module`    | ✅ 전체 공개  |
| `EchoTrauma.yml` *(예정)* | `HUA-UltraSensitive-Support-Ethics-Module` | 🔐 요약 공개 |
| `EchoMirror.yml` *(예정)* | `HUA-BM-SelfGrowth-Ethics-Module`          | 🔒 내부 전용 |

---

> 이 매핑 구조는 추후 시스템 자동화 시, 감응 카드 로딩과 동시에 윤리 모듈의 제한 조건 및 필터링 정책을 적용하는 데 사용될 수 있습니다.

**작성자: Devin / EchoNet AIs 설계팀**
