export default function writeRegisterToCache(STORAGE_KEY: string, userData: any) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}
