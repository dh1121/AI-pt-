window.appData = window.appData || {};

window.appData.questions = [
    { type: 'multiple-choice', id: "q1", subject: "해부생리학", question: "다음 중 심장의 박동을 조율하는 주된 심박조율기(pacemaker)는 무엇인가?", options: ["방실결절 (AV node)", "히스속 (Bundle of His)", "동방결절 (SA node)", "푸르킨예 섬유", "우심방근"], correctIndex: 2, explanation: "동방결절(SA node)은 우심방의 벽에 위치하며, 분당 60~100회의 활동전위를 발생시켜 심장 박동을 시작하게 하는 주된 심박조율기입니다." },
    { type: 'multiple-choice', id: "q2", subject: "근골격계 물리치료", question: "테니스 엘보(외측 상과염) 환자에게 가장 효과적으로 적용할 수 있는 근력 운동 방법은?", options: ["손목 굴곡근의 단축성 수축 훈련", "손목 신전근의 원심성(Eccentric) 수축 훈련", "이두근의 등척성 운동", "삼두근의 점진적 저항 운동", "상완요골근 단축 훈련"], correctIndex: 1, explanation: "테니스 엘보는 단요측수근신근 등의 건염이므로 건의 콜라겐 재배열을 위해 손목 신전근의 원심성 하중 훈련이 가장 권장됩니다." },
    { type: 'multiple-choice', id: "q3", subject: "신경계 물리치료", question: "파킨슨병 환자의 전형적인 보행 패턴으로 알맞은 것은?", options: ["가위걸음 (Scissors gait)", "종종걸음 (Festinating gait)", "계단걸음 (Steppage gait)", "오리걸음 (Waddling gait)", "편마비보행 (Hemiplegic gait)"], correctIndex: 1, explanation: "파킨슨병 환자는 보폭이 좁고 발을 끌며 걷는 종종걸음(Festinating gait)의 특징을 보이며, 가속 보행 양상이 관찰됩니다." },
    { type: 'multiple-choice', id: "q4", subject: "전기치료학", question: "경피신경전기자극(TENS) 중 관문통제이론(Gate Control Theory)을 주로 이용하는 것은?", options: ["고빈도 저강도 TENS", "저빈도 고강도 TENS", "발화점 TENS", "미세전류 자극", "간섭파 치료"], correctIndex: 0, explanation: "고빈도 저강도(Conventional) TENS는 A-beta 섬유를 자극하여 척수 후각에서 통증 신호를 차단하는 관문통제이론을 활용합니다." },
    { type: 'multiple-choice', id: "q5", subject: "측정 및 평가", question: "어깨의 극상근(Supraspinatus) 건염이나 파열을 확인하기 위해 실시하는 특수 검사는?", options: ["Neer test", "Empty can test (Jobe test)", "Yergason's test", "Speed's test", "Apprehension test"], correctIndex: 1, explanation: "Empty can test(Jobe's test)는 팔을 90도 외전, 30도 수평내전하고 엄지가 바닥을 향하게 한 상태에서 저항을 주어 극상근의 병변을 평가합니다." },
    { type: 'multiple-choice', id: "q6", subject: "근골격계 물리치료", question: "십자인대 파열 환자에게 초기 재활 금기 동작은?", options: ["등척성 허벅지 수축 운동", "종아리 펌핑 운동", "수동적 관절 가동(CPM) 제한적용", "고강도 개방사슬(OKC) 레그 익스텐션", "목발 보행(NWB) 연습"], correctIndex: 3, explanation: "초기 개방사슬(OKC) 레그 익스텐션은 경골을 전방으로 밀어 전방십자인대(ACL) 재파열을 유발할 수 있으므로 금기(Contraindication)입니다." },
    { type: 'multiple-choice', id: "q7", subject: "소아 물리치료", question: "뇌성마비 환아 중 가장 흔한 유형으로, 하지의 경직이 상지보다 심한 양상은?", options: ["강직형 양마비 (Spastic diplegia)", "강직형 사지마비 (Spastic quadriplegia)", "불수의운동형 (Dyskinetic)", "운동실조형 (Ataxic)", "저긴장형 (Hypotonic)"], correctIndex: 0, explanation: "강직형 양지마비(Spastic diplegia)는 뇌성마비 중 가장 흔하며, 다리가 가위처럼 꼬이는(Scissoring) 양상을 주로 보입니다." },
    { type: 'multiple-choice', id: "q8", subject: "해부생리학", question: "대퇴신경(Femoral nerve)의 지배를 받는 주요 근육은?", options: ["대둔근 (Gluteus maximus)", "대퇴사두근 (Quadriceps femoris)", "슬괵근 (Hamstrings)", "전경골근 (Tibialis anterior)", "비복근 (Gastrocnemius)"], correctIndex: 1, explanation: "대퇴신경(L2~L4)은 대퇴 전면에 위치한 대퇴사두근과 봉공근의 운동 신경을 지배합니다." },
    { type: 'short-answer', id: "q9", subject: "질환학", question: "추간판 탈출증 환자에게 적용하며, 허리를 뒤로 젖히는 신전 동작을 연속적으로 반복시켜 돌출된 수핵을 원래 위치로 되돌리는 대표적인 운동법의 이름은?", correctAnswer: "맥켄지 운동" },
    { type: 'multiple-choice', id: "q10", subject: "신경계 물리치료", question: "수근관 증후군(Carpal tunnel syndrome)에서 압박되는 신경은?", options: ["척골신경 (Ulnar nerve)", "요골신경 (Radial nerve)", "정중신경 (Median nerve)", "근피신경 (Musculocutaneous nerver)", "액와신경 (Axillary nerve)"], correctIndex: 2, explanation: "수근관 증후군은 손목 터널을 지나는 정중신경(Median nerve)이 압박받아 1~3번째 손가락에 저림을 유발합니다." },
    { type: 'multiple-choice', id: "q11", subject: "심혈관계 물리치료", question: "만성폐쇄성폐질환(COPD) 환자의 호흡곤란을 완화하기 위해 주로 권장하는 호흡법은?", options: ["빠른 얕은 호흡", "입술오므리기 호흡 (Pursed-lip breathing)", "복식 호흡", "흉식 호흡", "분절 호흡"], correctIndex: 1, explanation: "입술오므리기 호흡은 호기 시 기도 내 양압을 유지하여 소기도의 조기 폐쇄를 막고 남아 있는 잔기량을 배출하는 데 도움을 줍니다." },
    { type: 'multiple-choice', id: "q12", subject: "보조기 및 의지학", question: "발처짐(Drop foot)이 있는 편마비 환자에게 보행 시 가장 유용한 보조기는?", options: ["AFO (Ankle-Foot Orthosis)", "KAFO (Knee-Ankle-Foot Orthosis)", "HKAFO (Hip-Knee-Ankle-Foot Orthosis)", "CTLSO", "TLSO"], correctIndex: 0, explanation: "발처짐(Drop foot) 현상을 막고 발목 배측굴곡을 보조하기 위해 AFO(단하지 보조기)가 사용됩니다." },
    { type: 'multiple-choice', id: "q13", subject: "해부생리학", question: "호흡을 할 때 주된 흡기근(Inspiratory muscle)으로 작용하여 가슴통의 수직지름을 팽창시키는 근육은?", options: ["횡격막 (Diaphragm)", "내늑간근", "광배근", "복직근", "대흉근"], correctIndex: 0, explanation: "횡격막은 흡기 시 수축하여 하강하면서 흉곽의 수직경을 늘리는 가장 중요한 주 흡기근입니다." },
    { type: 'short-answer', id: "q14", subject: "측정 및 평가", question: "근력 평가(MMT)에서 중력을 배제한 상태로 전체 관절가동범위를 움직일 수 있을 때 주어지는 등급(Grade)은? (알파벳 첫 글자 또는 숫자 기호)", correctAnswer: "2" },
    { type: 'multiple-choice', id: "q15", subject: "광선치료학", question: "급성 염증이나 부종, 그리고 새로운 혈관 생성을 촉진하기 위해 흔히 적용하는 비열성 물리치료 기기는?", options: ["초음파 100% 지속파", "간섭파 치료기", "초단파 열치료기", "저출력 레이저 (LLLT)", "극초음파 심부열"], correctIndex: 3, explanation: "저출력 레이저(Low Level Laser Therapy)는 열은 발생하지 않고 광화학적 효과로 상처 치유와 염증 감소를 촉진합니다." },
    { type: 'multiple-choice', id: "q16", subject: "근골격계 물리치료", question: "오십견(유착성 관절낭염)의 가동범위 제한 순서(Capsular pattern)로 알맞은 것은?", options: ["내회전 - 외전 - 외회전", "외회전 - 외전 - 내회전", "굴곡 - 신전 - 굴곡", "외전 - 신전 - 내회전", "외회전 - 내회전 - 외전"], correctIndex: 1, explanation: "어깨 관절낭 패턴의 제한은 외회전(External rotation)이 가장 심하고, 그다음으로 외전(Abduction), 내회전(Internal rotation) 순서입니다." },
    { type: 'multiple-choice', id: "q17", subject: "신경계 물리치료", question: "척수손상(SCI) C6 레벨 환자가 휠체어 추진 등을 위해 주로 활용하는 핵심 근육은?", options: ["삼두근 (Triceps)", "요측수근신근 (ECRL/B)", "지굴근군", "상완이두근 (Biceps)", "광배근 (Latissimus dorsi)"], correctIndex: 1, explanation: "C6 손상 환자는 삼두근(C7)을 쓸 수 없지만, 손목 신전근(C6)을 이용한 Tenodesis grip으로 물건을 잡고 휠체어를 탈 수 있습니다." },
    { type: 'short-answer', id: "q18", subject: "해부생리학", question: "근육 수축 시 십자교(Cross-bridge)를 형성하기 위해 트로포닌에 결합하는 필수 이온은 무엇인가?", correctAnswer: "칼슘" }
];

