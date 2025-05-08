// Script para aplicar el tema inmediatamente antes de que la página se renderice
(function() {
    // Verificar si hay un tema guardado y aplicarlo inmediatamente
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode-no-transition');
    }
})();

// Función para inicializar el modo de tema
function initThemeMode() {
    const toggleBtn = document.getElementById('toggle-mode');
    const body = document.body;

    // Remover la clase sin transición y permitir transiciones para cambios futuros
    document.documentElement.classList.remove('light-mode-no-transition');
    
    // Si no hay botón toggle en la página actual, solo completamos la inicialización
    if (!toggleBtn) {
        completeThemeInit();
        return;
    }

    // Completar la inicialización
    completeThemeInit();

    // Configurar el botón de cambio
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        toggleBtn.textContent = isLight ? '🌞' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Función para completar la inicialización del tema
function completeThemeInit() {
    const body = document.body;
    const toggleBtn = document.getElementById('toggle-mode');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (toggleBtn) toggleBtn.textContent = '🌞';
    } else {
        body.classList.remove('light-mode');
        if (toggleBtn) toggleBtn.textContent = '🌙';
    }
}

// Ejecutar cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', initThemeMode);