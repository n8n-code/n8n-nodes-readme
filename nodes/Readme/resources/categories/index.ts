import type { INodeProperties } from 'n8n-workflow';

export const categoriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					]
				}
			},
			"options": [
				{
					"name": "Get Category",
					"value": "Get Category",
					"action": "Get category",
					"description": "Returns the category with this slug",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Get Category Docs",
					"value": "Get Category Docs",
					"action": "Get docs for category",
					"description": "Returns the docs and children docs within this category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories/{{$parameter[\"slug\"]}}/docs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /categories/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category \"Getting Started\", enter the slug \"getting-started\"",
			"default": "getting-started",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category"
					]
				}
			}
		},
		{
			"displayName": "X Readme Version",
			"name": "x-readme-version",
			"required": true,
			"description": "Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.",
			"default": "v3.0",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-readme-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category"
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
						"Categories"
					],
					"operation": [
						"Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /categories/{slug}/docs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category Docs"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category \"Getting Started\", enter the slug \"getting-started\"",
			"default": "getting-started",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category Docs"
					]
				}
			}
		},
		{
			"displayName": "X Readme Version",
			"name": "x-readme-version",
			"required": true,
			"description": "Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.",
			"default": "v3.0",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-readme-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Category Docs"
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
						"Categories"
					],
					"operation": [
						"Get Category Docs"
					]
				}
			}
		},
];
