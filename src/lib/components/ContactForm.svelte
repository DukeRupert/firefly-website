<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { client } from '$lib/stores/App'

	export let ContactForm = {
		title: "Let's Work Together",
		body: "We would love to hear from you! Send us a message using the form below, or email us."
	}

	// Set context for success page
	let first: string = '';
	let last: string = '';
	$: client.set({
		first: first,
		last: last
	});

	// Placeholder Data
	let crewChoice = 0;
	const crew = [
		{ first: 'Malcom', last: 'Reynolds', email: 'browncoat@gmail.com' },
		{ first: 'Zoe', last: 'Washburne', email: 'slinkydress@gmail.com' },
		{ first: 'River', last: 'Tam', email: 'nopowerintheverse@gmail.com' },
		{ first: 'Simon', last: 'Tam', email: 'traumadoc@gmail.com' },
		{ first: 'Kaylee', last: 'Frye', email: 'naturaltalent@gmail.com' },
		{ first: 'Inara', last: 'Sera', email: 'lonelycompanion@gmail.com' },
		{ first: 'Hoban', last: 'Washburne', email: 'aleafonthewind@gmail.com' },
		{ first: 'Jayne', last: 'Cobb', email: 'vera@gmail.com' }
	];
	const getRandomInt = (max: number) => {
		return Math.floor(Math.random() * max);
	};

	function handleSuccess(event) {
		const { response, ...context } = event.detail;
		goto('/success');
	}

	function handleError(event) {
		const { error, ...context } = event.detail;
		// `FelteSubmitError` contains a `response` property
		// with the response from `fetch`
		const response = error.response;
		// Do something with the error
		console.log(`Error : ${response.status} ${response.body}`);
		// goto('/error');
	}

	interface Errors {
		first: string;
		last: string;
		email: string;
		company: string;
		phone: string;
		service: string;
		marketingChannel: string;
	}

	interface Values {
		first: string;
		last: string;
		email: string;
		company: string;
		phone: string;
		service: string;
		marketingChannel: string;
	}

	// Form validation
	const { form, errors } = createForm({
		validate: (values: Values) => {
			const errors: Errors = {};
			if (!values.first) {
				errors.first = 'Must not be empty';
			}
			if (!values.last) {
				errors.last = 'Must not be empty';
			}
			if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
				errors.email = 'Must be a valid email';
			}
			if (
				values.phone !== '' &&
				!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
					values.phone
				)
			) {
				errors.phone = 'Must be a valid phone number';
			}
			if (!values.service) {
				errors.service = 'Must not be empty';
			}

			// Message cannot exceed 500 characters
			if (values.marketingChannel && values.marketingChannel.length > 100) {
				errors.marketingChannel = 'Too many characters.';
			}
			// Sanitize body of script tags
			if (values.marketingChannel && /<.*?script.*\/?>/gi.test(values.marketingChannel)) {
				errors.marketingChannel = '<script> tags are not allowed';
			}
			return errors;
		},
		extend: reporter
	});

	onMount(() => {
		crewChoice = getRandomInt(crew.length);
	});
</script>

<div id="contact-us" class="overflow-hidden bg-white mt-16 md:mt-24 lg:mt-32 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div class="relative mx-auto max-w-xl"> 
   <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ContactForm.title}</h2>
      <p class="mt-4 text-lg leading-6 text-gray-500">{ContactForm.body}</p>
    </div>
    <div class="mt-12">
	<form
	use:form
	action="/api/contact-us"
	method="POST"
	on:feltesuccess={handleSuccess}
	on:felteerror={handleError}
	class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
>
	<div>
		<label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
		<div class="mt-1">
			<input
				type="text"
				name="first"
				bind:value={first}
				placeholder={crew[crewChoice].first}
				id="first-name"
				autocomplete="given-name"
				class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
			/>
			<ValidationMessage for="first" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div>
		<label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
		<div class="mt-1">
			<input
				type="text"
				name="last"
				bind:value={last}
				placeholder={crew[crewChoice].last}
				id="last-name"
				autocomplete="family-name"
				class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
			/>
			<ValidationMessage for="last" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div class="sm:col-span-2">
		<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
		<div class="mt-1">
			<input
				id="email"
				name="email"
				type="email"
				placeholder={crew[crewChoice].email}
				autocomplete="email"
				class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
			/>
			<ValidationMessage for="email" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div class="hidden sm:col-span-2">
		<label for="password" class="block text-sm font-medium text-gray-900">Password</label>
		<div class="mt-1">
			<input
				type="text"
				id="password"
				name="password"
				class="block py-3 px-4 w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
			/>
		</div>
	</div>
	<div class="sm:col-span-2">
		<label for="company" class="block text-sm font-medium text-gray-700">Company</label>
		<div class="mt-1">
			<input
				type="text"
				name="company"
				id="company"
				placeholder="Serenity"
				autocomplete="organization"
				class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
			/>
			<ValidationMessage for="company" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div class="sm:col-span-2">
		<div class="flex justify-between">
			<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
			<span id="phone-description" class="text-sm text-gray-500">Optional</span>
		</div>
		<div class="mt-1">
			<input
				type="text"
				name="phone"
				id="phone"
				placeholder="123-456-7890"
				autocomplete="tel"
				aria-describedby="phone-description"
				class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
			/>
			<ValidationMessage for="phone" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<fieldset class="sm:col-span-2">
		<legend class="block text-sm font-medium text-gray-700">How can we help you?</legend>
		<div class="mt-4 grid grid-cols-1 gap-y-4">
			<div class="flex items-center">
				<input
					id="createANewSite"
					name="service"
					value="createANewSite"
					type="radio"
					class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
				/>
				<label for="createANewSite" class="ml-3">
					<span class="block text-sm text-gray-700">Create a new website</span>
				</label>
			</div>
			<div class="flex items-center">
				<input
					id="improveOrFixCurrentSite"
					name="service"
					value="improveOrFixCurrentSite"
					type="radio"
					class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
				/>
				<label for="improveOrFixCurrentSite" class="ml-3">
					<span class="block text-sm text-gray-700">Improve/Fix your current website</span>
				</label>
			</div>
			<div class="flex items-center">
				<input
					id="designOrFixWebApp"
					name="service"
					value="designOrFixWebApp"
					type="radio"
					class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
				/>
				<label for="budget-50k-100k" class="ml-3">
					<span class="block text-sm text-gray-700">Design/Fix a web app</span>
				</label>
			</div>
			<div class="flex items-center">
				<input
					id="consulting"
					name="service"
					value="consulting"
					type="radio"
					class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
				/>
				<label for="consulting" class="ml-3">
					<span class="block text-sm text-gray-700">Consulting</span>
				</label>
			</div>
			<ValidationMessage for="service" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</fieldset>
	<div class="sm:col-span-2">
		<label for="how-did-you-hear-about-us" class="block text-sm font-medium text-gray-700"
			>How did you hear about us?</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="marketingChannel"
				id="how-did-you-hear-about-us"
				class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
			<ValidationMessage for="marketingChannel" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div class="text-right sm:col-span-2">
		<button
			type="submit"
			class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>Submit</button
		>
	</div>
</form>
	</div>
  </div>
</div>

