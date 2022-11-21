import { createF21 } from "./component";

export default {
	title: "Components/Form Elements/Input",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		type: {
			control: { type: "select", },
			options: ["text","password","date","email","tel","url",],
			defaultValue: "text",
			description: "Sets the input type",
			table: {
				defaultValue: {
					summary: "text",
				},
			},
		},
		width: {
			control: { type: "select", },
			options: ["25%","33%","50%","66%","75%","100%",],
			defaultValue: "66%",
			description: "Sets the input width",
			table: {
				defaultValue: {
					summary: "66%",
				},
			},
		},
		label: {
			control: { type: "text", },
			defaultValue: "Field Label",
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: "Field Label",
				},
			},
		},
		required: {
			control: { type: "boolean", },
			defaultValue: false,
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		pseudoClass: {
			control: { type: "select", },
			options: ["default","focus","disabled","read-only",],
			defaultValue: "default",
			description: "Sets the input pseudoclass",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		value: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the input value",
			table: {
				defaultValue: {
					summary: "",
				},
			},
		},
		placeholder: {
			control: { type: "text", },
			defaultValue: "Placeholder Text",
			description: "Sets the input placeholder",
			table: {
				defaultValue: {
					summary: "Placeholder Text",
				},
			},
		},
		description: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the description visibility",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		descriptionValue: {
			control: { type: "text", },
			defaultValue: "Field Description",
			description: "Sets the description value",
			table: {
				defaultValue: {
					summary: "Field Description",
				},
			},
		},
		alert: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the alert visibility",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		alertIcon: {
			control: { type: "text", },
			defaultValue: "fa-face-laugh",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-face-laugh",
				},
			},
		},
		alertValue: {
			control: { type: "text", },
			defaultValue: "Alert Description",
			description: "Sets the alert value",
			table: {
				defaultValue: {
					summary: "Alert Description",
				},
			},
		},
	},
};

const Template = (args) => createF21(args);

export const Default = Template.bind({});
