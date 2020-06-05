export default function loadRegisterFromCache(STORAGE_KEY: string) {
    const cacheData = sessionStorage.getItem(STORAGE_KEY);
    if (cacheData) {
        try {
            const parsedCacheData = JSON.parse(cacheData);
            if (typeof parsedCacheData === 'object')
                return parsedCacheData;
        } catch {
        }
    }
}