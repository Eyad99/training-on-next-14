import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const GraphQl = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-3xl'>🧠 أولاً: ما هو GraphQL؟</h4>
				<span className='text-muted-foreground'>
					GraphQL هي لغة استعلام (Query Language) وبيئة تنفيذ (Runtime) صُمّمت لجعل عملية جلب البيانات من السيرفر أكثر مرونة وكفاءة.{' '}
				</span>
				<span className='text-muted-foreground'>
					بدل ما السيرفر يقرر ما الذي يعيد إليك، أنت كعميل (Frontend) تحدد بالضبط البيانات التي تريدها — ولا شيء غيرها.
				</span>
			</div>

			<div className='flex flex-col text-rtl'>
				<h6 className='font-bold text-2xl'>مثال يوضّح الفكرة</h6>
				<div className='flex flex-col '>
					<h6 className='font-bold text-lg'>REST API التقليدي</h6>
					<span>إذا أردت جلب المستخدم ومنشوراته:</span>
					<ul className='list-disc list-inside text-gray-700 space-y-2'>
						<li>/users/1 → يرجع بيانات المستخدم</li>
						<li>/users/1/posts → يرجع منشوراته</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h6 className='font-bold text-lg'>GraphQL</h6>
					<span>تقدر تطلب كل شيء في طلب واحد فقط:</span>
					<CodeMirrorEditor
						value={`query {
  user(id: 1) {
    name
    email
    posts {
      title
      content
    }
  }
}
`}
					/>
					<span>السيرفر يرجع فقط الحقول المطلوبة، بشكل متداخل</span>
					<span> لا تحتاج endpoints متعددة.</span>
				</div>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-3xl'>⚙️ ثانياً: كيف يعمل GraphQL داخلياً؟</h4>
				<span>كل مشروع GraphQL يتكوّن من 3 أجزاء أساسية: </span>{' '}
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>Schema (المخطط) → يعرّف أنواع البيانات والعمليات المتاحة.</li>
					<li>Resolvers (المعالجون) → دوال تحدد كيف تُجلب أو تُعدّل البيانات.</li>
					<li>Query/Mutation/Subscription → العمليات التي ينفذها العميل.</li>
				</ul>
			</div>

			{/* Schema */}
			<div className='flex flex-col text-rtl'>
				<h6 className='font-bold text-2xl'> 🧩 1. Schema (المخطط) </h6>
				<CodeMirrorEditor
					value={`type Todo {
  id: ID!
  text: String!
  done: Boolean!
}

type Query {
  todos: [Todo!]!
}

type Mutation {
  addTodo(text: String!): Todo!
  toggleTodo(id: ID!): Todo!
}

type Subscription {
  todoAdded: Todo!
}
`}
				/>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>Query → العمليات التي تجلب البيانات.</li>
					<li>Mutation → العمليات التي تعدّل البيانات (إضافة، حذف، تعديل...).</li>
					<li>Subscription → العمليات التي تستقبل تحديثات لحظية (real-time) من السيرفر.</li>
				</ul>
			</div>

			{/* Resolvers */}
			<div className='flex flex-col text-rtl'>
				<h6 className='font-bold text-2xl'> ⚡️ 2. Resolvers (على السيرفر) </h6>
				<span>هي دوال تنفّذ العمليات المعرّفة في الـ Schema.</span>
				<CodeMirrorEditor
					value={`const resolvers = {
  Query: {
    todos: () => db.getAllTodos(),
  },
  Mutation: {
    addTodo: (_, { text }) => db.addTodo(text),
  },
  Subscription: {
    todoAdded: {
      subscribe: () => pubsub.asyncIterator(['TODO_ADDED']),
    },
  },
};
`}
				/>
			</div>

			{/* React with graphql */}
			<div className='flex flex-col text-rtl'>
				<h6 className='font-bold text-2xl'> 💡 3. كيف يتعامل React مع GraphQL؟</h6>
				<span>هنا يأتي دور Apollo Client</span>
			</div>

			{/* GraphQL with Apollo client */}
			<div className='flex flex-col text-rtl'>
				<h6 className='font-bold text-2xl'>🚀 GraphQL Integration in React with Apollo Client</h6>
				<span>Apollo Client هي مكتبة رسمية لإدارة الاتصال مع GraphQL من جهة العميل (React, Next.js, Vue...).</span>
				<span>توفّر لك أدوات لجلب وتعديل البيانات بسهولة، مع كاش ذكي، وتحديث لحظي، وتحكم كامل في الاستعلامات.</span>

				{/* Step 1 */}
				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>🧩 الخطوة 1: تثبيت Apollo Client</h6>
					<CodeMirrorEditor value={` npm install @apollo/client graphql`} />
				</div>

				{/* Step 2 */}
				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>🧩 الخطوة 2: إعداد ApolloProvider</h6>
					<span>في ملف index.js أو main.jsx:</span>
					<CodeMirrorEditor
						value={`import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }), // رابط الخادم
  cache: new InMemoryCache(), // كاش محلي
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
`}
					/>
				</div>

				{/* Step 3 */}
				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>🔍 الخطوة 3: Queries — جلب البيانات</h6>
					<span>تعريف الاستعلام:</span>
					<CodeMirrorEditor
						value={`query GetTodos {
  todos {
    id
    text
    done
  }
}
`}
					/>
					<span>في React:</span>{' '}
					<CodeMirrorEditor
						value={`import { gql, useQuery } from '@apollo/client';

const GET_TODOS = gql
  query GetTodos {
    todos {
      id
      text
      done
    }
  }
;

export default function Todos() {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>جارٍ التحميل...</p>;
  if (error) return <p>حدث خطأ: {error.message}</p>;

  return (
    <ul>
      {data.todos.map(todo => (
        <li key={todo.id}>
          {todo.text} {todo.done ? '✅' : '❌'}
        </li>
      ))}
    </ul>
  );
}
`}
					/>
					<ul className='list-disc list-inside text-gray-700 space-y-2'>
						<li>Apollo Client يرسل الطلب إلى /graphql.</li>
						<li>السيرفر ينفذ الاستعلام ويعيد البيانات فقط التي طلبتها.</li>
						<li>Apollo يخزّن النتيجة في الكاش.</li>
						<li>عند إعادة الاستعلام، Apollo قد يستخدم الكاش بدل الاتصال بالسيرفر (حسب السياسة).</li>
					</ul>
				</div>

				{/* Step 4 */}
				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>✍️ الخطوة 4: Mutations — تعديل البيانات</h6>
					<span>تعريف العملية:</span>
					<CodeMirrorEditor
						value={`mutation AddTodo($text: String!) {
  addTodo(text: $text) {
    id
    text
    done
  }
}
`}
					/>
					<span>في React:</span>{' '}
					<CodeMirrorEditor
						value={`import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      done
    }
  }


export default function AddTodo() {
  const [text, setText] = React.useState('');
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existing = []) {
            return [addTodo, ...existing];
          }
        }
      });
    }
  });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addTodo({ variables: { text } });
      setText('');
    }}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">إضافة</button>
    </form>
  );
}
`}
					/>
					<ul className='list-disc list-inside text-gray-700 space-y-2'>
						<li>useMutation تُستخدم لتشغيل العمليات التعديلية.</li>
						<li>update تُستخدم لتحديث الكاش مباشرة بدون إعادة استعلام.</li>
						<li>optimisticResponse يمكن إضافتها لتحديث فوري في الواجهة حتى قبل رد السيرفر (UI سريع).</li>
					</ul>
				</div>

				{/* Step 5 */}
				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>🔄 الخطوة 5: Subscriptions — التحديثات اللحظية (Real-Time)</h6>
					<div className='flex flex-col text-rtl'>
						{/* 1 */}
						<h6 className='font-bold text-lg'>1. السيرفر يرسل إشعارات عند حدوث حدث (باستخدام WebSockets).</h6>
						<span>مثلاً عندما يُضاف Todo جديد.</span>
						<CodeMirrorEditor
							value={`subscription {
  todoAdded {
    id
    text
    done
  }
}
`}
						/>
						{/* 2 */}
						<h6 className='font-bold text-lg'>2. في React:</h6>
						<CodeMirrorEditor
							value={`import { gql, useSubscription } from '@apollo/client';

const TODO_ADDED = gql
  subscription {
    todoAdded {
      id
      text
      done
    }
  }


export default function TodoSubscription() {
  const { data } = useSubscription(TODO_ADDED);

  React.useEffect(() => {
    if (data) {
      console.log('🎉 مهمة جديدة:', data.todoAdded);
    }
  }, [data]);

  return <p>بانتظار التحديثات اللحظية...</p>;
}
`}
						/>
						{/* 3 */}
						<h6 className='font-bold text-lg'>3. إعداد WebSocket Link</h6>
						<span>لكي تعمل الـ Subscriptions يجب أن تضيف رابط WebSocket في إعداد Apollo Client:</span>
						<CodeMirrorEditor
							value={`import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: { reconnect: true },
});

// توزيع الروابط: HTTP للـ Queries/Mutations وWS للـ Subscriptions
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
`}
						/>
					</div>
				</div>

				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>🔁 ملخص العلاقة بين الثلاثة:</h6>
					<div className='overflow-x-auto'>
						<table className='w-full border-collapse border border-gray-300'>
							<thead>
								<tr className='bg-gray-100'>
									<th className='border border-gray-300 p-2'>النوع</th>
									<th className='border border-gray-300 p-2'>الوصف</th>
									<th className='border border-gray-300 p-2'>مثال عملي</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border border-gray-300 p-2'>Query</td>
									<td className='border border-gray-300 p-2'>جلب البيانات من السيرفر</td>
									<td className='border border-gray-300 p-2'>useQuery(GET_TODOS)</td>
								</tr>
								<tr>
									<td className='border border-gray-300 p-2'>Mutation</td>
									<td className='border border-gray-300 p-2'>تعديل/إضافة بيانات</td>
									<td className='border border-gray-300 p-2'>useMutation(ADD_TODO)</td>
								</tr>
								<tr>
									<td className='border border-gray-300 p-2'>Subscription</td>
									<td className='border border-gray-300 p-2'>استقبال بيانات جديدة لحظياً</td>
									<td className='border border-gray-300 p-2'>useSubscription(TODO_ADDED)</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GraphQl;
