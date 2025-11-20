import { useState } from "preact/hooks";

export default function MetroForm() {
	const defaultChecks = [2, 3, 5, 6, 7, 8];
	const allChecks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const [checks, setChecks] = useState(defaultChecks);

	return (
		<form action="/ups/truck_audit.html" class="mb-8">
			<div class="flex gap-4">
				<fieldset class="fieldset border-base-300 rounded-lg w-sm border p-4 pt-0 pb-3">
					<legend class="fieldset-legend">Cherry Hill</legend>
					<MetroCheckbox number="1" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="2" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="3" checks={checks} setChecks={setChecks} />
				</fieldset>
				<fieldset class="fieldset border-base-300 rounded-lg w-sm border p-4 pt-0 pb-3">
					<legend class="fieldset-legend">Burlington</legend>
					<MetroCheckbox number="4" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="5" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="6" checks={checks} setChecks={setChecks} />
				</fieldset>
				<fieldset class="fieldset border-base-300 rounded-lg w-sm border p-4 pt-0 pb-3">
					<legend class="fieldset-legend">Marlton</legend>
					<MetroCheckbox number="7" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="8" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="9" checks={checks} setChecks={setChecks} />
				</fieldset>
				<fieldset class="fieldset border-base-300 rounded-lg w-sm border p-4 pt-0 pb-3">
					<legend class="fieldset-legend">Woodbury</legend>
					<MetroCheckbox number="10" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="11" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="12" checks={checks} setChecks={setChecks} />
				</fieldset>
			</div>
			<div class="mt-5">
				<button
					class="w-1/5 btn btn-outline btn-primary btn-sm rounded-lg"
					type="button"
					onClick={() => setChecks([])}
				>
					Clear
				</button>
				<button
					class="ml-1 w-1/5 btn btn-outline btn-primary btn-sm rounded-lg"
					type="button"
					onClick={() => setChecks(defaultChecks)}
				>
					Saturday
				</button>
				<button
					class="ml-1 w-1/5 btn btn-outline btn-primary btn-sm rounded-lg"
					type="button"
					onClick={() => setChecks(allChecks)}
				>
					Check All
				</button>
				<button
					class="ml-8 w-1/5 btn btn-primary btn-sm rounded-lg"
					type="submit"
					disabled={checks.length == 0}
				>
					Print
				</button>
			</div>
		</form>
	);
}

const MetroCheckbox = ({ number, checks, setChecks }) => {
	const checked = checks.includes(parseInt(number));

	const toggleCheck = () => {
		const newChecks = [...checks];
		const index = newChecks.indexOf(parseInt(number));
		if (index > -1) {
			newChecks.splice(index, 1);
		} else {
			newChecks.push(parseInt(number));
		}
		setChecks(newChecks);
	};

	return (
		<label class="cursor-pointer label">
			<input
				type="checkbox"
				checked={checked}
				onClick={toggleCheck}
				class="checkbox checkbox-sm mr-1"
				name="metro"
				value={number}
				id={number}
			/>
			<span for={number}>Metro {number}</span>
		</label>
	);
};
