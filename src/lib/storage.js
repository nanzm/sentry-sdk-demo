const key = "sdk-test-cache-data";

export function setCache(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getCache() {
  const stringData = localStorage.getItem(key);
  try {
    return JSON.parse(stringData);
  } catch (e) {
    return {};
  }
}

export function remove() {
  localStorage.removeItem(key);
}
