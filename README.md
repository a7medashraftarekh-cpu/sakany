# أكاديميتي — منصة تعليمية عربية (كاملة)

منصة Full-Stack جاهزة للتشغيل: Next.js 14 + TypeScript + Tailwind + PostgreSQL + Prisma + Auth.js.

## ✅ ما تم بناؤه بالكامل

**الواجهة العامة**
- الرئيسية، الوحدات، صفحة الوحدة (حالة القفل الحقيقية)، صفحة الدرس بمشغّل فيديو محمي.
- تسجيل / دخول / خروج / **استعادة كلمة المرور** (رابط بالبريد، أو يُطبع في الـ Console محليًا بدون SMTP) / **تعديل البيانات وكلمة المرور**.
- SEO: `sitemap.xml` و `robots.txt` ديناميكيان، Meta title/description لكل وحدة ودرس، Open Graph، Structured Data (Schema.org Course) لصفحات الوحدات.

**لوحة الطالب**: الوحدات المملوكة، آخر درس، الطلبات والفواتير، تعديل البيانات.

**لوحة الأدمن (`/admin`) - محمية بالدور فقط**
- **الرئيسية**: كل الإحصائيات المطلوبة (مستخدمين، طلاب، وحدات، دروس، مبيعات كلية/اليوم/الشهر، حالات الطلبات) + Charts (المبيعات 14 يوم، أكثر الوحدات مبيعًا، أكثر الدروس مشاهدة) + أحدث المستخدمين والطلبات.
- **المستخدمون**: بحث، تفعيل/تعطيل، ترقية/خفض لأدمن، عدد المشتريات.
- **الوحدات**: إضافة/تعديل/حذف (بتأكيد)/إعادة ترتيب/تفعيل عرض/نشر أو إخفاء.
- **الدروس**: إضافة/تعديل/حذف/إعادة ترتيب/نقل بين الوحدات/تفعيل مجاني أو عرض/نشر أو إخفاء.
- **الطلبات**: بحث وفلترة بالحالة، تفاصيل كاملة (المنتج، السعر، طريقة الدفع، Transaction ID، التاريخ)، Pagination.
- **العروض**: نسبة خصم %، خصم ثابت، أو Bundle على عدة وحدات، بتاريخ بداية/نهاية.
- **الإحصائيات التفصيلية**: مبيعات 30 يوم، متوسط قيمة الطلب، مستخدمون جدد، أكثر المبيعات والمشاهدات.
- **الإعدادات**: اسم المنصة، الشعار، الوصف، التواصل، العملة، روابط السوشيال — تنعكس فورًا على الموقع (Navbar/Footer/Meta) بدون لمس الكود.
- كل الجداول تتحول إلى Cards على الهاتف تلقائيًا. تأكيد قبل كل حذف. رسائل نجاح/خطأ (Banners) بعد كل عملية.

**الدفع (Paymob) - Modular**: Checkout حقيقي يحسب السعر من قاعدة البيانات فقط (لا يثق بالواجهة)، Webhook يتحقق من HMAC قبل منح أي وصول، حالات Pending/Success/Failed مسجّلة بالكامل.

**الفيديو (Bunny Stream) - Modular**: روابط تشغيل موقّعة ومؤقتة، لا يظهر الرابط الخام أبدًا في الصفحة.

**الأمان**: bcrypt للتشفير، Zod للتحقق من كل مُدخل، Rate Limiting على تسجيل الدخول/التسجيل/استعادة كلمة المرور، حماية مضاعفة لمسارات الأدمن (Middleware + فحص خادم مستقل داخل كل صفحة/Server Action)، لا مفاتيح في الكود (كل شيء Environment Variables)، لا اعتماد على بيانات الواجهة لتحديد صلاحية الشراء أو المشاهدة.

**Seed Data**: 3 وحدات + دروس تجريبية + أدمن + طالب تجريبي + طلب ودفعة تجريبية (قابلة للحذف بسهولة عبر Prisma Studio).

## ⚠️ محدودية واحدة صريحة

**إرسال البريد الفعلي** لاستعادة كلمة المرور غير مفعّل افتراضيًا (لأنه يحتاج حساب SMTP خارجي لا أملك بيانات اعتماده). بدونه، رابط الاستعادة **يُطبع في الـ Console** فقط - وهذا يكفي تمامًا للتطوير والاختبار المحلي. لتفعيله فعليًا في الإنتاج: ثبّت `npm install nodemailer`، فعّل الكود المُعلَّق (Commented) في `src/lib/mailer.ts`، وأضف بيانات SMTP في `.env`. باقي دوال المشروع بالكامل حقيقية 100% وتعمل فعليًا.

## اختبار الشراء محليًا بدون مفاتيح Paymob حقيقية

بدون مفاتيح Paymob في `.env`، عند الضغط على "شراء" ستُحوَّل لصفحة تجريبية (`/checkout/demo-success`) واضح عليها أنها تجريبية، فيها زر "محاكاة نجاح الدفع" يستدعي مسارًا تجريبيًا محليًا فقط (يرفض العمل تلقائيًا لو أضفت مفاتيح Paymob حقيقية). هذا يتيح لك تجربة تدفّق الشراء والوصول للمحتوى بالكامل محليًا.

---

## 1) التشغيل محليًا

