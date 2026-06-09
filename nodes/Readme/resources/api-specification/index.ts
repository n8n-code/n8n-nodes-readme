import type { INodeProperties } from 'n8n-workflow';

export const apiSpecificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					]
				}
			},
			"options": [
				{
					"name": "Get API Specification",
					"value": "Get API Specification",
					"action": "Get API Specification",
					"description": "Get API specification metadata",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api-specification"
						}
					}
				},
				{
					"name": "Upload API Specification",
					"value": "Upload API Specification",
					"action": "Upload API Specification",
					"description": "Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api-specification"
						}
					}
				},
				{
					"name": "Delete API Specification",
					"value": "Delete API Specification",
					"action": "Delete API Specification",
					"description": "Delete an API specification in ReadMe",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api-specification/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update API Specification",
					"value": "Update API Specification",
					"action": "Update API Specification",
					"description": "Update an API specification in ReadMe",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api-specification/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api-specification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Get API Specification"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "Number of items to include in pagination (up to 100, defaults to 10)",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Get API Specification"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Used to specify further pages (starts at 1)",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Get API Specification"
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
						"API Specification"
					],
					"operation": [
						"Get API Specification"
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
						"API Specification"
					],
					"operation": [
						"Get API Specification"
					]
				}
			}
		},
		{
			"displayName": "POST /api-specification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Upload API Specification"
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
						"API Specification"
					],
					"operation": [
						"Upload API Specification"
					]
				}
			}
		},
		{
			"displayName": "POST /api-specification<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Upload API Specification"
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
						"API Specification"
					],
					"operation": [
						"Upload API Specification"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api-specification/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Delete API Specification"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Delete API Specification"
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
						"API Specification"
					],
					"operation": [
						"Delete API Specification"
					]
				}
			}
		},
		{
			"displayName": "PUT /api-specification/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Update API Specification"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Update API Specification"
					]
				}
			}
		},
		{
			"displayName": "PUT /api-specification/{id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Specification"
					],
					"operation": [
						"Update API Specification"
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
						"API Specification"
					],
					"operation": [
						"Update API Specification"
					]
				}
			}
		},
];
