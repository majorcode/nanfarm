import { useState } from "preact/hooks";

export default function MetroForm() {
	const defaultChecks = [2, 3, 5, 6, 7, 8];
	const allChecks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const [checks, setChecks] = useState(defaultChecks);

	return (
		<form action="/ups/truck_audit.html">
			<div class="flex gap-8">
				<div>
					<h4 class="mt-0">Cherry Hill</h4>
					<MetroCheckbox number="1" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="2" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="3" checks={checks} setChecks={setChecks} />
				</div>
				<div>
					<h4 class="mt-0">Burlington</h4>
					<MetroCheckbox number="4" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="5" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="6" checks={checks} setChecks={setChecks} />
				</div>
				<div>
					<h4 class="mt-0">Marlton</h4>
					<MetroCheckbox number="7" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="8" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="9" checks={checks} setChecks={setChecks} />
				</div>
				<div>
					<h4 class="mt-0">Woodbury</h4>
					<MetroCheckbox number="10" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="11" checks={checks} setChecks={setChecks} />
					<MetroCheckbox number="12" checks={checks} setChecks={setChecks} />
				</div>
			</div>
			<button class="mt-6 w-1/5 btn btn-xs btn-outline" type="button" onClick={(e) => setChecks([])}>Clear</button>
			<button class="mt-6 ml-1 w-1/5 btn btn-xs btn-outline" type="button" onClick={(e) => setChecks(defaultChecks)}>Saturday</button>
			<button class="mt-6 ml-1 w-1/5 btn btn-xs btn-outline" type="button" onClick={() => setChecks(allChecks)}>Check All</button>
			<button class="mt-6 ml-4 w-1/5 btn btn-xs" type="submit" disabled={checks.length == 0}>Print</button>
		</form>
	)
}

const MetroCheckbox = ({number, checks, setChecks}) => {
	const checked = checks.includes(parseInt(number));

	const toggleCheck = (e) => {
		const newChecks = [...checks];
		const index = newChecks.indexOf(parseInt(number));
		if (index > -1) {
			newChecks.splice(index, 1);
		} else {
			newChecks.push(parseInt(number));
		}
		setChecks(newChecks);
	}

	return (
		<label class="cursor-pointer label">
			<input type="checkbox" checked={checked} onClick={toggleCheck} class="checkbox checkbox-xs" name="metro" value={number} id={number} />
			<span for={number} class="mr-4 ml-2 label-text">Metro {number}</span>
		</label>
	)
}