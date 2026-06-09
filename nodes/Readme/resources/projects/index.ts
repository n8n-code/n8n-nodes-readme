import type { INodeProperties } from 'n8n-workflow';

export const projectsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					]
				}
			},
			"options": [
				{
					"name": "Get Project",
					"value": "Get Project",
					"action": "Get metadata about the current project",
					"description": "Returns project data for API key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Get Project"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for apiKey",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Get Project"
					]
				}
			}
		},
];
