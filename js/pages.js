window.appPages = {
    renderHome(container) {
        const stats = window.appStorage.getAnalytics();
        const wrongNotes = window.appStorage.getWrongNotes();
        
        container.innerHTML = `
            <div class="card text-center" style="margin-bottom: 2rem; background: linear-gradient(to right, var(--primary-blue), var(--primary-light)); color: white; padding: 3rem 1.5rem; border-radius: var(--radius-lg);">
                <h1 style="color: white; font-size: 2rem; margin-bottom: 1rem;">PT패스 - 국가고시 합격의 길</h1>
                <p style="opacity: 0.9; margin-bottom: 1.5rem;">오늘도 목표를 향해 달려볼까요?</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button id="start-btn" class="btn" style="background: white; color: var(--primary-blue); font-size: 1.1rem; padding: 1rem 2rem;">
                        📝 모의고사 풀기 (30문항)
                    </button>
                    <button id="sim-btn-home" class="btn" style="background: #fb7185; color: white; font-size: 1.1rem; padding: 1rem 2rem; border: none; box-shadow: var(--shadow-md);">
                        🎮 V-임상실습 롤플레잉 게임
                    </button>
                </div>
            </div>
            
            <h2 class="text-primary mt-4" style="margin-top: 2rem; margin-bottom: 1rem;">현재 나의 학습 현황</h2>
            <div class="dashboard-grid">
                ${window.appComponents.buildStatCard('총 푼 문제수', stats.totalAttempted + '개', 'check-square')}
                ${window.appComponents.buildStatCard('전체 정답수', stats.correctAnswers + '개', 'award')}
                ${window.appComponents.buildStatCard('복습이 필요한 오답', wrongNotes.length + '개', 'book-open')}
            </div>
        `;

        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                window.appRouter.navigate('quiz');
            });
        }
        
        const simBtnHome = document.getElementById('sim-btn-home');
        if (simBtnHome) {
            simBtnHome.addEventListener('click', () => {
                window.appRouter.navigate('simulation');
            });
        }
    },

    renderStudyCenter(container) {
        container.innerHTML = `
            <div style="animation: fadeIn 0.3s;">
                <h2 class="text-primary mb-4" style="text-align: center; margin-top: 1rem;">📖 학습 센터</h2>
                <p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;">원하는 학습 모드를 선택하세요.</p>
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    <div class="card stat-card" style="cursor: pointer; transition: transform 0.2s; text-align: center;" onclick="window.appRouter.navigate('quiz')">
                        <i data-lucide="book-open" style="width: 48px; height: 48px; color: var(--primary-blue); margin-bottom: 1rem; display: inline-block;"></i>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">기출 모의고사</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">실전처럼 30문항을 풀어보며<br>실력을 점검하세요.</p>
                    </div>
                    <div class="card stat-card" style="cursor: pointer; transition: transform 0.2s; text-align: center;" onclick="window.appRouter.navigate('vocabulary')">
                        <i data-lucide="layers" style="width: 48px; height: 48px; color: var(--primary-dark); margin-bottom: 1rem; display: inline-block;"></i>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">필수 단어장</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">필수 의학 용어를 플래시카드로<br>무한 반복 학습합니다.</p>
                    </div>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    },

    renderRecords(container) {
        container.innerHTML = `
            <div style="animation: fadeIn 0.3s;">
                <h2 class="text-primary mb-4" style="text-align: center; margin-top: 1rem;">📊 내 기록</h2>
                <p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;">학습 성과를 분석하고 취약점을 보완하세요.</p>
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    <div class="card stat-card" style="cursor: pointer; transition: transform 0.2s; text-align: center;" onclick="window.appRouter.navigate('analytics')">
                        <i data-lucide="bar-chart-2" style="width: 48px; height: 48px; color: var(--success); margin-bottom: 1rem; display: inline-block;"></i>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">성적 분석</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">과목별 정답률과<br>학습 진행률을 확인합니다.</p>
                    </div>
                    <div class="card stat-card" style="cursor: pointer; transition: transform 0.2s; text-align: center;" onclick="window.appRouter.navigate('review')">
                        <i data-lucide="edit-3" style="width: 48px; height: 48px; color: #f59e0b; margin-bottom: 1rem; display: inline-block;"></i>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">오답 노트</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">틀렸던 기출문제들을 모아서<br>다시 풀어볼 수 있습니다.</p>
                    </div>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    },

    renderQuiz(container) {
        let currentIndex = 0;
        let selectedIndex = null;
        let shortAnswerValue = '';
        let isAnswered = false;
        
        // Randomly select 30 questions each time the quiz starts
        const NUM_QUESTIONS = 30;
        const allQuestions = JSON.parse(JSON.stringify(window.appData.questions)); // Deep copy to avoid mutating global safely
        
        // Fisher-Yates Shuffle for Questions
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        
        const questions = allQuestions.slice(0, Math.min(NUM_QUESTIONS, allQuestions.length));

        // Setup options shuffling per question
        questions.forEach(q => {
            if (q.type !== 'short-answer' && q.options) {
                let opts = q.options.map((text, idx) => ({ text, originalIndex: idx }));
                // Shuffle options
                for (let i = opts.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [opts[i], opts[j]] = [opts[j], opts[i]];
                }
                q.shuffledOptions = opts;
            }
        });

        const renderCurrentQuestion = () => {
            if (currentIndex >= questions.length) {
                // Quiz Finished
                container.innerHTML = `
                    <div class="card text-center" style="padding: 4rem 2rem;">
                        <i data-lucide="check-circle" style="width: 80px; height: 80px; color: var(--success); margin-bottom: 1.5rem; display: inline-block;"></i>
                        <h2 class="text-primary mb-2">모든 문제를 풀었습니다!</h2>
                        <p class="mb-4 text-muted">성적 분석 페이지에서 결과를 확인해보세요.</p>
                        <div style="margin-top: 2rem;">
                            <button class="btn" onclick="window.appRouter.navigate('analytics')">성적 분석 보기</button>
                            <button class="btn btn-secondary" style="margin-left: 0.5rem;" onclick="window.appRouter.navigate('review')">오답 노트 확인</button>
                        </div>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
                return;
            }

            const q = questions[currentIndex];
            const progressPct = ((currentIndex) / questions.length) * 100;

            const isSubmitDisabled = (q.type === 'short-answer') ? (shortAnswerValue.trim() === '') : (selectedIndex === null);

            container.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-muted);">
                    <span>진행 상황</span>
                    <span>${currentIndex + 1} / ${questions.length}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressPct}%"></div>
                </div>
                
                <div id="question-wrapper" style="margin-top: 2rem;">
                    ${window.appComponents.buildQuestionCard(q, selectedIndex, isAnswered, shortAnswerValue)}
                </div>
                
                <div style="margin-top: 1.5rem; text-align: right;">
                    ${isAnswered 
                        ? `<button id="next-btn" class="btn">다음 문제 <i data-lucide="arrow-right"></i></button>` 
                        : `<button id="submit-btn" class="btn" ${isSubmitDisabled ? 'disabled' : ''}>정답 확인</button>`
                    }
                </div>
            `;
            
            if (window.lucide) window.lucide.createIcons();

            // Attach Listeners
            if (!isAnswered) {
                if (q.type === 'short-answer') {
                    const inputEl = container.querySelector('#short-answer-input');
                    if (inputEl) {
                        // Maintain focus and track typing
                        inputEl.focus();
                        const len = inputEl.value.length;
                        inputEl.setSelectionRange(len, len);
                        
                        inputEl.addEventListener('input', (e) => {
                            shortAnswerValue = e.target.value;
                            const btn = document.getElementById('submit-btn');
                            if (btn) btn.disabled = (shortAnswerValue.trim() === '');
                        });
                        
                        inputEl.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter' && shortAnswerValue.trim() !== '') {
                                document.getElementById('submit-btn').click();
                            }
                        });
                    }
                } else {
                    const optionBtns = container.querySelectorAll('.option-btn');
                    optionBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            selectedIndex = parseInt(e.currentTarget.dataset.index);
                            renderCurrentQuestion();
                        });
                    });
                }
            }

            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn && !isAnswered) {
                submitBtn.addEventListener('click', () => {
                    isAnswered = true;
                    
                    let isCorrect = false;
                    if (q.type === 'short-answer') {
                        const answerUser = (shortAnswerValue || '').trim().replace(/\s+/g, '').toUpperCase();
                        const answerCorrect = (q.correctAnswer || '').trim().replace(/\s+/g, '').toUpperCase();
                        isCorrect = (answerUser === answerCorrect) || (answerCorrect.includes(answerUser) && answerUser.length >= 2);
                    } else {
                        isCorrect = (selectedIndex === q.correctIndex);
                    }

                    window.appStorage.updateAnalytics(q.subject, isCorrect);
                    
                    if (!isCorrect) {
                        window.appStorage.addWrongNote(q.id);
                    }
                    
                    renderCurrentQuestion();
                });
            }

            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentIndex++;
                    selectedIndex = null;
                    shortAnswerValue = '';
                    isAnswered = false;
                    renderCurrentQuestion();
                });
            }
        };

        renderCurrentQuestion();
    },

    renderReview(container) {
        const wrongNoteIds = window.appStorage.getWrongNotes();
        const allQuestions = window.appData.questions;
        const wrongQuestions = allQuestions.filter(q => wrongNoteIds.includes(q.id));

        if (wrongQuestions.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i data-lucide="smile" style="display: inline-block;"></i>
                    <h2 style="margin-top: 1rem; margin-bottom: 0.5rem;">저장된 오답이 없습니다.</h2>
                    <p>정말 잘하고 계시네요! 계속 이렇게 풀어나가세요.</p>
                </div>
            `;
            return;
        }

        let listHtml = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">오답 노트</h2>
                <span class="badge" style="background: var(--danger); color: white;">총 ${wrongQuestions.length}문항</span>
            </div>
        `;

        wrongQuestions.forEach((q) => {
            // Re-use component but force it to show answer (simulate correct selection so it highlights green)
            // For short answer, inject the direct correct answer as the user's input so it marks green.
            const dummyShortAnswer = q.type === 'short-answer' ? q.correctAnswer : '';
            // For multichoice, we pass null as selectedIndex to show correct answer only
            
            // Note: need to ensure shuffledOptions isn't strictly required or just use natural
            if (!q.shuffledOptions && q.type !== 'short-answer') {
                 q.shuffledOptions = q.options.map((t, i) => ({ text: t, originalIndex: i }));
            }

            listHtml += `
                <div style="margin-bottom: 2rem; position: relative;" class="review-item">
                    ${window.appComponents.buildQuestionCard(q, null, true, dummyShortAnswer)}
                    <div style="text-align: right; margin-top: -1.5rem; padding-right: 1.5rem; position: relative; z-index: 10;">
                        <button class="btn btn-secondary btn-remove text-sm" data-id="${q.id}" style="padding: 0.5rem 1rem; border-color: var(--danger); color: var(--danger);">
                            해결 완료 (목록에서 제거) <i data-lucide="x" style="width:16px;height:16px;"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        container.innerHTML = listHtml;

        // Attach remove events
        const removeBtns = container.querySelectorAll('.btn-remove');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                window.appStorage.removeWrongNote(id);
                // Re-render
                window.appPages.renderReview(container);
                if (window.lucide) window.lucide.createIcons();
            });
        });
    },

    renderVocabulary(container) {
        let vocab = [...(window.appData.vocabulary || [])];
        let viewMode = 'all'; // 'all' or 'unknown'
        let currentIndex = 0;
        let isFlipped = false;
        let displayVocab = [];
        let failedAttempts = 0;
        let hasSeenAnswer = false;
        
        const renderHeader = () => {
            // 무한 반복 학습 모드: 아직 맞히지 못한 단어만 계속 보여줍니다.
            const knownWords = window.appStorage.getKnownWords();
            displayVocab = vocab.filter(v => !knownWords.includes(v.term));
            
            let headerHtml = `
                <div style="margin-bottom: 2rem; background: white; padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center;">
                    <h2 style="color: var(--primary-dark); margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="layers" style="width: 28px; height: 28px;"></i> 무한 반복 단어 학습
                    </h2>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">틀리거나 힌트를 본 단어는 모두 맞출 때까지 계속 반복해서 등장합니다!</p>
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-secondary btn-sm" onclick="document.getElementById('shuffle-vocab-btn').click()">
                             <i data-lucide="shuffle"></i> 남은 단어 셔플
                        </button>
                        <button class="btn btn-sm" style="background: #f43f5e; color: white; border: none;" onclick="if(confirm('학습 기록을 완전히 초기화하고 모든 단어를 처음부터 다시 학습하시겠습니까?')) { window.appStorage.set('pt_exam_known_words', []); window.appPages.renderVocabulary(document.getElementById('main-content')); }">
                             <i data-lucide="rotate-ccw"></i> 처음부터 다시 시작
                        </button>
                    </div>
                </div>
            `;
            return headerHtml;
        };

        const renderCardArea = () => {
            if (displayVocab.length === 0) {
                return `
                    <div class="empty-state" style="animation: fadeIn 0.5s;">
                        <span style="font-size: 4rem; display: block; margin-bottom: 1rem;">🎉</span>
                        <h2 style="margin-top: 1rem; color: var(--success);">모든 단어를 완벽하게 외웠습니다!</h2>
                        <p>정말 훌륭합니다! 이제 다른 학습을 진행하거나, 상단의 초기화 버튼을 눌러 다시 복습해보세요.</p>
                    </div>`;
            }

            if (currentIndex >= displayVocab.length) currentIndex = 0; // reset
            const v = displayVocab[currentIndex];
            const isKnown = knownWords.includes(v.term);
            const progressPct = ((currentIndex + 1) / displayVocab.length) * 100;

            return `
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; color: var(--text-muted); font-weight: 500;">
                        <span>학습 진행도</span>
                        <span>${currentIndex + 1} / ${displayVocab.length}</span>
                    </div>
                    <div class="progress-container" style="background: rgba(0,0,0,0.1); height: 6px;">
                        <div class="progress-bar" style="width: ${progressPct}%; background: var(--primary-blue);"></div>
                    </div>
                    
                    <div class="vocab-single-container" id="vocab-card-wrapper">
                        <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="main-flashcard">
                            <div class="flashcard-inner">
                                <div class="flashcard-front" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <h3 style="font-size: 1.4rem; padding: 0 1rem; line-height: 1.5; color: var(--text-main); font-weight: 600;">${v.definition}</h3>
                                    
                                    <div style="margin-top: 2rem; width: 100%; max-width: 450px; display: flex; flex-direction: column; align-items: center;" onclick="event.stopPropagation();">
                                        <div style="display: flex; gap: 0.5rem; width: 100%;">
                                            <input type="text" id="vocab-spell-input" class="form-control" placeholder="영어 단어를 입력하세요" autocomplete="off" autofocus style="text-align: center; font-size: 1.2rem; font-weight: bold; border: 2px solid var(--border); border-radius: 8px; padding: 0.8rem; width: 100%; transition: all 0.3s;">
                                            <button id="vocab-check-btn" class="btn" style="white-space: nowrap; padding: 0.8rem 1.5rem; border-radius: 8px;">정답 확인</button>
                                        </div>
                                        <div id="vocab-feedback-msg" style="margin-top: 1rem; height: 1.5rem; font-weight: bold; font-size: 1.1rem; opacity: 0; transition: opacity 0.3s;"></div>
                                    </div>

                                    <span class="hint" style="margin-top: 1.5rem; cursor: pointer;" onclick="document.getElementById('flip-btn').click()">
                                        <i data-lucide="help-circle"></i> 정답(스펠링) 확인하기
                                    </span>
                                    ${isKnown ? '<span class="badge" style="position:absolute; top: 1rem; right: 1rem; background: var(--success); color: white;"><i data-lucide="check" style="width:14px;height:14px;"></i> 암기완료</span>' : ''}
                                </div>
                                <div class="flashcard-back" onclick="document.getElementById('flip-btn').click()">
                                    <h4 style="margin-top: 0; padding-bottom: 0.5rem; border-bottom: 1px rgba(255,255,255,0.3) solid; font-size: 1.5rem; opacity: 0.9;">정답 확인</h4>
                                    <p style="font-size: 1.8rem; line-height: 1.6; font-weight: bold; letter-spacing: 1px;">${v.term}</p>
                                    <p style="font-size: 1.1rem; margin-top: 1rem; opacity: 0.8;">터치하여 다시 돌아가기</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; padding-bottom: 4rem;">
                        <button class="btn btn-secondary" style="flex:1; max-width: 200px; padding: 1rem;" onclick="document.getElementById('prev-vocab-btn').click()">
                            <i data-lucide="arrow-left"></i> 이전 단어
                        </button>
                        <button class="btn btn-secondary" style="flex:1; max-width: 200px; padding: 1rem;" onclick="document.getElementById('next-vocab-btn').click()">
                            다음 단어 <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
        };

        const render = () => {
            container.innerHTML = `
                ${renderHeader()}
                <div id="vocab-content-area">
                    ${renderCardArea()}
                </div>
                <!-- Hidden buttons -->
                <button id="shuffle-vocab-btn" style="display:none;"></button>
                <button id="flip-btn" style="display:none;"></button>
                <button id="prev-vocab-btn" style="display:none;"></button>
                <button id="next-vocab-btn" style="display:none;"></button>
            `;
            if (window.lucide) window.lucide.createIcons();

            const attachListeners = () => {
                const safeAdd = (id, fn) => {
                    const el = container.querySelector('#' + id);
                    if (el) el.onclick = fn;
                };

                safeAdd('shuffle-vocab-btn', () => {
                    for (let i = vocab.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
                    }
                    currentIndex = 0; isFlipped = false; failedAttempts = 0; hasSeenAnswer = false; render();
                });
                
                safeAdd('flip-btn', () => {
                    isFlipped = !isFlipped;
                    hasSeenAnswer = true;
                    const card = container.querySelector('#main-flashcard');
                    if (card) {
                        if (isFlipped) card.classList.add('flipped');
                        else card.classList.remove('flipped');
                    }
                });

                const nextCard = (animClass, direction = 1) => {
                    const card = container.querySelector('#main-flashcard');
                    if (card) {
                        card.classList.add(animClass);
                        setTimeout(() => {
                            isFlipped = false;
                            failedAttempts = 0;
                            hasSeenAnswer = false;
                            
                            const currentTerm = displayVocab[currentIndex]?.term;
                            
                            // 학습한 단어를 반영하여 리스트 새로고침
                            const knownWords = window.appStorage.getKnownWords();
                            displayVocab = vocab.filter(v => !knownWords.includes(v.term));
                            
                            if (displayVocab.length > 0) {
                                // 방금 풀었던 단어가 여전히 리스트에 있다면 (틀렸거나 힌트를 봄)
                                if (displayVocab.some(v => v.term === currentTerm)) {
                                    if (direction === -1) {
                                        currentIndex--;
                                    } else {
                                        currentIndex++;
                                    }
                                }
                                // 배열 범위 보정 (루프)
                                if (currentIndex < 0) currentIndex = displayVocab.length - 1;
                                if (currentIndex >= displayVocab.length) currentIndex = 0;
                            } else {
                                currentIndex = 0;
                            }
                            
                            const area = container.querySelector('#vocab-content-area');
                            area.innerHTML = renderCardArea();
                            if (window.lucide) window.lucide.createIcons();
                            
                            const newCard = container.querySelector('#main-flashcard');
                            if (newCard) {
                                newCard.classList.add('card-slide-in');
                            }
                            attachListeners(); // Reattach
                        }, 400); // Wait for slide out
                    }
                };

                safeAdd('prev-vocab-btn', () => {
                    if (displayVocab.length === 0) return;
                    nextCard('card-slide-out-right', -1);
                });

                safeAdd('next-vocab-btn', () => {
                    if (displayVocab.length === 0) return;
                    nextCard('card-slide-out-left', 1);
                });

                safeAdd('vocab-check-btn', () => {
                    const input = container.querySelector('#vocab-spell-input');
                    const feedback = container.querySelector('#vocab-feedback-msg');
                    if (!input || !feedback) return;
                    if (displayVocab.length === 0) return;
                    
                    const term = displayVocab[currentIndex].term.toLowerCase();
                    const val = input.value.trim().toLowerCase();
                    
                    feedback.style.opacity = '1';
                    if (val === term) {
                        const currentTerm = displayVocab[currentIndex].term;
                        if (hasSeenAnswer) {
                            input.style.borderColor = 'var(--danger)';
                            input.style.backgroundColor = '#fef2f2';
                            input.style.color = 'var(--danger)';
                            feedback.style.color = 'var(--danger)';
                            feedback.innerHTML = '<i data-lucide="x-circle" style="vertical-align: text-bottom; width:20px; height:20px;"></i> 정답을 보고 맞혔으므로 나중에 다시 출제됩니다.';
                            if (window.lucide) window.lucide.createIcons();
                            input.blur();
                            
                            setTimeout(() => {
                                const nextBtn = document.getElementById('next-vocab-btn');
                                if (nextBtn) nextBtn.click();
                            }, 1500);
                        } else {
                            input.style.borderColor = 'var(--success)';
                            input.style.backgroundColor = '#ecfdf5';
                            input.style.color = 'var(--success)';
                            feedback.style.color = 'var(--success)';
                            feedback.innerHTML = '<i data-lucide="check-circle" style="vertical-align: text-bottom; width:20px; height:20px;"></i> 정답입니다!';
                            if (window.lucide) window.lucide.createIcons();
                            input.blur();
                            window.appStorage.addKnownWord(currentTerm);
                            
                            setTimeout(() => {
                                const nextBtn = document.getElementById('next-vocab-btn');
                                if (nextBtn) nextBtn.click();
                            }, 1000);
                        }
                    } else if (val === '') {
                        feedback.style.color = 'var(--text-muted)';
                        feedback.innerText = '단어를 입력해주세요.';
                    } else {
                        failedAttempts++;
                        input.style.borderColor = 'var(--danger)';
                        input.style.backgroundColor = '#fef2f2';
                        feedback.style.color = 'var(--danger)';
                        
                        if (failedAttempts >= 3) {
                            feedback.innerHTML = '<i data-lucide="x-circle" style="vertical-align: text-bottom; width:20px; height:20px;"></i> 3회 오답! 나중에 다시 출제됩니다.';
                            if (window.lucide) window.lucide.createIcons();
                            setTimeout(() => {
                                const nextBtn = document.getElementById('next-vocab-btn');
                                if (nextBtn) nextBtn.click();
                            }, 1500);
                        } else {
                            feedback.innerHTML = `<i data-lucide="x-circle" style="vertical-align: text-bottom; width:20px; height:20px;"></i> 틀렸습니다. 다시 시도해보세요. (${failedAttempts}/3)`;
                            if (window.lucide) window.lucide.createIcons();
                        }
                    }
                });

                const inputEl = container.querySelector('#vocab-spell-input');
                if (inputEl) {
                    inputEl.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            const btn = container.querySelector('#vocab-check-btn');
                            if (btn) btn.click();
                        }
                    });
                    inputEl.addEventListener('input', () => {
                        inputEl.style.borderColor = 'var(--border)';
                        inputEl.style.backgroundColor = 'transparent';
                        inputEl.style.color = 'inherit';
                        const feedback = container.querySelector('#vocab-feedback-msg');
                        if (feedback) feedback.style.opacity = '0';
                    });
                }
            };

            attachListeners();
        };

        render();
    },

    renderAnalytics(container) {
        const stats = window.appStorage.getAnalytics();
        
        let statsHtml = `
            <h2 style="margin-bottom: 1.5rem;">학습 성적 분석</h2>
            <div class="dashboard-grid" style="margin-bottom: 2.5rem;">
                ${window.appComponents.buildStatCard('전체 정답률', 
                    stats.totalAttempted > 0 ? Math.round((stats.correctAnswers / stats.totalAttempted) * 100) + '%' : '0%', 
                    'pie-chart')}
                ${window.appComponents.buildStatCard('맞힌 문제', stats.correctAnswers + '개', 'check')}
                ${window.appComponents.buildStatCard('풀어본 총 문제', stats.totalAttempted + '개', 'list')}
            </div>
            
            <h3 style="margin-bottom: 1.5rem;">과목별 정답률</h3>
            <div class="card">
        `;

        const subjects = Object.keys(stats.subjectStats);
        if (subjects.length === 0) {
            statsHtml += `<div class="text-center text-muted" style="padding: 2rem;">아직 풀이한 과목 데이터가 없습니다.</div>`;
        } else {
            subjects.forEach(subject => {
                const subjStat = stats.subjectStats[subject];
                const pct = Math.round((subjStat.correct / subjStat.attempted) * 100);
                
                statsHtml += `
                    <div style="margin-bottom: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 500;">
                            <span>${subject}</span>
                            <span>${pct}% (${subjStat.correct}/${subjStat.attempted})</span>
                        </div>
                        <div class="progress-container" style="background: #e2e8f0; height: 12px;">
                            <div class="progress-bar" style="width: ${pct}%; background: ${pct >= 80 ? 'var(--success)' : (pct >= 50 ? 'var(--primary-blue)' : 'var(--danger)')};"></div>
                        </div>
                    </div>
                `;
            });
        }
        
        statsHtml += `</div>`;
        container.innerHTML = statsHtml;
    },

    renderSimulation(container) {
        window.simState = window.simState || { stage: 1 };
        let activeScenario = null;
        let currentState = null;
        let activeTab = 'info';
        let selectedEvals = [];
        let appliedTreatments = [];

        window.startSim = (simId) => {
            activeScenario = JSON.parse(JSON.stringify(window.appData.simulation.find(s => s.id === simId)));
            // Shuffle treatments so answers are not always 1, 2, 3
            for (let i = activeScenario.treatments.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [activeScenario.treatments[i], activeScenario.treatments[j]] = [activeScenario.treatments[j], activeScenario.treatments[i]];
            }
            currentState = { ...activeScenario.initialState };
            activeTab = 'info';
            selectedEvals = [];
            appliedTreatments = [];
            renderGame();
        };

        const renderLobby = () => {
            let stageNum = window.simState.stage > 10 ? 10 : window.simState.stage;
            let pool = window.appData.simulation.filter(s => s.difficulty === stageNum);
            
            // Randomly shuffle them (though there are only 3 per stage, good to shuffle positions)
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            const displayedSims = pool.slice(0, 3);

            let cardsHtml = displayedSims.map((sim, index) => `
                <div class="card" style="cursor:pointer; background: white; transition: transform 0.2s, box-shadow 0.2s; border: 2px solid transparent; border-radius: var(--radius-lg); padding: 1.5rem;" 
                     onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--primary-blue)'; this.style.boxShadow='var(--shadow-lg)';" 
                     onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='transparent'; this.style.boxShadow='var(--shadow-md)';"
                     onclick="window.startSim('${sim.id}')">
                    
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <span class="badge" style="background: var(--primary-light); color: white;">Case ${index + 1}</span>
                            <h3 style="margin: 0.5rem 0 0 0;">${sim.patient.name} (${sim.patient.age}세, ${sim.patient.gender})</h3>
                        </div>
                        <i data-lucide="user-plus" style="width: 32px; height: 32px; color: var(--border);"></i>
                    </div>
                    <p class="text-muted" style="font-size: 0.95rem; height: 60px; overflow: hidden;">"${sim.chiefComplaint}"</p>
                    <button class="btn" style="width: 100%; margin-top: 1rem;">진료 시작하기 🎮</button>
                </div>
            `).join('');

            const stageInfo = [
                { tier: "STAGE 0", desc: "", color: "" },
                { tier: "초급 1 (동네 의원)", desc: "하루 종일 컴퓨터만 보는 직장인, 가볍게 삐끗한 경증 환자들이 방문합니다.", color: "#3b82f6" },
                { tier: "초급 2 (정형외과 외래)", desc: "오십견, 족저근막염 등 끈질기고 고집스러운 만성 염증 환자들입니다.", color: "#2563eb" },
                { tier: "중급 1 (입원실 병동)", desc: "허리디스크 삐끗, 연골연화증 등 체중 부하에 민감한 환자들입니다.", color: "#0ea5e9" },
                { tier: "중급 2 (스포츠 재활 전문센터)", desc: "축구/농구 중 인대가 박살나 실려온 스포츠 선수들의 거친 재활을 맡습니다.", color: "#8b5cf6" },
                { tier: "고급 1 (척추 전문 병원)", desc: "디스크 파열, 협착증으로 다리가 저려 못 걷거나 시술을 요하는 척추 환자들!", color: "#d946ef" },
                { tier: "고급 2 (신경과 일반 병동)", desc: "가벼운 뇌졸중, 안면 마비 등 중추/말초신경계 마비의 조기 재활입니다.", color: "#ec4899" },
                { tier: "심화 1 (신경계 중환자 병동)", desc: "파킨슨병, 척수완전손상, 뇌출혈 혼수 환자들. 작은 실수도 돌이킬 수 없습니다.", color: "#f43f5e" },
                { tier: "심화 2 (소아 특수 물리치료실)", desc: "뇌성마비, 사경, 자폐스펙트럼. 말 못 하는 아이들의 눈빛을 읽어내야 합니다.", color: "#f97316" },
                { tier: "마스터 (난치성 류마티스 센터)", desc: "CRPS(스치면 폭발하는 통증), 류마티스, 다발성 경화증 등 최악의 자가면역 상태입니다.", color: "#f59e0b" },
                { tier: "초월 (신의 손 국립 특수재활원)", desc: "🚨 초희귀/최극상 난이도 🚨 우주 폐용성 위축증, 전신 3도 화상, 루게릭병... 기적을 만드십시오!", color: "#ef4444" }
            ];

            let stageData = stageInfo[stageNum] || stageInfo[10];
            let tierName = stageData.tier;
            let stageDesc = stageData.desc;
            let stageColor = stageData.color;

            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 2.5rem; background: linear-gradient(135deg, #0f172a, #1e293b); padding: 3.5rem 2rem; border-radius: var(--radius-lg); color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border-bottom: 5px solid ${stageColor};">
                    <div style="font-size: 1.2rem; font-weight: 800; color: #94a3b8; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 1rem;">
                        <i data-lucide="gamepad-2" style="display: inline-block; vertical-align: middle;"></i> V-Clinical Simulation
                    </div>
                    <h1 style="font-size: 5rem; font-weight: 900; margin: 0; text-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; gap: 1rem;">
                        <span style="color: ${stageColor}; font-style: italic;">STAGE ${window.simState.stage}</span>
                    </h1>
                    <h2 style="font-size: 2rem; font-weight: 800; color: white; margin: 1rem 0;">
                        ${tierName}
                    </h2>
                    <p style="font-size: 1.15rem; color: #cbd5e1; max-width: 650px; margin: 0 auto; line-height: 1.6; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px;">
                        ${stageDesc}
                    </p>
                </div>
                
                <h3 style="margin-bottom: 1rem; color: var(--text); display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="users"></i> 대기 중인 환자 목록 (현재 스테이지)
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    ${cardsHtml}
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
        };

        const renderGame = () => {
            if (!activeScenario) {
                renderLobby();
                return;
            }

            // Check Game Over / Clear Status
            // 모든 정답 처방을 완료했는지 확인
            const allCorrectApplied = activeScenario.treatments
                .filter(t => t.isCorrect)
                .every(t => appliedTreatments.some(at => at.id === t.id));

            const isGameOver = currentState.painLevel >= 10 || currentState.rom <= 0;
            
            // 수치 목표를 달성했거나, 오답이 있더라도 나머지 정답을 모두 맞추면 클리어 인정
            const isGameClear = (currentState.painLevel <= 2 && currentState.rom >= 90) || allCorrectApplied;

            if (isGameOver) {
                let failMessage = "환자의 상태가 심각하게 악화되어 대학병원 응급실로 긴급 이송되었습니다...";

                container.innerHTML = `
                    <div class="card text-center" style="animation: fadeIn 0.5s ease-out; padding: 4rem 2rem;">
                        <span style="font-size: 6rem; display: block; margin-bottom: 1rem;">🚑</span>
                        <h2 style="color: var(--danger); font-size: 2.5rem; margin-bottom: 1rem;">치료 실패 (Game Over)</h2>
                        <p style="font-size: 1.2rem; margin-bottom: 2rem;">${failMessage}</p>
                        <div style="display: flex; justify-content: center; gap: 1rem;">
                            <button class="btn btn-secondary" onclick="window.appPages.renderSimulation(document.getElementById('main-content'))">
                                <i data-lucide="rotate-ccw"></i> 로비로 돌아가기
                            </button>
                            <button class="btn" style="background: var(--primary); color: white;" onclick="window.startSim('${activeScenario.id}')">
                                <i data-lucide="rotate-cw"></i> 이 환자 다시 치료하기 (Reset)
                            </button>
                        </div>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
                return;
            }

            if (isGameClear) {
                window.nextStage = () => {
                    window.simState.stage++;
                    activeScenario = null;
                    renderLobby();
                };

                let nextBtnHtml = window.simState.stage >= 10 
                    ? `<button class="btn" style="background: var(--success); color: white; font-size: 1.5rem; padding: 1.5rem 2rem; border-radius: 12px; margin-bottom: 1rem; box-shadow: 0 0 20px rgba(0,255,0,0.5);" onclick="window.simState.stage=1; window.appPages.renderSimulation(document.getElementById('main-content'))">
                        🏆 재활의 신 등극! (모든 Stage 클리어 - 처음으로 이동)
                       </button>`
                    : `<button class="btn" style="color: white; font-size: 1.8rem; font-weight: 900; padding: 1.5rem 3rem; border-radius: 16px; background: linear-gradient(45deg, #ef4444, #f59e0b); border: 4px solid #fff; box-shadow: 0 0 25px rgba(239, 68, 68, 0.8); margin-bottom: 1.5rem; animation: pulse 1.5s infinite;" onclick="window.nextStage()">
                        🔥 다음 난이도(Stage ${window.simState.stage + 1}) 환자 도전하기 <i data-lucide="arrow-right"></i>
                       </button>`;

                container.innerHTML = `
                    <div class="card text-center" style="animation: fadeIn 0.5s ease-out; padding: 4rem 2rem; background: linear-gradient(to bottom, #f0fdf4, white);">
                        <span style="font-size: 6rem; display: block; margin-bottom: 1rem;">🎉</span>
                        <h2 style="color: var(--success); font-size: 2.5rem; margin-bottom: 1rem;">치료 성공 (Stage Clear!)</h2>
                        <p style="font-size: 1.2rem; margin-bottom: 2rem;">환자가 통증 없이 웃으며 퇴원했습니다. 훌륭한 물리치료사입니다!</p>
                        ${nextBtnHtml}
                        <div class="mt-4">
                            <button class="btn btn-secondary text-sm" onclick="window.appPages.renderSimulation(document.getElementById('main-content'))">
                                <i data-lucide="rotate-ccw"></i> 등급 유지 (같은 스테이지 로비로)
                            </button>
                        </div>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
                return;
            }

            const painColor = currentState.painLevel > 6 ? 'var(--danger)' : (currentState.painLevel > 3 ? '#f59e0b' : 'var(--success)');
            const romColor = currentState.rom < 50 ? 'var(--danger)' : (currentState.rom < 80 ? '#f59e0b' : 'var(--success)');

            let contentHtml = '';
            if (activeTab === 'info') {
                contentHtml = `
                    <div class="card" style="animation: fadeIn 0.3s ease-out;">
                        <h3 class="text-primary" style="display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="user"></i> 환자 프로필</h3>
                        <p style="margin-top: 1rem; font-size: 1.1rem;"><strong>이름:</strong> ${activeScenario.patient.name} (${activeScenario.patient.gender} / ${activeScenario.patient.age}세, ${activeScenario.patient.occupation})</p>
                        <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border);">
                        <h4 style="color: var(--danger);"><i data-lucide="alert-circle"></i> 주호소 (Chief Complaint)</h4>
                        <p style="background: #fef2f2; padding: 1.25rem; border-radius: var(--radius-md); margin-top: 0.75rem; font-size: 1.05rem; line-height: 1.6;">"${activeScenario.chiefComplaint}"</p>
                        <button class="btn mt-4 tab-btn" data-tab="evaluation" style="margin-top: 1.5rem;">가설 세우고 평가하기 <i data-lucide="arrow-right"></i></button>
                    </div>
                `;
            } else if (activeTab === 'evaluation') {
                let evalsHtml = activeScenario.evaluations.map(e => `
                    <div style="margin-bottom: 1rem; border: 1px solid var(--border); padding: 1rem; border-radius: var(--radius-md); background: white;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="font-size: 1.05rem;">${e.title}</strong>
                            ${selectedEvals.includes(e.id) 
                                ? `<span class="badge" style="background: var(--primary-light); color: white;"><i data-lucide="eye"></i> 확인 완료</span>`
                                : `<button class="btn btn-secondary eval-btn text-sm" data-id="${e.id}" style="padding: 0.4rem 1rem;">🔍 단서 찾기</button>`
                            }
                        </div>
                        ${selectedEvals.includes(e.id) ? `
                            <div style="margin-top: 1rem; padding: 1rem; background: #e0f2fe; border-radius: 4px; animation: fadeIn 0.4s ease-out;">
                                <strong>💡 소견:</strong> ${e.result}
                            </div>
                        ` : ''}
                    </div>
                `).join('');

                contentHtml = `
                    <div class="card" style="animation: fadeIn 0.3s ease-out; background: #fcfcfc;">
                        <h3 class="text-primary mb-2" style="display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="clipboard-list"></i> 이학적 단서 채집</h3>
                        <p class="text-muted mb-4">단서를 찾아 정확한 진단명과 현재 상태를 파악하세요.</p>
                        ${evalsHtml}
                        <button class="btn tab-btn" data-tab="treatment" style="margin-top: 1.5rem; width: 100%;">치료 모드로 전환 ⚔️</button>
                    </div>
                `;
            } else if (activeTab === 'treatment') {
                let treatHtml = activeScenario.treatments.map(t => {
                    const isApplied = appliedTreatments.some(at => at.id === t.id);
                    return `
                    <div style="margin-bottom: 1.25rem; border: 2px solid ${isApplied ? (t.isCorrect ? 'var(--success)' : 'var(--danger)') : 'var(--border)'}; padding: 1.25rem; border-radius: var(--radius-md); background: ${isApplied ? (t.isCorrect ? '#ecfdf5' : '#fef2f2') : 'white'}; transition: all 0.3s;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="font-size: 1.05rem; color: ${isApplied ? (t.isCorrect ? '#065f46' : '#991b1b') : 'var(--text-main)'};">${t.title}</strong>
                            ${isApplied 
                                ? `<span style="font-weight:bold; font-size:1.2rem;">${t.isCorrect ? '👍' : '⚠️'}</span>` 
                                : `<button class="btn treat-btn text-sm" data-id="${t.id}" style="padding: 0.4rem 1rem;">⚡ 처방 내리기</button>`
                            }
                        </div>
                        ${isApplied ? `
                            <div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 1rem; font-size: 0.95rem; line-height: 1.5; color: ${t.isCorrect ? '#065f46' : '#991b1b'}; animation: fadeIn 0.4s ease-out;">
                                ${t.feedback}
                            </div>
                        ` : ''}
                    </div>
                    `;
                }).join('');

                contentHtml = `
                    <div class="card" style="animation: fadeIn 0.3s ease-out; background: #fcfcfc;">
                        <h3 class="text-primary mb-2" style="display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="zap"></i> 물리치료 처방전</h3>
                        <p class="text-muted mb-4">환자의 상태를 호전시키기 위한 액션을 선택하세요! (통증이 10이 되면 게임 오버, 통증 2이하 & ROM 90이상이면 클리어)</p>
                        ${treatHtml}
                    </div>
                `;
            }

            // Add CSS if it doesn't exist
            if (!document.getElementById('sim-gamify-styles')) {
                const style = document.createElement('style');
                style.id = 'sim-gamify-styles';
                style.innerHTML = `
                    @keyframes hapticShake {
                        0% { transform: translate(1px, 1px) rotate(0deg); }
                        10% { transform: translate(-2px, -2px) rotate(-1deg); }
                        20% { transform: translate(-3px, 0px) rotate(1deg); }
                        30% { transform: translate(3px, 2px) rotate(0deg); }
                        40% { transform: translate(1px, -1px) rotate(1deg); }
                        50% { transform: translate(-1px, 2px) rotate(-1deg); }
                        60% { transform: translate(-3px, 1px) rotate(0deg); }
                        70% { transform: translate(3px, 1px) rotate(-1deg); }
                        80% { transform: translate(-1px, -1px) rotate(1deg); }
                        90% { transform: translate(1px, 2px) rotate(0deg); }
                        100% { transform: translate(1px, -2px) rotate(-1deg); }
                    }
                    .shake-game-board {
                        animation: hapticShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
                        box-shadow: 0 0 30px rgba(239, 68, 68, 0.8) !important;
                        border: 3px solid #ef4444 !important;
                        background: rgba(239, 68, 68, 0.15) !important;
                    }
                    .game-bar {
                        height: 28px !important;
                        border-radius: 14px !important;
                        box-shadow: inset 0 2px 6px rgba(0,0,0,0.6);
                        position: relative;
                        overflow: hidden;
                        border: 2px solid rgba(255,255,255,0.2);
                    }
                    .game-bar::after {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 50%;
                        background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0));
                        border-radius: 14px 14px 0 0;
                    }
                `;
                document.head.appendChild(style);
            }

            container.innerHTML = `
                <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn btn-secondary text-sm" onclick="window.appPages.renderSimulation(document.getElementById('main-content'))" style="border-radius: 20px;">
                            <i data-lucide="arrow-left"></i> 대기실로 (포기)
                        </button>
                        <button class="btn btn-secondary text-sm" onclick="window.startSim('${activeScenario.id}')" style="background: #fee2e2; color: #b91c1c; border-color: #fca5a5; border-radius: 20px;">
                            <i data-lucide="rotate-cw"></i> 처음부터 다시하기 (리셋)
                        </button>
                    </div>
                    <span style="font-weight: 800; color: var(--primary-blue); background: #e0f2fe; padding: 0.5rem 1rem; border-radius: 20px;">
                        🎯 목표: HP(통증) 보호 & ROM 100% 달성
                    </span>
                </div>

                <div id="sim-status-board" style="background: linear-gradient(135deg, #0f172a, #334155); color: white; padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem; transition: background 0.3s, box-shadow 0.3s; border: 3px solid transparent;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                                <span style="font-weight: 800; font-size: 1.2rem; text-shadow: 1px 1px 2px #000;"><i data-lucide="heart-pulse"></i> 환자 체력 (통증, 낮을수록 좋음!)</span>
                                <span style="font-weight: 900; font-size: 1.5rem; color: ${painColor}; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">${currentState.painLevel} / 10</span>
                            </div>
                            <div class="progress-container game-bar" style="background: #1e293b;">
                                <div class="progress-bar" style="width: ${currentState.painLevel * 10}%; background: ${painColor}; transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;"></div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                                <span style="font-weight: 800; font-size: 1.2rem; text-shadow: 1px 1px 2px #000;"><i data-lucide="move"></i> 관절가동범위 (ROM 게이지)</span>
                                <span style="font-weight: 900; font-size: 1.5rem; color: ${romColor}; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">${currentState.rom}%</span>
                            </div>
                            <div class="progress-container game-bar" style="background: #1e293b;">
                                <div class="progress-bar" style="width: ${currentState.rom}%; background: ${romColor}; transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                    <button class="tab-btn btn ${activeTab === 'info' ? 'btn-primary' : 'btn-secondary'}" data-tab="info" style="flex:1; border: none; font-weight: bold;">📝 차트</button>
                    <button class="tab-btn btn ${activeTab === 'evaluation' ? 'btn-primary' : 'btn-secondary'}" data-tab="evaluation" style="flex:1; border: none; font-weight: bold;">🔎 단서조사</button>
                    <button class="tab-btn btn ${activeTab === 'treatment' ? 'btn-primary' : 'btn-secondary'}" data-tab="treatment" style="flex:1; border: none; font-weight: bold;">💉 액션</button>
                </div>

                <div id="sim-content">
                    ${contentHtml}
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();

            container.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    activeTab = e.currentTarget.dataset.tab;
                    renderGame();
                });
            });

            container.querySelectorAll('.eval-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    selectedEvals.push(e.currentTarget.dataset.id);
                    renderGame();
                });
            });

            container.querySelectorAll('.treat-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tId = e.currentTarget.dataset.id;
                    const treatObj = activeScenario.treatments.find(t => t.id === tId);
                    appliedTreatments.push(treatObj);
                    
                    currentState.painLevel = Math.max(0, Math.min(10, currentState.painLevel + treatObj.effect.pain));
                    currentState.rom = Math.max(0, Math.min(100, currentState.rom + treatObj.effect.rom));
                    
                    if (!treatObj.isCorrect) {
                        const board = document.getElementById('sim-status-board');
                        if (board) {
                            board.classList.remove('shake-game-board');
                            void board.offsetWidth; // trigger reflow
                            board.classList.add('shake-game-board');
                            setTimeout(() => renderGame(), 600);
                            return;
                        }
                    }
                    
                    renderGame();
                });
            });
        };

        renderLobby();
    }
};
