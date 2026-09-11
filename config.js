/* =====================================================
   إعدادات الموقع — عدّل القيم دي بمفاتيحك الخاصة
   ===================================================== */

/* ---------- 1) Firebase (قاعدة البيانات) ----------
   خطوات الإعداد (مجاني 100%):
   1. ادخل https://console.firebase.google.com
   2. اعمل مشروع جديد (أي اسم)
   3. من القائمة: Build > Firestore Database > Create Database > Start in test mode
   4. من Project Settings > General > Your apps > Web (الأيقونة </>) > سجّل التطبيق
   5. خد الـ config وحطه هنا
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjHh0Bp2tB0NzOi-4XGIvgbJLM4qxjicA",
  authDomain: "eskak-youth.firebaseapp.com",
  projectId: "eskak-youth",
  storageBucket: "eskak-youth.firebasestorage.app",
  messagingSenderId: "233428871120",
  appId: "1:233428871120:web:8e2bad487c3e28509f7bd5"
};

/* ---------- 2) Paymob (بوابة الدفع الحقيقية) ----------
   خطوات الإعداد:
   1. سجّل حساب على https://accept.paymob.com
   2. من لوحة التحكم: Developers > API Keys > خد الـ API Key
   3. اعمل Integration (Online Card / Wallet) وخد الـ Integration ID
   4. من Developers > iframes > خد الـ Iframe ID
   5. فعّل الـ Webhook: Developers > Webhooks > حط رابط:
      https://YOUR-USERNAME.github.io/REPO-NAME/callback.html
   ملاحظة: بدون القيم دي الموقع هيشتغل بوضع تجريبي (محاكاة الدفع)
*/
window.PAYMOB = {
  API_KEY: "PASTE_PAYMOB_API_KEY",        // مثال: ZXlKMGVYQWlPaUp...
  INTEGRATION_ID: 0,                       // رقم الـ Integration (رقم)
  IFRAME_ID: 0                             // رقم الـ Iframe (رقم)
};

/* ---------- 3) الحد الأدنى للسن ----------
   أي شخص معدي السن ده يتقبل. الافتراضي 21 سنة.
   لو عايز تقبل أي سن اكتب 0
*/
window.MIN_AGE = 18;
