const fs = require('fs');

const path = 'c:/ai/pt-exam-app/js/data.js';
let content = fs.readFileSync(path, 'utf8');

// Extract the appData.simulation array using regex
const simMatch = content.match(/window\.appData\.simulation\s*=\s*(\[[\s\S]*?\]);\s*window\.appData\.vocabulary/);

if (!simMatch) {
    console.error("Could not find simulation array in data.js");
    process.exit(1);
}

const simArrayString = simMatch[1];
const simData = eval(`(${simArrayString})`);

const randomNames = ["김민수", "이지은", "박서준", "최유리", "정우성", "강태오", "윤보미", "장동건", "조현아", "임영웅", "한지민", "황정민", "서현진"];
const randomOccupations = ["유튜버", "개발자", "교사", "배달원", "요리사", "디자이너", "경찰관", "은행원", "음악가", "목수"];

let extraIdCounter = 1;

for (let diff = 1; diff <= 10; diff++) {
    const diffCases = simData.filter(s => s.difficulty === diff);
    let needed = 3 - diffCases.length;
    
    if (needed > 0 && diffCases.length > 0) {
        for (let i = 0; i < needed; i++) {
            const template = diffCases[i % diffCases.length];
            const newCase = JSON.parse(JSON.stringify(template));
            
            // Mutate id
            newCase.id = `s${diff}_extra_${extraIdCounter++}`;
            
            // Mutate patient
            newCase.patient.name = randomNames[Math.floor(Math.random() * randomNames.length)];
            newCase.patient.age = Math.floor(Math.random() * 50) + 20;
            newCase.patient.occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
            
            // Slightly tweak chiefComplaint
            newCase.chiefComplaint = "(비슷한 증상) " + template.chiefComplaint;
            
            simData.push(newCase);
        }
    }
}

// Convert back to string
const newSimArrayString = JSON.stringify(simData, null, 4);

// Replace in file
const newContent = content.replace(simArrayString, newSimArrayString);
fs.writeFileSync(path, newContent, 'utf8');

console.log("Successfully expanded simulation array to ensure 3 patients per stage!");
