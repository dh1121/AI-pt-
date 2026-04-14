const fs = require('fs');
const file = 'c:/ai/pt-exam-app/js/data.js';
let content = fs.readFileSync(file, 'utf8');

const names = ["양성윤", "정준형", "한송화", "전수빈", "한동희", "정은서"];
let nameIdx = 0;

// Replace all patient.name values
content = content.replace(/name: "[^"]+"/g, (match) => {
    const newName = names[nameIdx % names.length];
    nameIdx++;
    return `name: "${newName}"`;
});

const vocabStr = `

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
`;

content += vocabStr;

fs.writeFileSync(file, content, 'utf8');
console.log('updated data.js');
