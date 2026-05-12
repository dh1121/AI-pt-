document.addEventListener('DOMContentLoaded', () => {
    // Configure Router
    const router = window.appRouter;
    const pages = window.appPages;

    router.addRoute('home', pages.renderHome);
    router.addRoute('study', pages.renderStudyCenter);
    router.addRoute('quiz', pages.renderQuiz);
    router.addRoute('vocabulary', pages.renderVocabulary);
    router.addRoute('records', pages.renderRecords);
    router.addRoute('review', pages.renderReview);
    router.addRoute('analytics', pages.renderAnalytics);
    router.addRoute('simulation', pages.renderSimulation);

    // Initial Path Load
    router.handleRoute();
});
