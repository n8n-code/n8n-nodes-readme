import type { INodeProperties } from 'n8n-workflow';

export const customPagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					]
				}
			},
			"options": [
				{
					"name": "Get Custom Pages",
					"value": "Get Custom Pages",
					"action": "Get custom pages",
					"description": "Returns a list of custom pages associated with the project API key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/custompages"
						}
					}
				},
				{
					"name": "Create Custom Page",
					"value": "Create Custom Page",
					"action": "Create custom page",
					"description": "Create a new custom page inside of this project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/custompages"
						}
					}
				},
				{
					"name": "Delete Custom Page",
					"value": "Delete Custom Page",
					"action": "Delete custom page",
					"description": "Delete the custom page with this slug",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/custompages/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Get Custom Page",
					"value": "Get Custom Page",
					"action": "Get custom page",
					"description": "Returns the custom page with this slug",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/custompages/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Update Custom Page",
					"value": "Update Custom Page",
					"action": "Update custom page",
					"description": "Update a custom page with this slug",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/custompages/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /custompages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Get Custom Pages"
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
						"Custom Pages"
					],
					"operation": [
						"Get Custom Pages"
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
						"Custom Pages"
					],
					"operation": [
						"Get Custom Pages"
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
						"Custom Pages"
					],
					"operation": [
						"Get Custom Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /custompages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body formatted in Markdown (displayed by default).",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the custom page",
			"routing": {
				"send": {
					"property": "hidden",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"displayName": "HTML",
			"name": "html",
			"type": "string",
			"default": "",
			"description": "Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).",
			"routing": {
				"send": {
					"property": "html",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Htmlmode",
			"name": "htmlmode",
			"type": "boolean",
			"default": false,
			"description": "**true** if `html` should be displayed, **false** if `body` should be displayed.",
			"routing": {
				"send": {
					"property": "htmlmode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title of the custom page",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
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
						"Custom Pages"
					],
					"operation": [
						"Create Custom Page"
					]
				}
			}
		},
		{
			"displayName": "DELETE /custompages/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Delete Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of custom page",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Delete Custom Page"
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
						"Custom Pages"
					],
					"operation": [
						"Delete Custom Page"
					]
				}
			}
		},
		{
			"displayName": "GET /custompages/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Get Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of custom page",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Get Custom Page"
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
						"Custom Pages"
					],
					"operation": [
						"Get Custom Page"
					]
				}
			}
		},
		{
			"displayName": "PUT /custompages/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of custom page",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body formatted in Markdown (displayed by default).",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the custom page",
			"routing": {
				"send": {
					"property": "hidden",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"displayName": "HTML",
			"name": "html",
			"type": "string",
			"default": "",
			"description": "Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).",
			"routing": {
				"send": {
					"property": "html",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"displayName": "Htmlmode",
			"name": "htmlmode",
			"type": "boolean",
			"default": false,
			"description": "**true** if `html` should be displayed, **false** if `body` should be displayed.",
			"routing": {
				"send": {
					"property": "htmlmode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title of the custom page",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
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
						"Custom Pages"
					],
					"operation": [
						"Update Custom Page"
					]
				}
			}
		},
];
