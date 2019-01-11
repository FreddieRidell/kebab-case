import k from "/.";

describe("kebab-case", () => {
	it("doens't change a string already in kebab case", () => {
		expect(k("foo-bar-baz")).toBe("foo-bar-baz")
	})

	it("replaces spaces with '-'", () => {
		expect(k("foo bar baz")).toBe("foo-bar-baz")
	})

	it("strips any non-alphanumeric characters", () => {})
	it("replaces capital transitions in camelCase", () => {});
	it("doesn't add a '-' at the start or end of a string", () => {});
})
