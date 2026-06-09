import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { projectsDescription } from './resources/projects';
import { apiSpecificationDescription } from './resources/api-specification';
import { categoriesDescription } from './resources/categories';
import { changelogDescription } from './resources/changelog';
import { customPagesDescription } from './resources/custom-pages';
import { docsDescription } from './resources/docs';
import { errorsDescription } from './resources/errors';
import { versionDescription } from './resources/version';

export class Readme implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'readme',
		name: 'N8nDevReadme',
		icon: { light: 'file:./readme.svg', dark: 'file:./readme.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Create beautiful product and API documentation with our developer friendly platform',
		defaults: { name: 'readme' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevReadmeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Projects",
					"value": "Projects",
					"description": ""
				},
				{
					"name": "API Specification",
					"value": "API Specification",
					"description": ""
				},
				{
					"name": "Categories",
					"value": "Categories",
					"description": ""
				},
				{
					"name": "Changelog",
					"value": "Changelog",
					"description": ""
				},
				{
					"name": "Custom Pages",
					"value": "Custom Pages",
					"description": ""
				},
				{
					"name": "Docs",
					"value": "Docs",
					"description": ""
				},
				{
					"name": "Errors",
					"value": "Errors",
					"description": ""
				},
				{
					"name": "Version",
					"value": "Version",
					"description": ""
				}
			],
			"default": ""
		},
		...projectsDescription,
		...apiSpecificationDescription,
		...categoriesDescription,
		...changelogDescription,
		...customPagesDescription,
		...docsDescription,
		...errorsDescription,
		...versionDescription
		],
	};
}
