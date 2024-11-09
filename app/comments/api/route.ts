import { NextRequest, NextResponse } from 'next/server';
import { Comments, Connent_Req } from '../data';

// export async function GET(req: NextRequest) {
//   const url = req.nextUrl.searchParams;
//   const query = url.get("query");
//   return Response.json(Comments);
// }

export async function GET() {
	return Response.json(Comments);
}

export async function POST(request: Request) {
	const comment = await request.json();
	const newComment = {
		id: Comments.length + 1,
		name: comment.name,
		address: comment.address,
	};

	Comments.push(newComment);
	return new Response(JSON.stringify(newComment), {
		headers: { 'Content-Type': 'application/json' },
		status: 201,
	});
}

export async function PUT(request: NextRequest) {
	try {
		const formData = await request.formData();
		const selectedId = formData.get('id') as string;
		const selectedName = formData.get('name') as string;

		const commentInd = Comments.findIndex((item: any) => item.id == selectedId);
		if (commentInd !== -1) {
			Comments[commentInd].name = selectedName;
		} else {
			return NextResponse.json({ message: 'id not found' }, { status: 400 });
		}
		return NextResponse.json({ message: 'Updated Successfuly' }, { status: 200 });
	} catch (error) {
		console.log('error', error);
		return NextResponse.json({ message: 'error' }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const url = request.nextUrl.searchParams;
		const id = url.get('id');

		const commentInd = Comments.findIndex((item: any) => item.id == id);
		if (commentInd !== -1) {
			Comments.splice(commentInd, 1);
		} else {
			return NextResponse.json({ message: 'id not found' }, { status: 400 });
		}
		return NextResponse.json({ message: 'Deleted Successfuly' }, { status: 200 });
	} catch (error) {
		console.log('error', error);
		return NextResponse.json({ message: 'error' }, { status: 500 });
	}
}
