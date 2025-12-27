// 체크리스트 상태를 로컬 스토리지에 저장
document.addEventListener('DOMContentLoaded', function() {
    const checklists = document.querySelectorAll('.checklist input[type="checkbox"]');
    const storageKey = 'checklist_' + window.location.pathname;
    
    // 저장된 상태 불러오기
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
        const states = JSON.parse(savedState);
        checklists.forEach((checkbox, index) => {
            if (states[index] !== undefined) {
                checkbox.checked = states[index];
            }
        });
    }
    
    // 체크박스 변경 시 상태 저장
    checklists.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            const states = [];
            checklists.forEach(cb => {
                states.push(cb.checked);
            });
            localStorage.setItem(storageKey, JSON.stringify(states));
        });
    });
});
