const k = require(".");

describe("kebab-case", () => {
	it("doens't change a string already in kebab case", () => {
		expect(k("foo-bar-baz")).toBe("foo-bar-baz")
	})

	it("replaces spaces with '-'", () => {
		expect(k("foo bar baz")).toBe("foo-bar-baz")
	})

	it("strips any non-alphanumeric characters", () => {
		expect(k("1foo ' 2 bar *_ b3az")).toBe("1foo-2-bar-b3az")
	})
	it("replaces capital transitions in camelCase and PascalCase", () => {
		expect(k("fooBarBaz")).toBe("foo-bar-baz")
		expect(k("FooBarBaz")).toBe("foo-bar-baz")
	});
	it("doesn't add a '-' at the start or end of a string", () => {
		expect(k("   foo bar baz   ")).toBe("foo-bar-baz")
		expect(k("   FooBarBaz   ")).toBe("foo-bar-baz")
	});
})
