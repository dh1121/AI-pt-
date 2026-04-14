window.appComponents = {
    buildStatCard(title, value, icon) {
        return `
            <div class="stat-card">
                <i data-lucide="${icon}"></i>
                <div class="text-muted">${title}</div>
                <div class="stat-value">${value}</div>
            </div>
        `;
    },

    buildQuestionCard(questionObj, selectedIndex = null, showAnswer = false, shortAnswerInputValue = '') {
        let imageHtml = '';
        if (questionObj.image) {
            imageHtml = `
                <div style="text-align: center; margin-bottom: 1.5rem; margin-top: 1rem;">
                    <img src="${questionObj.image}" alt="Question Image" style="max-width: 100%; max-height: 280px; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
                </div>
            `;
        }

        let inputHtml = '';
        if (questionObj.type === 'short-answer') {
            let inputClasses = 'form-control';
            let validationMsg = '';
            
            if (showAnswer) {
                const answerUser = (shortAnswerInputValue || '').trim().replace(/\s+/g, '').toUpperCase();
                const answerCorrect = (questionObj.correctAnswer || '').trim().replace(/\s+/g, '').toUpperCase();
                // Simple validation allowing partial matching or exact
                const isCorrect = (answerUser === answerCorrect) || (answerCorrect.includes(answerUser) && answerUser.length >= 2);
                
                if (isCorrect) {
                     inputClasses += ' correct';
                     validationMsg = `<div style="margin-top: 0.5rem; color: var(--success); font-weight: 600;">✅ 정답입니다!</div>`;
                } else {
                     inputClasses += ' wrong';
                     validationMsg = `<div style="margin-top: 0.5rem; color: var(--danger); font-weight: 600;">❌ 내 답안: ${shortAnswerInputValue || '(입력 안함)'} <br>✅ 정답: ${questionObj.correctAnswer}</div>`;
                }
            }

            inputHtml = `
                <style>
                    .form-control { width: 100%; padding: 1rem; border: 2px solid var(--border); border-radius: var(--radius-md); font-size: 1rem; transition: all 0.2s; }
                    .form-control:focus { outline: none; border-color: var(--primary-blue); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
                    .form-control.correct { border-color: var(--success); background: #ecfdf5; color: #065f46; }
                    .form-control.wrong { border-color: var(--danger); background: #fef2f2; color: #991b1b; }
                </style>
                <div style="margin-top: 1.5rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.75rem; color: var(--text-main);">정답 입력 (단답형/서술형):</label>
                    <input type="text" id="short-answer-input" class="${inputClasses}" placeholder="여기에 정답을 입력하세요..." value="${shortAnswerInputValue}" ${showAnswer ? 'readonly' : ''} autocomplete="off" autocorrect="off">
                    ${validationMsg}
                </div>
            `;
        } else {
            // Multiple Choice
            let optionsHtml = '';
            const optionsToRender = questionObj.shuffledOptions || questionObj.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
            
            optionsToRender.forEach((optObj, idx) => {
                let classes = 'option-btn';
                const originalIdx = optObj.originalIndex;
                
                if (showAnswer) {
                    if (originalIdx === questionObj.correctIndex) {
                        classes += ' correct';
                    } else if (originalIdx === selectedIndex) {
                        classes += ' wrong';
                    }
                } else {
                    if (originalIdx === selectedIndex) {
                        classes += ' selected';
                    }
                }
                
                let disabledAttr = showAnswer ? 'disabled' : '';
                optionsHtml += '<button class="' + classes + '" data-index="' + originalIdx + '" ' + disabledAttr + '>' + (idx + 1) + '. ' + optObj.text + '</button>';
            });
            inputHtml = `<div class="options-container mt-4" style="margin-top: 1.5rem;">${optionsHtml}</div>`;
        }

        let explanationHtml = '';
        if (showAnswer) {
            explanationHtml = `
                <div style="margin-top: 1.5rem; padding: 1.25rem; background: #e0f2fe; border-radius: var(--radius-md); border-left: 4px solid var(--primary-blue);">
                    <h4 class="text-primary" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="info" style="width: 18px; height: 18px;"></i> 해설</h4>
                    <p style="color: var(--text-main); font-size: 0.95rem; line-height: 1.6;">${questionObj.explanation}</p>
                </div>
            `;
        }

        return `
            <div class="glass-card">
                <div class="question-header">
                    <span class="badge">${questionObj.subject}</span>
                    ${questionObj.type === 'short-answer' ? '<span class="badge" style="background:#fef3c7; color:#b45309; margin-left:0.5rem;">단답/서술형</span>' : ''}
                </div>
                <h3 style="line-height: 1.4;">${questionObj.question}</h3>
                ${imageHtml}
                ${inputHtml}
                ${explanationHtml}
            </div>
        `;
    }
};
