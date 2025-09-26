# 📁 VIDEO 폴더

애프터이펙트로 제작한 배경 영상을 이 폴더에 넣어주세요.

## 🎬 권장 파일명
- `kyongbo-hero-bg.mp4` (메인 영상)
- `kyongbo-hero-bg.webm` (브라우저 호환성용)
- `kyongbo-hero-poster.jpg` (영상 로딩 전 포스터 이미지)

## ⚙️ 영상 사양 권장사항

### 해상도 & 품질
- **해상도**: 1920x1080 (Full HD)
- **비트레이트**: 2-4 Mbps
- **프레임레이트**: 30fps
- **코덱**: H.264 (MP4), VP9 (WebM)

### 파일 크기 & 최적화
- **목표 크기**: 3-5MB 이하
- **재생 시간**: 10-30초 (무한 루프)
- **오디오**: 없음 (muted)

### 내용 제안
- 전력망/회로 애니메이션
- 추상적인 전기 흐름 효과
- 회사 로고 모션 그래픽
- 제품 실루엣 애니메이션
- 파티클 시스템 (전력 관련)

## 💡 애프터이펙트 Export 설정

```
Format: H.264
Preset: Match Source - High bitrate
Output: MP4

Video Settings:
- Width: 1920, Height: 1080
- Frame Rate: 30
- Field Order: Progressive
- Quality: High

Bitrate Settings:
- Bitrate Encoding: VBR, 1 pass
- Target Bitrate: 3 Mbps
- Maximum Bitrate: 5 Mbps

Audio: None (체크 해제)
```

## 🔧 추가 최적화 팁

1. **Media Encoder 사용**: 더 나은 압축을 위해
2. **Handbrake**: 추가 압축이 필요한 경우
3. **WebM 변환**: 온라인 컨버터 활용
4. **모바일 최적화**: 별도 저해상도 버전 제작 고려

## 📱 반응형 고려사항

모바일에서는 영상 대신 정적 이미지 사용을 권장합니다:
- `kyongbo-hero-mobile.jpg` (모바일용 대체 이미지)
