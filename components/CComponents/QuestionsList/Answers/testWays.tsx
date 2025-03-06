import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const TestWays = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col'>
					<h4 className='font-bold text-2xl'>Jest [Automation test]</h4>
					<span className='text-muted-foreground text-rtl'>
						Jest هو Testing Framework (إطار عمل للاختبار) مخصص أساسًا لاختبار JavaScript و TypeScript
					</span>
				</div>

				<div className='flex flex-col'>
					<h6 className='font-bold text-rtl'>المميزات</h6>
					<span className='text-muted-foreground text-rtl'>يدعم Snapshot Testing - يلتقط لقطة من الـ UI ويقارنها بين التحديثات.</span>
					<span className='text-muted-foreground text-rtl'>يدعم Mocks - تقدر تعمل mock لأي وظيفة أو مكتبة خارجية أثناء الاختبار</span>
					<span className='text-muted-foreground text-rtl'>ريع جدًا لأنه يستخدم Parallel Testing (يشغل عدة اختبارات في نفس الوقت).</span>
					<span className='text-muted-foreground text-rtl'>غطية شاملة - يدعم unit tests, integration tests وأحيانًا end-to-end tests.</span>
				</div>
				<div className='flex flex-col'>
					<h6 className='font-bold text-rtl'>متى استخدمه !</h6>
					<span className='text-muted-foreground text-rtl'>اختبار الدوال (Functions).</span>
					<span className='text-muted-foreground text-rtl'>اختبار المكونات (Components).</span>
					<span className='text-muted-foreground text-rtl'>اختبار الحالات المنطقية (Logic) داخل التطبيق</span>
				</div>
				<CodeMirrorEditor
					value={`import { render, screen } from '@testing-library/react';
                    import Button from './Button';

                    test('renders button with correct text', () => {
                        render(<Button text="Click me" />);
                        const buttonElement = screen.getByText(/Click me/i);
                        expect(buttonElement).toBeInTheDocument();
                    });
                    `}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				{/* 'End To End Test [E2E test (cypress)] */}
				<div className='flex flex-col'>
					<h4 className='font-bold text-2xl'>Cypress [E2E test]</h4>
					<span className='text-muted-foreground text-rtl'>
						Cypress هو End-to-End Testing Framework مخصص لفحص المواقع من منظور المستخدم الفعلي.
					</span>
				</div>

				<div className='flex flex-col'>
					<h6 className='font-bold text-rtl'>المميزات</h6>
					<span className='text-muted-foreground text-rtl'>يختبر كل شيء في المتصفح (E2E Tests).</span>
					<span className='text-muted-foreground text-rtl'>يوفر Dashboard ممتاز لمشاهدة الاختبارات خطوة بخطوة.</span>
					<span className='text-muted-foreground text-rtl'>
						يوفر Automatic Waiting - ما تحتاج تضيف wait يدويًا (ينتظر العنصر حتى يظهر تلقائيًا).
					</span>
					<span className='text-muted-foreground text-rtl'>يدعم Mocks و Stubs - تقدر تتحكم في الـ API Requests داخل الاختبار</span>
					<span className='text-muted-foreground text-rtl'>Real-Time Preview - تشوف التفاعل مع الصفحة لحظة بلحظة.</span>
				</div>
				<div className='flex flex-col'>
					<h6 className='font-bold text-rtl'>متى استخدمه !</h6>
					<span className='text-muted-foreground text-rtl'>اختبار تجربة المستخدم الكاملة.</span>
					<span className='text-muted-foreground text-rtl'>اختبار التنقل بين الصفحات.</span>
					<span className='text-muted-foreground text-rtl'>اختبار النماذج (Forms) والـ Inputs.</span>
					<span className='text-muted-foreground text-rtl'>لما تحب تتأكد أن الموقع يشتغل كويس مع الـ Backend.</span>
					<span className='text-muted-foreground text-rtl'></span>
				</div>
				<CodeMirrorEditor
					value={` describe('Login Test', () => {
                            it('should allow a user to log in', () => {
                                cy.visit('/login');
                                cy.get('input[name="email"]').type('user@example.com');
                                cy.get('input[name="password"]').type('password123');
                                cy.get('button[type="submit"]').click();
                                cy.url().should('include', '/dashboard');
                                });
                        });
                        `}
				/>
			</div>

			<div className='flex flex-col'>
				<h6 className='font-bold text-rtl'>⚔️ مقارنة بين Jest و Cypress</h6>
				<table>
					<thead className='text-rtl'>
						<tr>
							<th>Cypress</th>
							<th>Jest</th>
							<th></th>
						</tr>
					</thead>
					<tbody className='text-rtl'>
						<tr>
							<td>End-to-End</td>
							<td>Unit, Integration </td>
							<td>نوع الاختبار </td>
						</tr>
						<tr>
							<td>داخل المتصفح</td>
							<td>داخل Node.js (خارج المتصفح) </td>
							<td>بيئة التشغيل </td>
						</tr>
						<tr>
							<td>تجربة المستخدم الكاملة</td>
							<td>وظائف ومكونات منفصلة </td>
							<td>التركيز</td>
						</tr>
						<tr>
							<td>أبطأ لأنه يعتمد على تشغيل المتصفح</td>
							<td>سريع جدًا </td>
							<td>السرعة</td>
						</tr>
						<tr>
							<td>يحتاج إعداد إضافي</td>
							<td>أسهل في المشاريع الصغيرة </td>
							<td>سهولة التركيب </td>
						</tr>
						<tr>
							<td>تدفق المستخدم عبر صفحات متعددة</td>
							<td>منطق التطبيق، الخدمات، الوحدات الصغيرة </td>
							<td>أفضل استخدام </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TestWays;