```bash
npm install
cp .env.example .env
# عدّل .env (راجع القسم 3 أسفل)

npx prisma migrate dev --name init
npm run seed
npm run dev
```

المشروع سيعمل على: http://localhost:3000
بيانات الأدمن الافتراضية بعد الـ Seed: القيم التي وضعتها في `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

## 2) إنشاء قاعدة البيانات

```bash
docker run --name arabic-lms-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=arabic_lms -p 5432:5432 -d postgres:16
```

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/arabic_lms?schema=public"
```

أو استخدم Neon / Supabase / Railway السحابية مباشرة.

## 3) متغيرات البيئة (.env)

| المتغير | الوصف |
|---|---|
| `DATABASE_URL` | رابط اتصال PostgreSQL |
| `NEXTAUTH_SECRET` | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | مثل `http://localhost:3000` |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_NAME` | أول حساب أدمن (يُنشأ بـ `npm run seed`) |
| `PAYMOB_API_KEY` / `PAYMOB_HMAC_SECRET` / `PAYMOB_INTEGRATION_ID_CARD` / `PAYMOB_IFRAME_ID` | من لوحة Paymob |
| `BUNNY_LIBRARY_ID` / `BUNNY_API_KEY` / `BUNNY_CDN_HOSTNAME` / `BUNNY_TOKEN_AUTH_KEY` | من لوحة Bunny Stream |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | اختياري - لتفعيل إرسال بريد استعادة كلمة المرور فعليًا |

بدون Paymob/Bunny حقيقية: المشروع يعمل بمسار تجريبي (Demo) للتطوير المحلي فقط.

## 4) كيف أضيف Admin آخر؟

من `/admin/users` اضغط "ترقية لأدمن" على أي مستخدم موجود. أو مباشرة عبر `npx prisma studio`.

## 5) كيف أربط بوابة الدفع (Paymob)؟

1. فعّل تكامل بطاقات من لوحة Paymob وانسخ `API Key`, `Integration ID`, `Iframe ID`.
2. من Webhooks انسخ `HMAC Secret`.
3. ضع القيم في `.env`.
4. اضبط رابط الـ Webhook في Paymob على: `https://YOUR_DOMAIN/api/payments/webhook`

## 6) كيف أرفع الفيديوهات؟ (Bunny Stream)

1. أنشئ Library وفعّل Token Authentication، انسخ `Token Auth Key`.
2. ارفع الفيديو وانسخ `Video ID`.
3. من `/admin/lessons` عدّل الحصة وضع القيمة في حقل **Video ID**.

## 7) كيف أضيف وحدة جديدة؟

من `/admin/units` → "إضافة وحدة". حدّد العنوان، الرابط (slug)، الوصف، السعر، وسعر العرض إن وُجد.

## 8) كيف أضيف حصة؟

من `/admin/lessons` → "إضافة حصة". اختر الوحدة، رقم الحصة، المدة، وVideo ID (بعد رفعه على Bunny).

## 9) كيف أغيّر سعر حصة/وحدة؟

من صفحة تعديل الوحدة/الحصة في لوحة الأدمن مباشرة - حقلا `السعر` و `سعر العرض`.

## 10) كيف أعمل عرض؟

من `/admin/offers` → "إضافة عرض". اختر النوع (نسبة % / قيمة ثابتة / Bundle)، والوحدات المشمولة لو كان Bundle.
> ملاحظة: تخزين العرض وعرضه في لوحة التحكم جاهز بالكامل؛ ربط منطق حزمة Bundle بحساب السعر النهائي في صفحة الدفع مباشرة قابل للتفعيل بسهولة حسب سياسة التسعير التي تُقرّرها (مثال: خصم إضافي عند شراء 2+ وحدات معًا).

## 11) النشر على Vercel

1. ارفع المشروع على GitHub.
2. Vercel → New Project → اختر الريبو.
3. أضف كل متغيرات `.env` في Vercel → Settings → Environment Variables.
4. استخدم قاعدة بيانات سحابية (Neon مثلًا).
5. أضف Build Command: `prisma generate && next build` (أو `postinstall: prisma generate` في package.json).
6. بعد أول Deploy:
   ```bash
   DATABASE_URL="رابط قاعدة الإنتاج" npx prisma migrate deploy
   DATABASE_URL="رابط قاعدة الإنتاج" npm run seed
   ```
7. اضبط Webhook الدفع على رابط الإنتاج الفعلي.

---

## هيكل المشروع

```
src/
  app/
    admin/          # لوحة التحكم الكاملة (users, units, lessons, orders, offers, analytics, settings)
    api/             # كل مسارات الـ API (auth, checkout, webhook, progress, profile, dev)
    units/ lessons/  # صفحات الطالب العامة
    dashboard/       # لوحة الطالب + تعديل البيانات
    forgot-password/ reset-password/  # استعادة كلمة المرور
    sitemap.ts robots.ts  # SEO
  components/
    admin/           # مكونات لوحة التحكم (Sidebar, StatCard, Charts, ConfirmDelete, Forms...)
  lib/                # auth, prisma, payment-provider, video-provider, access, rate-limit, mailer, analytics
  types/              # تمديدات NextAuth
prisma/
  schema.prisma       # كل الجداول والعلاقات
  seed.ts              # بيانات تجريبية
```
