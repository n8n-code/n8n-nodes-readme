import type { INodeProperties } from 'n8n-workflow';

export const docsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					]
				}
			},
			"options": [
				{
					"name": "Create Doc",
					"value": "Create Doc",
					"action": "Create doc",
					"description": "Create a new doc inside of this project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/docs"
						}
					}
				},
				{
					"name": "Search Docs",
					"value": "Search Docs",
					"action": "Search docs",
					"description": "Returns all docs that match the search",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/docs/search"
						}
					}
				},
				{
					"name": "Delete Doc",
					"value": "Delete Doc",
					"action": "Delete doc",
					"description": "Delete the doc with this slug",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/docs/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Get Doc",
					"value": "Get Doc",
					"action": "Get doc",
					"description": "Returns the doc with this slug",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/docs/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "Update Doc",
					"value": "Update Doc",
					"action": "Update doc",
					"description": "Update a doc with this slug",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/docs/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /docs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Create Doc"
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
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters",
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
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"description": "Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory ",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the page",
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
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"displayName": "Parent Doc",
			"name": "parentDoc",
			"type": "string",
			"default": "",
			"description": "For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc",
			"routing": {
				"send": {
					"property": "parentDoc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Create Doc"
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
			"description": "Title of the page",
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
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "basic",
			"description": "Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the \"guides\" section). Can be \"basic\" (most common), \"error\" (page desribing an API error), or \"link\" (page that redirects to an external link)",
			"options": [
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Error",
					"value": "error"
				},
				{
					"name": "Link",
					"value": "link"
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
						"Docs"
					],
					"operation": [
						"Create Doc"
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
						"Docs"
					],
					"operation": [
						"Create Doc"
					]
				}
			}
		},
		{
			"displayName": "POST /docs/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Search Docs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"required": true,
			"description": "Search string to look for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Search Docs"
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
						"Docs"
					],
					"operation": [
						"Search Docs"
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
						"Docs"
					],
					"operation": [
						"Search Docs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /docs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Delete Doc"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled \"New Features\", enter the slug \"new-features\"",
			"default": "new-features",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Delete Doc"
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
						"Docs"
					],
					"operation": [
						"Delete Doc"
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
						"Docs"
					],
					"operation": [
						"Delete Doc"
					]
				}
			}
		},
		{
			"displayName": "GET /docs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Get Doc"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled \"New Features\", enter the slug \"new-features\"",
			"default": "new-features",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Get Doc"
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
						"Docs"
					],
					"operation": [
						"Get Doc"
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
						"Docs"
					],
					"operation": [
						"Get Doc"
					]
				}
			}
		},
		{
			"displayName": "PUT /docs/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"description": "Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled \"New Features\", enter the slug \"new-features\"",
			"default": "new-features",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Update Doc"
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
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters",
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
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"description": "Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory ",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": true,
			"description": "Visibility of the page",
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
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"displayName": "Parent Doc",
			"name": "parentDoc",
			"type": "string",
			"default": "",
			"description": "For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc",
			"routing": {
				"send": {
					"property": "parentDoc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Docs"
					],
					"operation": [
						"Update Doc"
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
			"description": "Title of the page",
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
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "basic",
			"description": "Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the \"guides\" section). Can be \"basic\" (most common), \"error\" (page desribing an API error), or \"link\" (page that redirects to an external link)",
			"options": [
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Error",
					"value": "error"
				},
				{
					"name": "Link",
					"value": "link"
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
						"Docs"
					],
					"operation": [
						"Update Doc"
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
						"Docs"
					],
					"operation": [
						"Update Doc"
					]
				}
			}
		},
];
