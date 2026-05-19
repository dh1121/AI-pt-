class Router {
    constructor() {
        this.routes = {};
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    addRoute(path, callback) {
        this.routes[path] = callback;
    }

    handleRoute() {
        const hash = window.location.hash.substring(1) || 'home';
        this.updateNav(hash);
        const container = document.getElementById('main-content');
        
        if (this.routes[hash]) {
            container.innerHTML = '';
            // Pass container so the callback can render content into it
            this.routes[hash](container);
            
            // Re-initialize icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        } else {
            container.innerHTML = `<div class="card text-center"><h2 class="text-primary">404</h2><p>페이지를 찾을 수 없습니다.</p></div>`;
        }
    }

    updateNav(activePath) {
        // Map sub-routes to their parent tabs for navigation highlighting
        const routeMap = {
            'quiz': 'study',
            'vocabulary': 'study',
            'review': 'records',
            'correct-review': 'records',
            'analytics': 'records'
        };
        const parentPath = routeMap[activePath] || activePath;

        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.path === parentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navigate(path) {
        window.location.hash = path;
    }
}

window.appRouter = new Router();
