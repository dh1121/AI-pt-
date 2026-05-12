// LocalStorage wrapper
const StorageWrapper = {
    KEYS: {
        PROGRESS: 'pt_exam_progress',
        WRONG_NOTES: 'pt_exam_wrong_notes',
        ANALYTICS: 'pt_exam_analytics',
        KNOWN_WORDS: 'pt_exam_known_words',
        WRONG_WORDS: 'pt_exam_wrong_words'
    },

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage', error);
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    },

    // --- Specific Data Getters & Setters ---

    getAnalytics() {
        return this.get(this.KEYS.ANALYTICS, {
            totalAttempted: 0,
            correctAnswers: 0,
            subjectStats: {} // e.g., { '해부생리학': { attempted: 10, correct: 8 } }
        });
    },

    getWrongNotes() {
        // Array of question IDs
        return this.get(this.KEYS.WRONG_NOTES, []);
    },

    addWrongNote(questionId) {
        const notes = this.getWrongNotes();
        if (!notes.includes(questionId)) {
            notes.push(questionId);
            this.set(this.KEYS.WRONG_NOTES, notes);
        }
    },

    removeWrongNote(questionId) {
        let notes = this.getWrongNotes();
        notes = notes.filter(id => id !== questionId);
        this.set(this.KEYS.WRONG_NOTES, notes);
    },

    updateAnalytics(subject, isCorrect) {
        const data = this.getAnalytics();
        
        data.totalAttempted += 1;
        if (isCorrect) data.correctAnswers += 1;

        if (!data.subjectStats[subject]) {
            data.subjectStats[subject] = { attempted: 0, correct: 0 };
        }
        
        data.subjectStats[subject].attempted += 1;
        if (isCorrect) data.subjectStats[subject].correct += 1;

        this.set(this.KEYS.ANALYTICS, data);
    },

    getKnownWords() {
        return this.get(this.KEYS.KNOWN_WORDS, []);
    },

    addKnownWord(term) {
        const words = this.getKnownWords();
        if (!words.includes(term)) {
            words.push(term);
            this.set(this.KEYS.KNOWN_WORDS, words);
        }
    },

    removeKnownWord(term) {
        let words = this.getKnownWords();
        words = words.filter(t => t !== term);
        this.set(this.KEYS.KNOWN_WORDS, words);
    },

    getWrongWords() {
        return this.get(this.KEYS.WRONG_WORDS, []);
    },

    addWrongWord(term) {
        const words = this.getWrongWords();
        if (!words.includes(term)) {
            words.push(term);
            this.set(this.KEYS.WRONG_WORDS, words);
        }
    },

    removeWrongWord(term) {
        let words = this.getWrongWords();
        words = words.filter(t => t !== term);
        this.set(this.KEYS.WRONG_WORDS, words);
    }
};

window.appStorage = StorageWrapper;
