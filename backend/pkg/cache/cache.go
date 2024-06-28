package cache

import (
	"sync"
	"time"
)

var (
	imageCache     = make(map[string]cachedImage)
	cacheMutex     sync.RWMutex
	defaultTimeout = 1 * time.Hour
)

type cachedImage struct {
	data       []byte
	expiration time.Time
}

func SetCache(key string, data []byte) {
	cacheMutex.Lock()
	defer cacheMutex.Unlock()
	imageCache[key] = cachedImage{
		data:       data,
		expiration: time.Now().Add(defaultTimeout),
	}
}

func GetCache(key string) ([]byte, bool) {
	cacheMutex.RLock()
	defer cacheMutex.RUnlock()
	cached, found := imageCache[key]
	if !found || time.Now().After(cached.expiration) {
		return nil, false
	}
	return cached.data, true
}

//func ClearCache() {
//	cacheMutex.Lock()
//	defer cacheMutex.Unlock()
//	now := time.Now()
//	for key, cached := range imageCache {
//		if now.After(cached.expiration) {
//			delete(imageCache, key)
//		}
//	}
//}
