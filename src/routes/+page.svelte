<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { formSchema } from './schema';

	export let data;
</script>

<Form.Root
	class="w-[380px] mx-auto"
	form={data.form}
	schema={formSchema}
	method="post"
	let:config
	let:submitting
	let:errors
>
	<Card.Root>
		<Card.Header>
			<Card.Title>Sign up</Card.Title>
			<Card.Description>create an account</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if errors?._errors?.length}
				{#each errors._errors as error}
					<div
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-destructive"
					>
						{error}
					</div>
				{/each}
			{/if}
			<Form.Item>
				<Form.Field {config} name="username">
					<Form.Label>Username</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Field>
			</Form.Item>
			<Form.Item>
				<Form.Field {config} name="password">
					<Form.Label>Password</Form.Label>
					<Form.Input type="password" />
					<Form.Validation />
				</Form.Field>
			</Form.Item>
		</Card.Content>
		<Card.Footer>
			<Button type="submit" disabled={submitting}>Sign up</Button>
		</Card.Footer>
	</Card.Root>
</Form.Root>
