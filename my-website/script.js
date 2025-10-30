// عناصر DOM
const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');

// عند اختيار الصور
fileInput.addEventListener('change', function(e) {
    const files = e.target.files;
    
    if (files.length > 0) {
        // مسح المحتوى القديم
        gallery.innerHTML = '';
        
        // معالجة كل صورة
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // إنشاء عنصر صورة
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = file.name;
                    
                    // إضافة الصورة للمعرض
                    gallery.appendChild(img);
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // رسالة نجاح
        setTimeout(() => {
            alert(✅ تم تحميل ${files.length} صورة بنجاح!);
        }, 500);
    }
});
