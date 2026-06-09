import type { INodeProperties } from 'n8n-workflow';

export const versionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					]
				}
			},
			"options": [
				{
					"name": "Get Versions",
					"value": "Get Versions",
					"action": "Get versions",
					"description": "Retrieve a list of versions associated with a project API key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/version"
						}
					}
				},
				{
					"name": "Create Version",
					"value": "Create Version",
					"action": "Create version",
					"description": "Create a new version",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/version"
						}
					}
				},
				{
					"name": "Delete Version",
					"value": "Delete Version",
					"action": "Delete version",
					"description": "Delete a version",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/version/{{$parameter[\"versionId\"]}}"
						}
					}
				},
				{
					"name": "Get Version",
					"value": "Get Version",
					"action": "Get version",
					"description": "Returns the version with this version ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/version/{{$parameter[\"versionId\"]}}"
						}
					}
				},
				{
					"name": "Update Version",
					"value": "Update Version",
					"action": "Update version",
					"description": "Update an existing version",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/version/{{$parameter[\"versionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Get Versions"
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
						"Version"
					],
					"operation": [
						"Get Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "Codename",
			"name": "codename",
			"type": "string",
			"default": "",
			"description": "Dubbed name of version",
			"routing": {
				"send": {
					"property": "codename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"description": "Semantic Version to use as the base fork",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "Is Beta",
			"name": "is_beta",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "Is Deprecated",
			"name": "is_deprecated",
			"type": "boolean",
			"default": true,
			"description": "Should this be deprecated? Only allowed in PUT operations",
			"routing": {
				"send": {
					"property": "is_deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "Is Hidden",
			"name": "is_hidden",
			"type": "boolean",
			"default": true,
			"description": "Should this be publically accessible?",
			"routing": {
				"send": {
					"property": "is_hidden",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "Is Stable",
			"name": "is_stable",
			"type": "boolean",
			"default": true,
			"description": "Should this be the **main** version",
			"routing": {
				"send": {
					"property": "is_stable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"description": "Semantic Version",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Create Version"
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
						"Version"
					],
					"operation": [
						"Create Version"
					]
				}
			}
		},
		{
			"displayName": "DELETE /version/{versionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Delete Version"
					]
				}
			}
		},
		{
			"displayName": "Version Id",
			"name": "versionId",
			"required": true,
			"description": "Semver version indentifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Delete Version"
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
						"Version"
					],
					"operation": [
						"Delete Version"
					]
				}
			}
		},
		{
			"displayName": "GET /version/{versionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Get Version"
					]
				}
			}
		},
		{
			"displayName": "Version Id",
			"name": "versionId",
			"required": true,
			"description": "Semver version indentifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Get Version"
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
						"Version"
					],
					"operation": [
						"Get Version"
					]
				}
			}
		},
		{
			"displayName": "PUT /version/{versionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Version Id",
			"name": "versionId",
			"required": true,
			"description": "Semver version indentifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Codename",
			"name": "codename",
			"type": "string",
			"default": "",
			"description": "Dubbed name of version",
			"routing": {
				"send": {
					"property": "codename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"description": "Semantic Version to use as the base fork",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Is Beta",
			"name": "is_beta",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Is Deprecated",
			"name": "is_deprecated",
			"type": "boolean",
			"default": true,
			"description": "Should this be deprecated? Only allowed in PUT operations",
			"routing": {
				"send": {
					"property": "is_deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Is Hidden",
			"name": "is_hidden",
			"type": "boolean",
			"default": true,
			"description": "Should this be publically accessible?",
			"routing": {
				"send": {
					"property": "is_hidden",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"displayName": "Is Stable",
			"name": "is_stable",
			"type": "boolean",
			"default": true,
			"description": "Should this be the **main** version",
			"routing": {
				"send": {
					"property": "is_stable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"description": "Semantic Version",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Version"
					],
					"operation": [
						"Update Version"
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
						"Version"
					],
					"operation": [
						"Update Version"
					]
				}
			}
		},
];
