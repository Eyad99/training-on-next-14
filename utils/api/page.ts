const baseURL = 'https://jsonplaceholder.typicode.com/';

export interface ApiResponse<T = any> {
	data: T;
	statusCode: number;
	message: string;
	meta: { currentPage: number; itemsPerPage: number; totalItems: number; totalPages: number; sortBy: [] } | null;
	link: { current: string };
}

// Request Interceptor: Add Authorization Header
const requestInterceptor = (config: RequestInit): RequestInit => {
	const token = '';
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
};

// Response Interceptor: Handle Errors
const responseInterceptor = async (response: Response): Promise<ApiResponse> => {
 	if (!response.ok) {
		const errorData = await response.json();

		if (response.status === 401) {
			window.location.href = '/401';
		} else {
			console.error('Error:', errorData.message || response.statusText);
		}
		return Promise.reject(errorData);
	}

	return response.json();
};

// Helper function for making API requests
const apiRequest = async (url: string, config: RequestInit = {}): Promise<ApiResponse> => {
	const finalConfig = requestInterceptor({
		...config,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...config.headers,
		},
	});

	const response = await fetch(`${baseURL}${url}`, finalConfig);
	return responseInterceptor(response);
};

// CRUD methods
export const get = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'GET' });
export const post = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'POST', body: JSON.stringify(body) });
export const put = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PUT', body: JSON.stringify(body) });
export const destroy = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'DELETE' });
export const patch = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PATCH', body: JSON.stringify(body) });
