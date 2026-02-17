// Utility script to clean blob URLs from localStorage
// Run this in your browser console if you see blob URL errors

function cleanBlobUrls() {
  console.log('🧹 Cleaning blob URLs from localStorage...');
  
  const saved = localStorage.getItem('bvfunguo_custom_data');
  if (!saved) {
    console.log('✅ No data found in localStorage');
    return;
  }
  
  const data = JSON.parse(saved);
  console.log('📦 Current data:', data);
  
  let changed = false;
  if (data.images) {
    Object.keys(data.images).forEach(key => {
      const imageData = data.images[key];
      if (imageData.url && imageData.url.startsWith('blob:')) {
        console.log(`⚠️ Found blob URL for ${key}:`, imageData.url);
        console.log(`🗑️ Removing ${key} from images...`);
        delete data.images[key];
        changed = true;
      }
    });
  }
  
  if (changed) {
    localStorage.setItem('bvfunguo_custom_data', JSON.stringify(data));
    console.log('✅ Cleaned data saved:', data);
    console.log('🔄 Please refresh the page');
  } else {
    console.log('✅ No blob URLs found!');
  }
}

// Export for use
if (typeof window !== 'undefined') {
  (window as any).cleanBlobUrls = cleanBlobUrls;
  console.log('💡 Run cleanBlobUrls() in console to clean any blob URLs');
}

export { cleanBlobUrls };
