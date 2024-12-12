////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Screen {
	id;
	label;
	trinity;
	initializer;
	template;

	constructor(data) {
		const { id, label, initializer, trinity, template } = data;
		this.id = id;
		this.label = label;
		this.trinity = trinity;
		this.initializer = initializer;
		this.template = template;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	clone() {
		try { return this.template.content.cloneNode(true); }
		catch (error) {
			console.error(`Error Cloning Content from ${this.template.label}:`, error.message);
			throw error;
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default Screen;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////