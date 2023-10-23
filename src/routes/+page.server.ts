import { setError, superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const form = await superValidate(formSchema);
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);

		return setError(form, 'username', 'Username already taken');
	}
};