window.appData.simulation = [
    // --- STAGE 1 : 동네 의원 초급 ---
    { id: "s1_1", difficulty: 1, patient: { name: "김민수", age: 24, gender: "남", occupation: "대학생" }, chiefComplaint: "무거운 상자를 들다가 허리를 삐끗했습니다. 너무 아파요.", initialState: { painLevel: 6, rom: 60 }, 
      evaluations: [
        { id: "e1", title: "가동범위 검사(ROM)", result: "요추 굴곡, 신전 시 가벼운 통증. 신경학적 방사통은 없음." },
        { id: "e2", title: "하지직거상 검사(SLR)", result: "음성(-). 디스크 파열 보다는 단순 근육 경련(Spasm) 의심." },
        { id: "e3", title: "촉진(Palpation)", result: "요방형근(QL) 주변 뚜렷한 압통과 근육 뭉침 확인." }
      ], 
      treatments: [
        { id: "t1", title: "온열 치료 (Hot Pack) 적용", effect: { pain: -2, rom: +10 }, feedback: "🔥 근육 이완과 혈류 증가로 통증이 줄었습니다.", isCorrect: true }, 
        { id: "t2", title: "부드러운 마사지와 경추/요추 견인", effect: { pain: -1, rom: +20 }, feedback: "✨ 긴장된 요방형근이 부드럽게 풀렸습니다.", isCorrect: true }, 
        { id: "t3", title: "고강도 데드리프트 시키기", effect: { pain: +4, rom: -30 }, feedback: "⚠️ 급성기 환자에게 웨이트 트레이닝으로 오히려 근육이 찢어졌습니다!", isCorrect: false },
        { id: "t4", title: "전기 자극 치료(TENS) 통증점 부착", effect: { pain: -3, rom: +20 }, feedback: "⚡ 관문통제이론을 통해 즉각적인 진통 효과를 보았습니다.", isCorrect: true },
        { id: "t5", title: "허리에 얼음물 붓기 쇼크 요법", effect: { pain: +5, rom: -50 }, feedback: "🧊 체온 저하와 극심한 근수축으로 환자가 분노하여 나갔습니다!", isCorrect: false },
        { id: "t6", title: "침대에 거꾸로 매달기", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 무분별한 역방향 견인은 근경련을 악화시킬 수 있습니다.", isCorrect: false }
      ] 
    },
    { id: "s1_2", difficulty: 1, patient: { name: "정준형", age: 21, gender: "여", occupation: "대학생" }, chiefComplaint: "어제 힐 신고 뛰다가 바깥쪽으로 발목이 확 꺾였어요.", initialState: { painLevel: 7, rom: 50 }, 
      evaluations: [
        { id: "e1", title: "인대 파열 검사 (Anterior Drawer Test)", result: "전거비인대(ATFL) 손상 의심. 양성(+). 국소 부종과 열감." },
        { id: "e2", title: "X-ray 영상 소견", result: "뼈 골절(Fracture) 소견은 부정적(Negative). 순수 인대 및 연부조직의 문제로 파악됨." },
        { id: "e3", title: "부종 둘레 측정(Figure of 8)", result: "줄자로 측정 시 건측(정상발) 대비 3cm 이상 심하게 부어있음." }
      ], 
      treatments: [
        { id: "t1", title: "급성기 손상 보호(Protection) 및 휴식(Rest)", effect: { pain: -2, rom: +15 }, feedback: "❄️ 초기 부하를 줄여 손상 악화를 성공적으로 막았습니다.", isCorrect: true }, 
        { id: "t2", title: "국소 얼음 찜질(Ice) 및 압박(Compression)", effect: { pain: -2, rom: +15 }, feedback: "❄️ 급성기 모세혈관 수축으로 출혈과 붓기가 즉시 제어됩니다.", isCorrect: true }, 
        { id: "t3", title: "다리를 심장보다 높게 거상(Elevation) 교육", effect: { pain: -1, rom: +10 }, feedback: "❄️ 중력을 이용해 부종액이 심장으로 잘 돌아가도록 돕습니다.", isCorrect: true }, 
        { id: "t4", title: "조직 재생 촉진을 위한 극초음파열치료(MWD) 적용", effect: { pain: +4, rom: -20 }, feedback: "🔥 급성기에 열을 가해 혈관이 확장되며 부종이 극심해졌습니다!", isCorrect: false },
        { id: "t5", title: "인대 융합을 위한 고강도 발목 꺾기 저항 훈련", effect: { pain: +3, rom: -15 }, feedback: "⚠️ 파열된 전거비인대에 조기 장력을 부과해 미세파열이 커졌습니다.", isCorrect: false },
        { id: "t6", title: "켄타우로스 훈련 (말처럼 두 발로 뛰기)", effect: { pain: +10, rom: -50 }, feedback: "🐴 극심한 통증으로 반대쪽 발목마저 접질렸습니다!!", isCorrect: false }
      ] 
    },
    { id: "s1_3", difficulty: 1, patient: { name: "한송화", age: 44, gender: "남", occupation: "요리사" }, chiefComplaint: "웍을 돌릴 때 팔꿈치 바깥쪽이 화끈거립니다. (테니스 엘보)", initialState: { painLevel: 6, rom: 70 }, 
      evaluations: [
        { id: "e1", title: "테니스 엘보 검사 (Cozen's Test)", result: "손목 신전에 억제 저항 시 팔꿈치 외측상과에 찢어지는 듯한 통증 호소 (+)." },
        { id: "e2", title: "초음파(US) 검사", result: "단요측수근신근(ECRB) 건 기시부에 미세 파열과 집중된 염증액 관찰됨." },
        { id: "e3", title: "통증 양상 문진", result: "아침에 세수할 때나 후라이팬(웍)을 들 때 팔꿈치 바깥쪽이 화끈거리며 힘이 빠진다고 함." }
      ], 
      treatments: [
        { id: "t1", title: "팔꿈치 보조기(Counterforce brace) 착용", effect: { pain: -2, rom: +10 }, feedback: "💪 외측 상과에 걸리는 건의 부하를 밴드가 분산시켜 줍니다.", isCorrect: true },
        { id: "t2", title: "손목 신전근의 원심성(Eccentric) 하중 조절 훈련", effect: { pain: -2, rom: +10 }, feedback: "💪 건의 콜라겐 재배열을 촉진하여 가장 근본적인 치료가 됩니다.", isCorrect: true },
        { id: "t3", title: "통증 완화를 위한 무통 마찰 마사지(Cross-friction massage)", effect: { pain: 0, rom: +10 }, feedback: "💪 환부에 부드러운 순환을 만들어 손상 조직 회복을 돕습니다.", isCorrect: true },
        { id: "t4", title: "손목 굴곡근군의 단축성 훈련 집중", effect: { pain: 0, rom: -5 }, feedback: "⚠️ 타겟 부위가 틀렸습니다(Golfer's elbow). 손목 신전근을 치료해야 합니다.", isCorrect: false },
        { id: "t5", title: "염증 억제를 위한 외측상과 부위 지속적 고강도 스트레칭(1시간)", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 급성 염증 건에 과도한 장력을 오랜 시간 유지하여 미세 손상이 커졌습니다.", isCorrect: false },
        { id: "t6", title: "환부 근육에 전기충격기 지지기", effect: { pain: +10, rom: -70 }, feedback: "💀 통증 조절이 아니라 환자를 전기 고문했습니다!! 게임 오버!!", isCorrect: false }
      ] 
    },

    // --- STAGE 2 : 정형외과 외래 (근골격계 중등도) ---
    { id: "s2_1", difficulty: 2, patient: { name: "전수빈", age: 52, gender: "여", occupation: "가정주부" }, chiefComplaint: "어깨가 굳어 만세가 아예 안 되고 밤에 너무 아파요. (유착성 관절낭염)", initialState: { painLevel: 8, rom: 30 }, 
      evaluations: [
        { id: "e1", title: "가동범위 평가(ROM)", result: "Capsular Pattern (외회전 > 외전 > 내회전 순의 심각한 제한이 나타남)." },
        { id: "e2", title: "수면 패턴 문진(Night pain)", result: "밤에 통증이 극심해지고 어깨 쪽으로 누울 수 없어 밤잠을 설친다고 호소." },
        { id: "e3", title: "어깨 충돌 검사 (Neer Test)", result: "음성(-). 특정 건(Tendon) 단독 문제가 아니라 관절강 내부 전체의 굳어짐 문제임." }
      ], 
      treatments: [
        { id: "t1", title: "통증 없는 범위 내 관절가동술(Gr 1~2)", effect: { pain: -2, rom: +20 }, feedback: "✨ 부드러운 가동술로 통증을 제어하며 윤활액을 회복시킵니다.", isCorrect: true }, 
        { id: "t2", title: "어깨 중력 보조 하 진자운동(Codman's exercise)", effect: { pain: -2, rom: +20 }, feedback: "✨ 어깨 관절낭의 유착을 안전하고 부드럽게 이완시킵니다.", isCorrect: true }, 
        { id: "t3", title: "지팡이를 이용한 수동적 관절가동범위 자가운동 교육", effect: { pain: -2, rom: +20 }, feedback: "✨ 환자 스스로 굳어짐을 방지하는 동작을 배워 왔습니다.", isCorrect: true }, 
        { id: "t4", title: "극강의 범위를 위한 강제적 관절가동술(Gr 4~5) 적용", effect: { pain: +5, rom: -10 }, feedback: "⚠️ 동결기에 강제 Thrust 적용 시 관절낭 파열 및 반사적 근긴장이 발생합니다!", isCorrect: false },
        { id: "t5", title: "극상근(Supraspinatus) 단독 고립 저항 훈련", effect: { pain: +2, rom: 0 }, feedback: "⚠️ 관절낭 캡슐이 타겟인데 근섬유 훈련만 하여 확장이 되지 않았습니다.", isCorrect: false },
        { id: "t6", title: "어깨에 로봇 팔 강제 이식 수술 강행", effect: { pain: +10, rom: -30 }, feedback: "🤖 의료법 위반으로 구속됩니다!!", isCorrect: false }
      ] 
    },
    { id: "s2_2", difficulty: 2, patient: { name: "한동희", age: 39, gender: "남", occupation: "경비원" }, chiefComplaint: "아침에 첫 발 디딜 때 발뒤꿈치가 찢어질 것처럼 아파요.", initialState: { painLevel: 7, rom: 80 }, 
      evaluations: [
        { id: "e1", title: "족저근막 긴장 검사 (Windlass Test)", result: "엄지발가락 수동 신전 시 발바닥 근막 통증 극대화 (+). 기상 직후 첫발 통증." },
        { id: "e2", title: "촉진 (Palpation)", result: "발뒤꿈치 뼈 내측 결절 부위 압박 시 칼로 찌르는 듯한 압통." },
        { id: "e3", title: "보행 패턴 분석 (Gait analysis)", result: "내측 통증을 피하기 위해 발 바깥쪽으로만 체중을 싣고 걷는 보상작용 보임." }
      ], 
      treatments: [
        { id: "t1", title: "수면 시 발목 배측굴곡 야간부목(Night splint) 처방", effect: { pain: -2, rom: +10 }, feedback: "💪 밤새 근막이 늘어나 있어 아침 첫발 내디딜 때 미세파열을 예방합니다.", isCorrect: true }, 
        { id: "t2", title: "얼린 캔이나 물병을 이용한 족저근막 롤링 마사지", effect: { pain: -2, rom: +10 }, feedback: "💪 쿨링과 근막 이완 효과로 염증과 텐션이 동시에 잡힙니다.", isCorrect: true }, 
        { id: "t3", title: "종아리 및 아킬레스건 슬랜트 보드 스트레칭", effect: { pain: -1, rom: 0 }, feedback: "💪 발목 배측굴곡 각도를 확보해 보행 시 족저근막 부하를 줄였습니다.", isCorrect: true }, 
        { id: "t4", title: "아킬레스건 강화를 위한 종아리 까치발 들기 강행", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 종아리를 지속 수축시키면 근막을 더 강하게 당기어 악화됩니다.", isCorrect: false },
        { id: "t5", title: "뒤꿈치에 염증 억제 체외충격파(ESWT) 매일 고강도 실시", effect: { pain: +4, rom: -5 }, feedback: "⚠️ 휴지기 없는 강도 높은 타격은 조직 괴사를 초래합니다.", isCorrect: false },
        { id: "t6", title: "족저근막이 문제니 가위로 족저근막을 반으로 싹둑 잘라버리기", effect: { pain: +10, rom: -80 }, feedback: "🚨 발바닥 아치가 무너져 평생 일어설 수 없게 만들었습니다!!", isCorrect: false }
      ] 
    },

    // --- STAGE 3 : 입원실 병동 ---
    { id: "s3_1", difficulty: 3, patient: { name: "정은서", age: 31, gender: "여", occupation: "사무직" }, chiefComplaint: "의자에서 일어나는데 허리에서 뚝 소리가 나고 다리가 심하게 저려요.", initialState: { painLevel: 8, rom: 30 }, 
      evaluations: [
        { id: "e1", title: "하지직거상 검사(SLR)", result: "30도 거상 시 엉덩이부터 발끝까지 극심한 방사통 발생(+)." },
        { id: "e2", title: "근력 평가(MMT)", result: "엄지발가락 신전근 배측굴곡 근력 저하 확인(L5 신경근 의심)." },
        { id: "e3", title: "감각 신경 평가(Dermatome)", result: "종아리 외측의 날카로운 감각 저하와 저림 관찰됨." }
      ], 
      treatments: [
        { id: "t1", title: "엎드려 눕기(Prone) 자세로 정적 휴식 부여", effect: { pain: -2, rom: +20 }, feedback: "✨ 복압이 감소하고 디스크 내압이 줄어 통증이 가라앉습니다.", isCorrect: true }, 
        { id: "t2", title: "수핵 중심화를 위한 맥켄지(McKenzie) 신전 운동", effect: { pain: -2, rom: +20 }, feedback: "✨ 후방 돌출된 수핵이 제자리를 찾으며 방사통이 중심화됩니다.", isCorrect: true }, 
        { id: "t3", title: "골반 기울이기 및 복횡근 드로인(Draw-in) 유지", effect: { pain: -2, rom: +20 }, feedback: "✨ 심부 코어가 척추의 자연 복대를 형성합니다.", isCorrect: true }, 
        { id: "t4", title: "스트레칭을 위한 강렬한 요추 굴곡 기구 (윗몸일으키기형)", effect: { pain: +4, rom: -10 }, feedback: "⚠️ 굴곡 상태는 디스크의 후방 탈출과 파열을 가장 가속화시킵니다!", isCorrect: false },
        { id: "t5", title: "누워서 양 다리 번갈아 높이 들기(Leg raise) 반복", effect: { pain: +3, rom: -5 }, feedback: "⚠️ 장요근의 과수축으로 요추 전단력이 발생하며 신경을 자극합니다.", isCorrect: false },
        { id: "t6", title: "허리에 올라타 발로 체중 싣고 밟아주기", effect: { pain: +10, rom: -60 }, feedback: "💀 척추가 두 동강 났습니다! 물리치료사가 아니라 빌런입니까?!", isCorrect: false }
      ] 
    },

    // --- STAGE 4 : 스포츠 센터 ---
    { id: "s4_1", difficulty: 4, patient: { name: "양성윤", age: 28, gender: "남", occupation: "축구선수" }, chiefComplaint: "방향 전환하다가 무릎이 꺾이며 부었어요. 십자인대 같대요.", initialState: { painLevel: 6, rom: 40 }, 
      evaluations: [
        { id: "e1", title: "전방 십자 검사 (Lachman Test)", result: "경골 전방의 과도한 밀림(Soft end-feel). 전방십자인대(ACL) 완전파열 양성(+)." },
        { id: "e2", title: "상해 기전 분석", result: "방향 전환(Pivoting) 중 '뚝' 하는 파열음(Pop sound)과 함께 다리에 힘이 빠짐 호소." },
        { id: "e3", title: "관찰 및 촉진", result: "무릎 관절 안에 심각한 물참(Hemarthrosis)과 열감 발생." }
      ], 
      treatments: [
        { id: "t1", title: "목발 및 무릎 보조기 착용으로 손상 관절 보호 (NWB)", effect: { pain: -2, rom: +15 }, feedback: "✨ 체중 부하를 차단해 이차적 반월상 연골판 손상을 완벽히 방지합니다.", isCorrect: true }, 
        { id: "t2", title: "RICE 프로토콜 (얼음찜질과 거상)", effect: { pain: -1, rom: +15 }, feedback: "✨ 급성 혈관 확장을 막아 무릎의 극심한 부종액 증가가 멈췄습니다.", isCorrect: true }, 
        { id: "t3", title: "대퇴사두근 근위축 방지를 위한 등척성 수축 (Q-setting)", effect: { pain: -1, rom: +20 }, feedback: "✨ 십자인대에 큰 부하를 주지 않고 허벅지 근육의 소실을 훌륭히 예방했습니다.", isCorrect: true }, 
        { id: "t4", title: "근력 회복을 위한 모래주머니 차고 레그 익스텐션 수행", effect: { pain: +4, rom: -10 }, feedback: "⚠️ 경골 전방 전단력이 발생해 봉합 부위나 남은 인대마저 찢어버립니다!", isCorrect: false },
        { id: "t5", title: "혈액 순환을 위한 무릎 전면 70도 초고온 핫팩 적용", effect: { pain: +2, rom: -10 }, feedback: "⚠️ 급성기 열 적용은 내부 출혈을 폭발시켜 타지 않은 염증 부종을 유발합니다.", isCorrect: false },
        { id: "t6", title: "다리를 잡고 무리하게 구부려 발뒤꿈치를 엉덩이에 강제로 찍기", effect: { pain: +10, rom: -40 }, feedback: "⚽ 무릎 관절 자체가 분리되었습니다. 응급수술입니다!!", isCorrect: false }
      ] 
    },

    // --- STAGE 5 : 신경계 병동 ---
    { id: "s5_1", difficulty: 5, patient: { name: "한송화", age: 60, gender: "여", occupation: "주부" }, chiefComplaint: "자고 일어났는데 오른쪽 팔다리가 마비되고 말이 어눌해요.", initialState: { painLevel: 5, rom: 20 }, 
      evaluations: [
        { id: "e1", title: "운동 회복 단계 (Brunnstrom Stage)", result: "Stage 2. 본격적인 경직성 출현, 연합반응(Associated reaction)이 우세한 뇌졸중(MCA infarc) 편마비." },
        { id: "e2", title: "감각 검사", result: "환측 우측 상, 하지의 고유수용성 감각(위치, 움직임 인지) 저하." },
        { id: "e3", title: "근긴장도 검사 (MAS)", result: "우측 팔꿈치 굴곡근 MAS G1+. 수동 스트레칭 시 찌릿한 저항이 잡힘." }
      ], 
      treatments: [
        { id: "t1", title: "욕창 방지를 위한 2시간 간격 바른 체위 수동 변경", effect: { pain: -1, rom: +25 }, feedback: "✨ 감각 저하 부위의 피부 괴사를 막는 신경계 초기 재활의 기본입니다.", isCorrect: true }, 
        { id: "t2", title: "정상 운동발달 단계를 응용한 매트(Mat)에서의 구르기 훈련", effect: { pain: -1, rom: +25 }, feedback: "✨ 체간 근육을 자극하고 뇌 가소성을 일깨웁니다.", isCorrect: true }, 
        { id: "t3", title: "환측(마비측)으로의 능동적 체중 지지(Weight Bearing) 유도", effect: { pain: -1, rom: +20 }, feedback: "✨ 잃어버린 고유수용성 감각을 자극하여 신체 인지 능력을 되살립니다.", isCorrect: true }, 
        { id: "t4", title: "침대 이동 시 환측 팔이나 어깨를 잡고 강하게 끌어당기기", effect: { pain: +4, rom: -10 }, feedback: "⚠️ 아탈구(Subluxation)가 발생하기 쉬운 마비측 관절이 빠지게 됩니다!", isCorrect: false },
        { id: "t5", title: "근력저하 극복을 위해 우측 아령 들기 강제 반복 (보상작용 방치)", effect: { pain: 0, rom: -10 }, feedback: "⚠️ 비정상적인 연합반응과 경직 패턴만 고착화되어 악화됩니다.", isCorrect: false },
        { id: "t6", title: "마비측을 강제로 꺾어 매듭 묶기", effect: { pain: +10, rom: -80 }, feedback: "⚡ 환자 팔이 골절되었습니다! 당장 해고됩니다!", isCorrect: false }
      ] 
    },

    // --- STAGE 6 : 파킨슨 파트 ---
    { id: "s6_1", difficulty: 6, patient: { name: "한동희", age: 70, gender: "남", occupation: "은퇴" }, chiefComplaint: "발이 땅에 붙은 것처럼 안 떨어지고, 손이 벌벌 떨려요.", initialState: { painLevel: 4, rom: 30 }, 
      evaluations: [
        { id: "e1", title: "파킨슨 평가 (Hoehn and Yahr)", result: "Stage 3. 양측성 증상, 구부정한 자세. 톱니바퀴 강직(Cogwheel Rigidity) 확인." },
        { id: "e2", title: "보행 관찰", result: "발을 질질 끄는 종종걸음(Festinating gait) 및 동결보행(Freezing of gait) 관찰." },
        { id: "e3", title: "진전 양상", result: "안정 시 손가락 사이로 알약을 굴리는 듯한 떨림(Resting tremor) 현저함." }
      ], 
      treatments: [
        { id: "t1", title: "몸통 회전(Trunk rotation)을 포함한 교차성 율동 운동", effect: { pain: -1, rom: +20 }, feedback: "✨ 축성 강직을 부드럽게 이완시키고 몸의 회전 가동성을 늘립니다.", isCorrect: true }, 
        { id: "t2", title: "메트로놈을 이용한 리듬 청각 자극(RAS) 보행 훈련", effect: { pain: -1, rom: +20 }, feedback: "✨ 외부 리듬 단서를 통해 뇌 기저핵을 우회하여 동결보행을 타파했습니다.", isCorrect: true }, 
        { id: "t3", title: "동작을 의도적으로 크고 과장하게 하는 LSVT BIG 훈련", effect: { pain: 0, rom: +20 }, feedback: "✨ 동작 과소증(Bradykinesia)을 극복하고 보폭을 정상화시킵니다.", isCorrect: true }, 
        { id: "t4", title: "뻣뻣함을 없애기 위한 강제적인 관절 꺾기 마사지", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 파킨슨 강직은 수동으로 세게 꺾는다고 풀리지 않으며 오히려 염증이 생깁니다.", isCorrect: false },
        { id: "t5", title: "미세한 소근육 단련을 위한 바늘귀 꿰기 집중 세션", effect: { pain: 0, rom: -5 }, feedback: "⚠️ 파킨슨 환자에게 대근육 보행과 회전 운동이 누락되면 급격히 굳어버립니다.", isCorrect: false },
        { id: "t6", title: "환자를 놀래켜 반사적으로 달리게 만들겠다며 귀에 대고 에어혼 발사", effect: { pain: +10, rom: -50 }, feedback: "💥 환자가 앞으로 처참히 고꾸라져 응급실 특실로 이동합니다!", isCorrect: false }
      ] 
    },

    // --- STAGE 7 : 척추측만증 ---
    { id: "s7_1", difficulty: 7, patient: { name: "전수빈", age: 15, gender: "여", occupation: "중학생" }, chiefComplaint: "허리가 S자로 휘어서 등이 한쪽만 볼록하게 튀어나왔어요.", initialState: { painLevel: 5, rom: 50 }, 
      evaluations: [
        { id: "e1", title: "전방 굴곡 검사 (Adam's Forward Bend Test)", result: "숙였을 때 우측 흉추부 늑골고르기(Rib hump) 두드러짐. 구조적 척추측만증." },
        { id: "e2", title: "Cobb's Angle X-ray", result: "흉주 우측 만곡 25도로 보존적 특수 운동(Schroth 등) 적응증." },
        { id: "e3", title: "폐기능 및 흉곽 대칭성", result: "우측이 볼록해지고 비틀리면서 한쪽 폐야의 팽창이 기계적으로 제한됨." }
      ], 
      treatments: [
        { id: "t1", title: "비대칭 흉곽 호흡법(RAB) 및 인지 교육", effect: { pain: -1, rom: +15 }, feedback: "✨ 찌그러진 오목면 폐야를 호흡으로 밀어내며 척추 회전을 방어합니다.", isCorrect: true }, 
        { id: "t2", title: "오목(Concave) 단축면의 근막 신장 유도", effect: { pain: -1, rom: +15 }, feedback: "✨ 불균형한 근육을 늘려 신체 정렬의 토대를 잡습니다.", isCorrect: true }, 
        { id: "t3", title: "기구 척추 자가-신장 (Auto-elongation) 교정", effect: { pain: -1, rom: +10 }, feedback: "✨ 스스로 척추 꼬임을 척추의 수직축으로 풀어냅니다.", isCorrect: true }, 
        { id: "t4", title: "볼록(Convex)면을 강제로 밀어 넣는 무작위 카이로프랙틱 드롭", effect: { pain: +4, rom: -10 }, feedback: "⚠️ 3차원적 회전을 고려하지 않은 압박은 갈비뼈 쇄골의 스트레스를 입힙니다.", isCorrect: false },
        { id: "t5", title: "대칭적이고 무거운 바벨 스쿼트 진행", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 정렬이 틀어진 상태에서의 수직 부하는 비틀림 곡선을 더욱 짜부라뜨립니다.", isCorrect: false },
        { id: "t6", title: "척추 일직선을 맞추기 위해 파이프로 등을 내리치기", effect: { pain: +10, rom: -50 }, feedback: "🩸 극악무도한 범죄 행위로 경찰에 압송됩니다!", isCorrect: false }
      ] 
    },

    // --- STAGE 8 : 노인 인공관절 ---
    { id: "s8_1", difficulty: 8, patient: { name: "정준형", age: 65, gender: "남", occupation: "농부" }, chiefComplaint: "무릎 인공관절(TKR) 수술을 받았는데 붓고 구부려지질 않아요.", initialState: { painLevel: 8, rom: 20 }, 
      evaluations: [
        { id: "e1", title: "수술 후 상태 관찰", result: "TKR 수술 3일차. 능동 굴곡 30도 미만. 열감과 절개선 주변 국소 부종." },
        { id: "e2", title: "통증 척도 측정", result: "가만히 있어도 쑤시고 움직일 때마다 날카로운 통증(VAS 8)." },
        { id: "e3", title: "피부 및 혈전 가능성 (Homan's sign)", result: "음성이나 종아리에 체액이 차 있어 말초 순환 저하 양상 보임." }
      ], 
      treatments: [
        { id: "t1", title: "CPM(지속적수동운동기기)을 이용한 무통 점진 굴곡", effect: { pain: -2, rom: +25 }, feedback: "✨ 관절 유착을 방지하고 부드럽게 기계적 굴곡 스펙트럼을 늘립니다.", isCorrect: true }, 
        { id: "t2", title: "침상 내 발목 펌핑 훈련(Ankle pump) 수시 시행 지시", effect: { pain: -2, rom: +20 }, feedback: "✨ 종아리 근육이 심장으로 피를 짜주어 치명적인 정맥혈전(DVT)을 예방합니다.", isCorrect: true }, 
        { id: "t3", title: "무릎 주변 아이스팩 및 다리 심장 높이 이상 거상", effect: { pain: -2, rom: +25 }, feedback: "✨ 열감과 붓기를 확실히 가라앉혀 통증을 빠르게 제압합니다.", isCorrect: true }, 
        { id: "t4", title: "수동 관절 가동술(Gr 4)로 무릎 강하게 꺾기 억지로 시도", effect: { pain: +5, rom: -10 }, feedback: "⚠️ 인공관절 삽입부 조직이 버티지 못하고 터져버립니다!", isCorrect: false },
        { id: "t5", title: "혈액순환을 위한 인공관절 심부 특수 열치료 (초단파)", effect: { pain: +4, rom: -5 }, feedback: "⚠️ 금속 삽입물은 심부열을 극대화 흡수하여 뼈 내부로 화상을 초래합니다!", isCorrect: false },
        { id: "t6", title: "관절 부품 삐걱거리지 말라고 공업용 윤활유 뿌려주기", effect: { pain: +10, rom: -80 }, feedback: "🛢️ 패혈증 및 인공관절 부식으로 영구 절단 위기입니다!", isCorrect: false }
      ] 
    },

    // --- STAGE 9 : 소아 특수 ---
    { id: "s9_1", difficulty: 9, patient: { name: "조아영", age: 5, gender: "여", occupation: "단골 꼬마환자" }, chiefComplaint: "다리가 뻗뻗해지고 자꾸 까치발로 걷다 넘어져요.", initialState: { painLevel: 3, rom: 40 }, 
      evaluations: [
        { id: "e1", title: "경직성 스케일 측정 (MAS)", result: "양측 하지경직성 보행. 슬관절 및 아킬레스건 MAS G2+. 족저굴곡 구축." },
        { id: "e2", title: "GMFCS 수준 파악", result: "Level 2. 실내 평지 자력 보행 가능하나 고르지 않은 길에서 균형 금방 잃음." },
        { id: "e3", title: "비정상 반사 유무 확인", result: "뻗침 반사(Extensor thrust)가 비정상적으로 우세하여 자극 시 까치발 강화." }
      ], 
      treatments: [
        { id: "t1", title: "관절 압박(Approximation)하며 짐볼 위 율동적 바운싱", effect: { pain: 0, rom: +20 }, feedback: "✨ 지속적이고 일정한 리드미컬 움직임이 근방추 고긴장성을 억제합니다.", isCorrect: true }, 
        { id: "t2", title: "장난감을 이용해 코어 회전 장려 및 상하 분리 유도", effect: { pain: 0, rom: +15 }, feedback: "✨ 아이의 집중을 놀이로 유도하면서 교차 패턴 가소성을 촉진합니다.", isCorrect: true }, 
        { id: "t3", title: "까치발 방지를 위한 정적 스트레칭 보드 세워두기", effect: { pain: -1, rom: +15 }, feedback: "✨ 짧아진 비복근 구조의 적응적 지연 효과를 얻습니다.", isCorrect: true }, 
        { id: "t4", title: "통증이 오게 체중으로 종아리 지그시 뭉개버리기", effect: { pain: +4, rom: -20 }, feedback: "⚠️ 뇌성마비 환아에게 통증 유발은 반사적 긴장도(Spasticity)를 극도로 악화시킵니다!", isCorrect: false },
        { id: "t5", title: "근력 강화를 위해 다리에 무거운 모래주머니 매달아두기", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 약화와 경직에 과부하는 비정상 대상 작용만 키웁니다.", isCorrect: false },
        { id: "t6", title: "까치발 한다고 아이 다리에 강력 본드 바르기", effect: { pain: +10, rom: -80 }, feedback: "💀 아동 학대로 경찰청에 즉시 체포됩니다!! 삐뽀삐뽀!!", isCorrect: false }
      ] 
    },

    // --- STAGE 10 : 한계 초월 등급 (복합 화상 중환자) ---
    { id: "s10_1", difficulty: 10, patient: { name: "이소방", age: 24, gender: "남", occupation: "용감한 소방관" }, chiefComplaint: "전신 화상 흉터가 굳어져서 목 관절조차 움직이지 않아요.", initialState: { painLevel: 10, rom: 10 }, 
      evaluations: [
        { id: "e1", title: "피부 구축 정도 파악", result: "전신의 심각한 비후성 반흔(Hypertrophic scar). 90% 관절 굴곡위축 진행." },
        { id: "e2", title: "피부 연부 조직의 탄성과 취약성 분석", result: "이식피부(Graft) 부위에 땀샘/피지샘이 없어 극건조하며 작은 마찰에 찢어짐." },
        { id: "e3", title: "심리 및 통증 양상 면담", result: "외상후스트레스증후군(PTSD)과 터치에 대한 극도의 통각 과민으로 울부짖음." }
      ], 
      treatments: [
        { id: "t1", title: "저강도 지속적 장시간 신장법 (LLLD)", effect: { pain: -3, rom: +30 }, feedback: "✨ 교원섬유의 소성변형(Plastic deformation)을 안전하게 서서히 이끌어냈습니다.", isCorrect: true }, 
        { id: "t2", title: "수분을 가득 바른 반흔 조직 특수 마찰 마사지", effect: { pain: -3, rom: +30 }, feedback: "✨ 유착콜라겐을 부드럽게 이완시키고 이식 피부의 찢어짐을 예방합니다.", isCorrect: true }, 
        { id: "t3", title: "압박복(Pressure garment) 맞춤 처방 및 착용 교육", effect: { pain: -2, rom: +20 }, feedback: "✨ 24시간 균일한 압박이 비후성 반흔의 무절제한 팽창을 억제합니다.", isCorrect: true }, 
        { id: "t4", title: "구축을 끊어내기 위한 강력하고 짧은 고강도 꺾기 신장기법", effect: { pain: +5, rom: -20 }, feedback: "⚠️ 피부 이식판이 번뜩 박살나면서 출혈이 발생합니다! 오답!", isCorrect: false },
        { id: "t5", title: "조직 연화를 위해 화상 부위에 70도 급속 온수 핫팩 배치", effect: { pain: +6, rom: -30 }, feedback: "⚠️ 피부 장벽과 감각이 망가진 상태에서 3도 심재성 화상을 추가로 입힙니다!", isCorrect: false },
        { id: "t6", title: "거친 이태리 때수건으로 화상 부위를 박박 문지르기", effect: { pain: +10, rom: -80 }, feedback: "💀 피부가 적나라하게 패이고 패혈증 감염... 환자가 쇼크로 스러졌습니다!! 최악입니다!!", isCorrect: false }
      ] 
    }
];

window.appData.vocabulary = [
    { term: "Anterior Cruciate Ligament (ACL)", definition: "전방십자인대. 대퇴골에 대해 경골이 앞으로 밀리는 것을 방지하는 무릎의 주요 인대." },
    { term: "Range of Motion (ROM)", definition: "관절가동범위. 관절이 정상적으로 움직일 수 있는 각도의 범위." },
    { term: "Spasticity", definition: "경직. 추체로계 손상으로 인해 근긴장도가 속도 의존적으로 증가하는 현상." },
    { term: "Rigidity", definition: "강직. 추체외로계 손상(예: 파킨슨병)으로 인한 주동근과 길항근의 지속적인 수축으로 나타나는 관절의 뻣뻣함." },
    { term: "Activities of Daily Living (ADL)", definition: "일상생활활동. 식사, 옷입기, 목욕 등 개인이 매일 수행하는 기본적인 자조 활동." },
    { term: "Transcutaneous Electrical Nerve Stimulation (TENS)", definition: "경피신경전기자극. 관문통제이론을 바탕으로 피부 표면을 통해 신경을 자극하여 통증을 조절하는 기기." },
    { term: "Isometric Exercise", definition: "등척성 운동. 근육의 길이 변화나 관절의 움직임 없이 장력만 발생시키는 수축." },
    { term: "Isokinetic Exercise", definition: "등속성 운동. 특수 장비를 사용하여 모든 ROM에서 동작 속도를 일정하게 유지하면서 최대 저항을 가하는 운동." },
    { term: "Centralization", definition: "중심화 현상. 방사통이 있는 환자에서 특정 운동이나 자세에 의해 통증 부위가 척추 중심부로 이동하며 줄어드는 현상." },
    { term: "Drop Foot", definition: "발처짐. 비골신경 마비나 전경골근 약화로 인해 보행 시 유각기에서 발목 배측굴곡이 되지 않아 발이 떨어지는 현상." },
    { term: "Ataxia", definition: "운동실조증. 소뇌 손상 등으로 인해 근육 운동의 조화가 상실되어 서투르고 부정확한 움직임이 나타나는 상태." },
    { term: "Contracture", definition: "구축. 연부조직(근육, 건, 인대 등)의 비정상적인 단축으로 관절가동범위가 영구적으로 제한되는 상태." }
];

// 각 라운드마다 다양한 이름의 환자가 최소 3명이 될 수 있도록 자동 클론 생성
(function() {
    const randomNames = ["김민수", "이지은", "박서준", "최유리", "정우성", "강태오", "윤보미", "장동건", "조현아", "임영웅", "한지민", "황정민", "서현진", "오연서", "문근영", "유재석", "아이유", "현빈"];
    const randomOccupations = ["유튜버", "개발자", "교사", "배달원", "제빵사", "디자이너", "경찰관", "은행원", "음악가", "목수", "대학원생"];
    let extraIdCounter = 1;

    for (let diff = 1; diff <= 10; diff++) {
        const diffCases = window.appData.simulation.filter(s => s.difficulty === diff);
        let needed = 3 - diffCases.length;
        if (needed > 0 && diffCases.length > 0) {
            for (let i = 0; i < needed; i++) {
                const template = diffCases[i % diffCases.length];
                const newCase = JSON.parse(JSON.stringify(template));
                newCase.id = 's' + diff + '_extra_' + (extraIdCounter++);
                
                const rnIdx = Math.floor(Math.random() * randomNames.length);
                const roIdx = Math.floor(Math.random() * randomOccupations.length);
                newCase.patient.name = randomNames[rnIdx];
                newCase.patient.gender = (rnIdx % 2 === 0) ? "남" : "여";
                newCase.patient.age = Math.floor(Math.random() * 50) + 20;
                newCase.patient.occupation = randomOccupations[roIdx];
                
                newCase.chiefComplaint = "(최근 호소됨) " + template.chiefComplaint;
                
                window.appData.simulation.push(newCase);
            }
        }
    }
})();
