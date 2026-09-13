/* =====================================================
   إعدادات الموقع — تم إدخال مفاتيح Firebase الخاصة بك
   ===================================================== */

/* ---------- 1) Firebase (قاعدة البيانات) ---------- */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjHh0Bp2tB0NzOi-4XGIvgbJLM4qxjicA",
  authDomain: "eskak-youth.firebaseapp.com",
  projectId: "eskak-youth",
  storageBucket: "eskak-youth.firebasestorage.app",
  messagingSenderId: "233428871120",
  appId: "1:233428871120:web:8e2bad487c3e28509f7bd5"
};

/* ---------- 2) Paymob (بوابة الدفع الحقيقية) ----------
   اختياري — بدون القيم دي الموقع هيشتغل بوضع تجريبي (محاكاة الدفع)
   للتفعيل: سجّل في https://accept.paymob.com وخد المفاتيح
*/
window.PAYMOB = {
  API_KEY: "PASTE_PAYMOB_API_KEY",        // ← من Paymob لو هتشتغل دفع حقيقي
  INTEGRATION_ID: 0,                       // ← رقم الـ Integration (رقم)
  IFRAME_ID: 0                             // ← رقم الـ Iframe (رقم)
};

/* ---------- 3) الحد الأدنى للسن ----------
   أي شخص معدي السن ده يتقبل. الافتراضي 21 سنة.
   لو عايز تقبل أي سن اكتب 0
*/
window.MIN_AGE = 21;
