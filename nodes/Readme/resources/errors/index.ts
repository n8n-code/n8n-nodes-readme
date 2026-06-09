import type { INodeProperties } from 'n8n-workflow';

export const errorsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Errors"
					]
				}
			},
			"options": [
				{
					"name": "Get Errors",
					"value": "Get Errors",
					"action": "Get errors",
					"description": "Returns with all of the error page types for this project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/errors"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /errors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Errors"
					],
					"operation": [
						"Get Errors"
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
						"Errors"
					],
					"operation": [
						"Get Errors"
					]
				}
			}
		},
];
