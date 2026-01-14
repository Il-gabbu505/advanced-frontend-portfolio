const KEY = 'budget-ease:v1'


export function loadState() {
try {
const raw = localStorage.getItem(KEY)
if (!raw) return undefined
return JSON.parse(raw)
} catch (e) {
console.warn('Failed to load persisted state', e)
return undefined
}
}


export function saveState(state: any) {
try {
const raw = JSON.stringify(state)
localStorage.setItem(KEY, raw)
} catch (e) {
console.warn('Failed to save state', e)
}
}
