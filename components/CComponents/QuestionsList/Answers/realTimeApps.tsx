import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const RealTimeApps = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>Web Socket</h4>
				<span className='text-muted-foreground text-rtl'>
					WebSocket هو بروتوكول يسمح بفتح اتصال ثنائي (Two-way) دائم بين العميل (Client) و الخادم (Server).
				</span>
				<span className='text-muted-foreground text-rtl'>
					العميل والسيرفر يقدروا يرسلوا ويستقبلوا رسائل في أي وقت بدون إعادة إنشاء اتصال جديد.
				</span>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl text-2xl'>استخدامه</h1>

					<span className='text-muted-foreground text-rtl'>التطبيقات اللحظية (Real-time apps).</span>
					<span className='text-muted-foreground text-rtl'>تطبيقات الدردشة (Chat apps).</span>
					<span className='text-muted-foreground text-rtl'>الألعاب الأونلاين.</span>
				</div>

				<CodeMirrorEditor
					value={`const socket = new WebSocket('wss://echo.websocket.org');
// لما الاتصال يفتح
socket.onopen = () => {
    console.log('Connected!');
    socket.send('Hello Server');
};

// استقبال رسائل
socket.onmessage = (event) => {
    console.log('Message:', event.data);
};

// لو حصل خطأ
socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
};

// لما الاتصال ينغلق
socket.onclose = () => {
    console.log('Connection closed');
};
`}
				/>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>Pusher</h4>
				<span className='text-muted-foreground text-rtl'>
					Pusher هو خدمة طرف ثالث (Third-party Service) تقدم قنوات (Channels) للتواصل اللحظي بين العميل والسيرفر، وهو يعتمد في الخلفية على
					WebSockets لكن مع مزايا إضافية جاهزة.
				</span>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl text-2xl'>المزايا</h1>
					<span className='text-muted-foreground text-rtl'>Public Channels (قنوات عامة الكل يشوفها).</span>
					<span className='text-muted-foreground text-rtl'>Private Channels (قنوات خاصة تحتاج توثيق).</span>
					<span className='text-muted-foreground text-rtl'>Presence Channels (تعرف مين الأعضاء الموجودين بالقناة).</span>
					<span className='text-muted-foreground text-rtl'>Events (تحدد أسماء الأحداث اللي تستقبلها).</span>
					<span className='text-muted-foreground text-rtl'>History / Message Replay (في بعض الباقات).</span>
				</div>

				<CodeMirrorEditor
					value={`import { useEffect } from 'react';
import Pusher from 'pusher-js';

const PusherExample = () => {
    useEffect(() => {
        // تهيئة Pusher
        const pusher = new Pusher('YOUR_APP_KEY', {
            cluster: 'YOUR_APP_CLUSTER',
        });

        // الاشتراك في قناة
        const channel = pusher.subscribe('my-channel');

        // الاستماع لحدث معين
        channel.bind('my-event', (data: any) => {
            console.log('Received event:', data);
        });

        // تنظيف عند الخروج
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
            pusher.disconnect();
        };
    }, []);

    return <div>Pusher Example</div>;
};

export default PusherExample;
`}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'> الفرق بين Pusher و WebSockets</h4>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>WebSockets</th>
							<th>Pusher</th>
						</tr>
					</thead>
					<tbody className='text-rtl'>
						<tr>
							<td>البنية</td>
							<td>تحتاج تبني السيرفر كامل بنفسك </td>
							<td>خدمة جاهزة (Managed Service)</td>
						</tr>
						<tr>
							<td>السهولة </td>
							<td>تحتاج خبرة في إدارة الاتصالات </td>
							<td>مكتبة جاهزة</td>
						</tr>
						<tr>
							<td>المزايا</td>
							<td>مجرد قناة اتصال </td>
							<td>فيها Channels - Events - Presence جاهز</td>
						</tr>
						<tr>
							<td>السكاليتي</td>
							<td>أنت مسؤول عن التوسيع </td>
							<td>Pusher يتكفل به</td>
						</tr>
						<tr>
							<td>الحماية</td>
							<td>تحميها بنفسك </td>
							<td>عندهم حلول حماية مدمجة</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default RealTimeApps;
