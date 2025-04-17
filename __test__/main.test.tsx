import { expect, describe, test, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { fetchUser, sumFn } from '@/lib/utils';

describe('sum function', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sumFn(1, 2)).toBe(3);
	});

	test('adds negative numbers correctly', () => {
		expect(sumFn(-1, -2)).toBe(-3);
	});

	test('adds zero correctly', () => {
		expect(sumFn(5, 0)).toBe(5);
	});
});

// محاكاة مكتبة axios
// jest.mock('axios');

// describe('getUser API', () => {
//     test('fetches user data successfully', async () => {
//       // تحديد البيانات المحاكاة
//       const mockUser = {
//         id: 1,
//         name: 'Leanne Graham',
//         email: 'Sincere@april.biz',
//       };

//       // محاكاة استجابة axios
//       axios.get.mockResolvedValue({ data: mockUser });

//       // استدعاء الدالة
//       const user = await getUser(1);

//       // التحقق من النتيجة
//       expect(user).toEqual(mockUser);
//       expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
//     });

//     test('handles API error', async () => {
//       // محاكاة خطأ
//       const errorMessage = 'Network Error';
//       axios.get.mockRejectedValue(new Error(errorMessage));

//       // التحقق من الخطأ
//       await expect(getUser(1)).rejects.toThrow(errorMessage);
//     });
//   });

// محاكاة fetch العالمية
const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
global.fetch = mockFetch;

describe('fetchUser function', () => {
	// تنظيف المحاكاة قبل كل اختبار
	beforeEach(() => {
		mockFetch.mockClear();
	});

	test('fetches user data successfully', async () => {
		// تحديد البيانات المحاكاة
		const mockUser = {
			id: 1,
			name: 'Leanne Graham',
			email: 'Sincere@april.biz',
		};

		// محاكاة استجابة fetch ناجحة
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockUser),
		} as Response);

		// استدعاء الدالة
		const user = await fetchUser(1);

		// التحقق من النتائج
		expect(user).toEqual(mockUser);
		expect(mockFetch).toHaveBeenCalledTimes(1);
		expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
	});

	test('handles fetch error', async () => {
		// محاكاة استجابة فاشلة
		mockFetch.mockResolvedValueOnce({
			ok: false,
			json: () => Promise.resolve({}),
		} as Response);

		// التحقق من رمي الخطأ
		await expect(fetchUser(1)).rejects.toThrow('Failed to fetch user');
		expect(mockFetch).toHaveBeenCalledTimes(1);
		expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
	});

	test('handles network error', async () => {
		// محاكاة خطأ شبكة (مثل انقطاع الاتصال)
		mockFetch.mockRejectedValueOnce(new Error('Network Error'));

		// التحقق من رمي الخطأ
		await expect(fetchUser(1)).rejects.toThrow('Network Error');
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});
});
