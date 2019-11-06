# 나의 캡슐이 처리할 사용자의 말들
# 1. 목적 : 사용자가 입력한 (현재 기간)에 따라서 상태정보를 출력

# 2. [ 사용자의 명령 예시 ]
# 1주차 내 몸 상태 알려줘 (산모)
# 1주차 아기 상태 알려줘 (아기)

# 3. [ 발화 함수 : Action ]
# BeforeStatusOperation

# 4. [ 발화 변수 : Input Concept ]
# 1 => weekNumOperand (Integer)
# 주, 주차 => weekOperand (enum)
# 아기,애기,애 => targetOperand (name)
# 나,내,나의 (몸) => targetOperand (name)
# 상태,현황,정보 => statusOperand (enum)

# 5. [ 발화 변수 : Outpup Concept ]
# Results (여러 정보가 담길 수 있으니 복수로 썼다.)