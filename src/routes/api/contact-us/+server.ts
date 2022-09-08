import postmark from 'postmark';
import { POSTMARK_API_KEY } from '$lib/constants';
import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

// Send an email:
const client = new postmark.ServerClient(POSTMARK_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	// Add date
	const date = new Date().toString();
	const data = { ...body, date: date };

	if (data.password !== '') {
		// Nice try bot
		return {
			status: 201,
			body: 'Nice try bot'
		};
	} else {
		// Send message
		const res = await client.sendEmailWithTemplate({
			TemplateId: 20829669,
			TemplateModel: data,
			From: 'logan@firefly.llc',
			To: 'logan@firefly.llc',
			MessageStream: 'outbound',
			TrackOpens: true
		});

		if (res.ErrorCode) {
			return new Response(res.Message, { status: res.ErrorCode });
		}

		return new Response('Success', { status: 200})
		
	}
};
