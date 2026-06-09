import type { INodeProperties } from 'n8n-workflow';

export const changelogDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					]
				}
			},
			"options": [
				{
					"name": "Get Changelogs",
					"value": "Get Changelogs",
					"action": "Get changelogs",
					"description": "Returns a list of changelogs associated with the project API key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/changelogs"
						}
					}
				},
				{
					"name": "Create Changelog",
					"value": "Create Changelog",
					"action": "Create changelog",
					"description": "Create a new changelog inside of this project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/changelogs"
						}
					}
				},
				{
					"name": "Delete Changelog",
					"value": "Delete Changelog",
					"action": "Delete changelog",
					"description": "Delete the changelog with this slug",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/changelogs/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Get Changelog",
					"value": "Get Changelog",
					"action": "Get changelog",
					"description": "Returns the changelog with this slug",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/changelogs/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Update Changelog",
					"value": "Update Changelog",
					"action": "Update changelog",
					"description": "Update a changelog with this slug",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/changelogs/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /changelogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Get Changelogs"
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
						"Changelog"
					],
					"operation": [
						"Get Changelogs"
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
						"Changelog"
					],
					"operation": [
						"Get Changelogs"
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
						"Changelog"
					],
					"operation": [
						"Get Changelogs"
					]
				}
			}
		},
		{
			"displayName": "POST /changelogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Create Changelog"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body content of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Create Changelog"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Create Changelog"
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
			"description": "Title of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Create Changelog"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "",
					"value": ""
				},
				{
					"name": "Added",
					"value": "added"
				},
				{
					"name": "Fixed",
					"value": "fixed"
				},
				{
					"name": "Improved",
					"value": "improved"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				},
				{
					"name": "Removed",
					"value": "removed"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Create Changelog"
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
						"Changelog"
					],
					"operation": [
						"Create Changelog"
					]
				}
			}
		},
		{
			"displayName": "DELETE /changelogs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Delete Changelog"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of changelog",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Delete Changelog"
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
						"Changelog"
					],
					"operation": [
						"Delete Changelog"
					]
				}
			}
		},
		{
			"displayName": "GET /changelogs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of changelog",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Get Changelog"
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
						"Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "PUT /changelogs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Update Changelog"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of changelog",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Update Changelog"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body content of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Update Changelog"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Update Changelog"
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
			"description": "Title of the changelog",
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
						"Changelog"
					],
					"operation": [
						"Update Changelog"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "",
					"value": ""
				},
				{
					"name": "Added",
					"value": "added"
				},
				{
					"name": "Fixed",
					"value": "fixed"
				},
				{
					"name": "Improved",
					"value": "improved"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				},
				{
					"name": "Removed",
					"value": "removed"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Changelog"
					],
					"operation": [
						"Update Changelog"
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
						"Changelog"
					],
					"operation": [
						"Update Changelog"
					]
				}
			}
		},
];
