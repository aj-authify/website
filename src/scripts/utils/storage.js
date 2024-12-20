export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function edit(key, newValue) {
  localStorage.setItem(key, JSON.stringify(newValue))
}

export function remove(key) {
  localStorage.removeItem(key)
}

export function load(key) {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
