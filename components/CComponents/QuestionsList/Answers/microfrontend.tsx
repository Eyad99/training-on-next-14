import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const Microfrontend = () => {
	return (
		<div className='space-y-4 text-rtl'>
			<h2 className='text-2xl font-bold'>ما هو Microfrontend؟</h2>
			<p>
				Microfrontend هو نمط تصميم معماري في تطوير الواجهات الأمامية (Frontend) يهدف إلى تقسيم تطبيق الواجهة الأمامية الكبير إلى وحدات أصغر
				مستقلة يمكن تطويرها، نشرها، وصيانتها بشكل منفصل. يستلهم هذا المفهوم من Microservices في الواجهة الخلفية، حيث يتم تقسيم التطبيق إلى
				خدمات صغيرة تعمل معًا لتقديم وظائف متكاملة.
			</p>

			<h3 className='text-xl font-semibold mt-6'>الفكرة الأساسية:</h3>
			<ul className='list-disc pl-6 space-y-2 list-inside'>
				<li>بدلاً من وجود تطبيق واحد كبير (Monolith) للواجهة الأمامية، يتم تقسيمه إلى تطبيقات صغيرة (Microfrontends) تعمل معًا.</li>
				<li>كل Microfrontend مسؤول عن جزء معين من واجهة المستخدم (مثل رأس الصفحة، قائمة المنتجات، أو سلة التسوق).</li>
				<li>يمكن تطوير كل Microfrontend باستخدام تقنيات أو إطار عمل مختلف (مثل React، Vue، Angular) إذا لزم الأمر.</li>
				<li>يتم دمج هذه الوحدات في وقت التشغيل (Runtime) أو في وقت البناء (Build time) لتشكيل تطبيق واحد متكامل.</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6'>مزايا Microfrontend:</h3>
			<ul className='list-disc pl-6 space-y-2 list-inside'>
				<li>
					<strong>الاستقلالية:</strong> يمكن لفرق مختلفة العمل على أجزاء مختلفة من التطبيق بشكل مستقل، مما يقلل التبعية ويسرّع التطوير.
				</li>
				<li>
					<strong>إعادة الاستخدام:</strong> يمكن إعادة استخدام Microfrontend في تطبيقات أخرى.
				</li>
				<li>
					<strong>المرونة التقنية:</strong> كل Microfrontend يمكن أن يستخدم مكتبة أو إصدار مختلف من المكتبات.
				</li>
				<li>
					<strong>النشر المستقل:</strong> يمكن تحديث أو نشر كل جزء دون الحاجة إلى إعادة بناء التطبيق بأكمله.
				</li>
				<li>
					<strong>سهولة الصيانة:</strong> كل Microfrontend أصغر حجمًا وأسهل في الفهم والإدارة.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6'>تحديات Microfrontend:</h3>
			<ul className='list-disc pl-6 space-y-2 list-inside'>
				<li>
					<strong>التكامل:</strong> دمج التطبيقات الصغيرة قد يكون معقدًا، خاصة إذا كانت تستخدم تقنيات مختلفة.
				</li>
				<li>
					<strong>الأداء:</strong> تحميل عدة تطبيقات صغيرة قد يؤدي إلى زيادة وقت التحميل إذا لم تتم إدارته بشكل صحيح.
				</li>
				<li>
					<strong>تجربة المستخدم:</strong> يجب ضمان التناسق في التصميم والتجربة عبر جميع الأجزاء.
				</li>
				<li>
					<strong>إدارة الحالة:</strong> مشاركة البيانات بين Microfrontends قد تكون صعبة.
				</li>
				<li>
					<strong>التعقيد التشغيلي:</strong> إدارة النشر والتتبع لعدة تطبيقات صغيرة تتطلب أدوات متقدمة.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6'>كيف يتم تطبيق Microfrontend؟</h3>
			<p>هناك عدة طرق لتطبيق Microfrontend، وتشمل:</p>

			<h4 className='text-lg font-semibold mt-4'>التكامل على مستوى الخادم (Server-side Composition):</h4>
			<p>يتم دمج Microfrontends على مستوى الخادم، حيث يقوم الخادم بتجميع أجزاء الـ HTML من تطبيقات مختلفة وإرسالها إلى العميل.</p>
			<p>مثال: استخدام SSI (Server-Side Includes) أو إطار عمل مثل Mosaic من Zalando.</p>

			<h4 className='text-lg font-semibold mt-4'>التكامل على مستوى العميل (Client-side Composition):</h4>
			<p>
				يتم تحميل Microfrontends في المتصفح باستخدام JavaScript، مثل تحميل مكونات عبر &lt;iframe&gt; أو Web Components أو مكتبات مثل
				single-spa.
			</p>
			<p>هذا هو الأسلوب الأكثر شيوعًا مع React.</p>

			<h4 className='text-lg font-semibold mt-4'>التكامل في وقت البناء (Build-time Composition):</h4>
			<p>يتم دمج Microfrontends أثناء عملية البناء باستخدام أدوات مثل Webpack Module Federation.</p>
			<p>ينتج عن ذلك حزمة واحدة تحتوي على جميع الأجزاء.</p>

			<h4 className='text-lg font-semibold mt-4'>استخدام Web Components:</h4>
			<p>كل Microfrontend يتم إنشاؤه كـ Web Component مستقل يمكن تحميله ديناميكيًا في التطبيق الرئيسي.</p>

			<h4 className='text-lg font-semibold mt-4'>Iframe-based Integration:</h4>
			<p>يتم تحميل كل Microfrontend داخل &lt;iframe&gt;، ولكنه أقل شيوعًا بسبب مشاكل الأداء وتجربة المستخدم.</p>

			<h3 className='text-xl font-semibold mt-6'>تطبيق Microfrontend باستخدام React</h3>

			<h4 className='text-lg font-semibold mt-4'>ما هو single-spa؟</h4>
			<p>single-spa هو إطار عمل JavaScript يسمح بتحميل تطبيقات Microfrontend متعددة في صفحة واحدة ديناميكيًا.</p>
			<p>يدير دورة حياة التطبيقات (تحميل، تهيئة، تفريغ) بناءً على المسارات (Routes) أو الشروط.</p>

			<h3 className='text-xl font-semibold mt-6'>مثال عملي: بناء تطبيق Microfrontend باستخدام React و single-spa</h3>

			<h4 className='text-lg font-semibold mt-4'>السيناريو:</h4>
			<p>لنفترض أن لدينا تطبيقًا للتجارة الإلكترونية يتكون من:</p>
			<ul className='list-disc pl-6 space-y-2 list-inside'>
				<li>
					<strong>Products Microfrontend:</strong> يعرض قائمة المنتجات.
				</li>
				<li>
					<strong>Cart Microfrontend:</strong> يدير سلة التسوق.
				</li>
				<li>
					<strong>Root Application:</strong> التطبيق الرئيسي الذي يدمج هذه الأجزاء.
				</li>
			</ul>

			<h4 className='text-lg font-semibold mt-4'>الخطوات:</h4>

			<h5 className='text-md font-semibold mt-3'>1. إنشاء التطبيق الرئيسي (Root Application):</h5>
			<p>سيكون هذا التطبيق مسؤولاً عن تحميل وتنسيق Microfrontends باستخدام single-spa.</p>
			<p>قم بإنشاء مشروع جديد باستخدام Vite:</p>

			{/* Root */}
			<CodeMirrorEditor value={`npm create vite@latest root-config -- --template react`} />

			<p>قم بتثبيت single-spa:</p>
			<CodeMirrorEditor value={`npm install single-spa`} />

			<p>استبدل محتوى src/main.jsx بالتالي:</p>
			<CodeMirrorEditor
				value={`import { registerApplication, start } from "single-spa";
// تسجيل Microfrontend للمنتجات
registerApplication({
  name: "@my-org/products",
  app: () => System.import("@my-org/products"),
  activeWhen: ["/products"],
});

// تسجيل Microfrontend لسلة التسوق
registerApplication({
  name: "@my-org/cart",
  app: () => System.import("@my-org/cart"),
  activeWhen: ["/cart"],
});

// بدء single-spa
start();`}
			/>

			<p>استبدل محتوى index.html بالتالي:</p>
			<CodeMirrorEditor
				value={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Microfrontend App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/systemjs@6.8.3/dist/system.js"></script>
  </body>
</html>`}
			/>

			<p className='font-bold text-red-400'>او يمكننا اسيراد حزمة systemjs</p>

			<p>تأكد من أن ملف vite.config.js يسمح بتحميل الموارد عبر النطاقات:</p>
			<CodeMirrorEditor
				value={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: true,
  },
});`}
			/>

			{/* Products */}
			<h5 className='text-md font-semibold mt-3'>2. إنشاء Microfrontend للـ Products:</h5>
			<p>أنشئ مشروع React جديد:</p>
			<CodeMirrorEditor value={`npm create vite@latest products -- --template react`} />

			<p>قم بتثبيت single-spa-react:</p>
			<CodeMirrorEditor value={`npm install single-spa-react`} />

			<p>استبدل src/App.jsx بالتالي:</p>
			<CodeMirrorEditor
				value={`import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  const handleSelectProduct = (product) => {
    // إنشاء وإرسال حدث مخصص
    const event = new CustomEvent("productSelected", {
      detail: { product },
    });
    window.dispatchEvent(event);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleSelectProduct(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;`}
			/>

			<p>تأكد من تصدير دورة حياة single-spa في src/my-org-products.js:</p>
			<CodeMirrorEditor
				value={`import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div>Error in Products</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;`}
			/>

			<p>تعديل Vite لإخراج ملف single-spa:</p>
			<CodeMirrorEditor
				value={`
                import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    cors: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/my-org-products.jsx",
      output: {
        format: "system",
        entryFileNames: "products.js",
      },
    },
  },
});`}
			/>

			{/* Cart */}
			<h5 className='text-md font-semibold mt-3'>3. إنشاء Microfrontend للـ Cart:</h5>

			<p>أنشئ مشروعًا جديدًا:</p>
			<CodeMirrorEditor value={`npm create vite@latest cart -- --template react`} />

			<p>استبدل src/App.jsx بالتالي:</p>
			<CodeMirrorEditor
				value={`import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleProductSelected = (event) => {
      const product = event.detail.product;
      setCartItems((prevItems) => [...prevItems, product]);
    };

    window.addEventListener("productSelected", handleProductSelected);

    return () => {
      window.removeEventListener("productSelected", handleProductSelected);
    };
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;`}
			/>

			<p>تأكد من تصدير دورة حياة single-spa في src/my-org-cart.js:</p>

			<CodeMirrorEditor
				value={`import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App.jsx";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>Error in Cart</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;`}
			/>

			<p>تعديل Vite لإخراج ملف single-spa:</p>
			<CodeMirrorEditor
				value={`
             import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    cors: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/my-org-cart.jsx",
      output: {
        format: "system",
        entryFileNames: "cart.js",
      },
    },
  },
});`}
			/>

			<h5 className='text-md font-semibold mt-3'>4. إضافة التنقل بين التطبيقات</h5>
			<p>لتسهيل التنقل، أضف روابط في Root Config. استبدل src/App.jsx في root-config:</p>
			<CodeMirrorEditor
				value={`import React from "react";

function App() {
  return (
    <div>
      <nav>
        <a href="/">Home</a> | <a href="/products">Products</a> |{" "}
        <a href="/cart">Cart</a>
      </nav>
      <div id="single-spa-application:@my-org/products"></div>
      <div id="single-spa-application:@my-org/cart"></div>
    </div>
  );
}

export default App;`}
			/>
		</div>
	);
};

export default Microfrontend;
