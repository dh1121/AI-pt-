const fs = require('fs');

let content = fs.readFileSync('c:\\ai\\pt-exam-app\\js\\data.js', 'utf8');

// Find the bad block in s9_1
let fix = `        { id: "t5", title: "다리에 무거운 모래주머니 5kg씩 매달고 걷기 강요", effect: { pain: +3, rom: -10 }, feedback: "⚠️ 약화와 경직이 동반된 소아에게 과부하는 비정상 보상 작용만 키웁니다.", isCorrect: false },
        { id: "t6", title: "짐볼 위에 묶은 다음 볼링공처럼 세게 굴려서 스트라이크 치기", effect: { pain: +10, rom: -50 }, feedback: "🎳 당신은 악마입니다... 소아학대죄 및 살인미수로 영구 격리됩니다!!", isCorrect: false }
      ] 
    },
    // --- STAGE 10 : 극한/초월 등급 (화상 중환자) ---
    { id: "s10_2", difficulty: 10, patient: { name: "정은서", age: 24, gender: "남", occupation: "소방관" }, chiefComplaint: "전신 2~3도 화상 후유증으로 피부 반흔이 굳어져 관절이 안 움직입니다.", initialState: { painLevel: 10, rom: 10 }, 
      evaluations: [
        { id: "e1", title: "피부 구축도 및 탄력 검사", result: "비후성 반흔(Hypertrophic scar)으로 인한 심각한 피부 구축. 거의 모든 관절이 굴곡성 구축 상태." },
        { id: "e2", title: "연부 조직 민감도 파악", result: "이식된 피부판(Graft)이 땀샘 소실로 매우 건조하고 물리적 장력에 쉽게 찢어지는 취약한 상태." },
        { id: "e3", title: "환자 심리 상태 문진", result: "화재에 대한 공포(PTSD)와 지속된 통증으로 물리치료사가 터치하는 것 자체에 과호흡 발작을 보임." }
      ], 
      treatments: [
        { id: "t1", title: "저강도 지속적 신장법(LLLD - Low Load Prolonged Stretch)", effect: { pain: -3, rom: +30 }, feedback: "✨ 교원섬유의 소성변형(Plastic deformation)을 안전하게 유도했습니다.", isCorrect: true }, 
        { id: "t2", title: "수성 로션을 바른 반흔 조직 마찰 마사지", effect: { pain: -3, rom: +30 }, feedback: "✨ 수분을 공급하고 콜라겐 유착을 풀어 관절 범위를 부드럽게 엽니다.", isCorrect: true }, 
        { id: "t3", title: "압박복(Pressure garment) 맞춤형 처방 교육", effect: { pain: -2, rom: +20 }, feedback: "✨ 24시간 균일한 압막으로 비후성 반흔이 더 부풀어오르는 것을 억제합니다.", isCorrect: true }, 
        { id: "t4", title: "구축을 끊어내기 위한 강력하고 짧은 고강도 신장기법(HBLD)", effect: { pain: +5, rom: -20 }, feedback: "⚠️ 고강도 방사형 신장은 피부 이식판을 번뜩 박살냅니다!", isCorrect: false },
        { id: "t5", title: "혈류 촉진을 위한 전신 고온 온열치료(Hot pack 75도 유지)", effect: { pain: +6, rom: -30 }, feedback: "⚠️ 손상된 감각과 피부 조직에 피드백 없이 고온을 가해 3도 재화상을 입혔습니다!", isCorrect: false },
        { id: "t6", title: "때수건으로 화상 피부와 흉터를 벅벅 긁어내서 시원하게 해주기", effect: { pain: +10, rom: -80 }, feedback: "💀 피부 장벽 통째 파괴로 2차 패혈증 감염! 치료실이 아비규환입니다!!", isCorrect: false }
      ] 
    }
];`;

content = content.replace(/\{ id: "t5", title: "혈류 촉진을 위한 전신 고온 온열치료.*\n.*\n.*\n    \n\];/gm, fix);

fs.writeFileSync('c:\\ai\\pt-exam-app\\js\\data.js', content, 'utf8');
console.log('Fixed data.js');
