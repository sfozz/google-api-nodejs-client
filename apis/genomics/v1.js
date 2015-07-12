/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Genomics API
 *
 * @classdesc An API to store, process, explore, and share DNA sequence reads, reference-based alignments, and variant calls.
 * @namespace genomics
 * @version  v1
 * @variation v1
 * @this Genomics
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {

  var self = this;
  this._options = options || {};

  this.datasets = {

    /**
     * genomics.datasets.list
     *
     * @desc Lists datasets within a project.
     *
     * @alias genomics.datasets.list
     * @memberOf! genomics(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.projectId - Required. The project to list datasets for.
     * @param  {integer=} params.pageSize - The maximum number of results returned by this request. If unspecified, defaults to 50. The maximum value is 1024.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.create
     *
     * @desc Creates a new dataset.
     *
     * @alias genomics.datasets.create
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.get
     *
     * @desc Gets a dataset by ID.
     *
     * @alias genomics.datasets.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.patch
     *
     * @desc Updates a dataset. This method supports patch semantics.
     *
     * @alias genomics.datasets.patch
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be updated.
     * @param  {string=} params.updateMask - An optional mask specifying which fields to update. At this time, the only mutable field is [name][google.genomics.v1.Dataset.name]. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.delete
     *
     * @desc Deletes a dataset.
     *
     * @alias genomics.datasets.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.undelete
     *
     * @desc Undeletes a dataset by restoring a dataset which was deleted via this API. This operation is only possible for a week after the deletion occurred.
     *
     * @alias genomics.datasets.undelete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be undeleted.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}:undelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.operations = {

    /**
     * genomics.operations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients may use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias genomics.operations.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.operations.list
     *
     * @desc Lists operations that match the specified filter in the request.
     *
     * @alias genomics.operations.list
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation collection.
     * @param  {string=} params.filter - A string for filtering [Operations][google.longrunning.Operation]. The following filter fields are supported: * projectId: Required. Corresponds to [OperationMetadata.projectId][google.genomics.v1.OperationMetadata.project_id]. * createTime: The time this job was created, in seconds from the [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
     * @param  {integer=} params.pageSize - The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
     * @param  {string=} params.pageToken - The standard List page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use [Operations.GetOperation][google.longrunning.Operations.GetOperation] or [Operations.ListOperations][google.longrunning.Operations.ListOperations] to check whether the cancellation succeeded or the operation completed despite cancellation.
     *
     * @alias genomics.operations.cancel
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be cancelled.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}:cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.operations.delete
     *
     * @desc This method is not implemented. To cancel an operation, please use [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
     *
     * @alias genomics.operations.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.readgroupsets = {

    /**
     * genomics.readgroupsets.import
     *
     * @desc Creates read group sets by asynchronously importing the provided information. Note that currently comments in the input file header are **not** imported and some custom tags will be converted to strings, rather than preserving tag types. The caller must have WRITE permissions to the dataset.
     *
     * @alias genomics.readgroupsets.import
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets:import',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.export
     *
     * @desc Exports a read group set to a BAM file in Google Cloud Storage. Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. In particular, comments in the input file header will not be preserved, some custom tags will be converted to strings, and original reference sequence order is not necessarily preserved.
     *
     * @alias genomics.readgroupsets.export
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - Required. The ID of the read group set to export.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}:export',
          method: 'POST'
        },
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.search
     *
     * @desc Searches for read group sets matching the criteria. Implements [GlobalAllianceApi.searchReadGroupSets](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchReadGroupSets).
     *
     * @alias genomics.readgroupsets.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.patch
     *
     * @desc Updates a read group set. This method supports patch semantics.
     *
     * @alias genomics.readgroupsets.patch
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param  {string=} params.updateMask - An optional mask specifying which fields to update. At this time, mutable fields are [referenceSetId][google.genomics.v1.ReadGroupSet.reference_set_id] and [name][google.genomics.v1.ReadGroupSet.name]. Acceptable values are "referenceSetId" and "name". If unspecified, all mutable fields will be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.delete
     *
     * @desc Deletes a read group set.
     *
     * @alias genomics.readgroupsets.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.get
     *
     * @desc Gets a read group set by ID.
     *
     * @alias genomics.readgroupsets.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    coveragebuckets: {

      /**
       * genomics.readgroupsets.coveragebuckets.list
       *
       * @desc Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range. Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
       *
       * @alias genomics.readgroupsets.coveragebuckets.list
       * @memberOf! genomics(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.readGroupSetId - Required. The ID of the read group set over which coverage is requested.
       * @param  {string=} params.referenceName - The name of the reference to query, within the reference set associated with this query. Optional.
       * @param  {string=} params.start - The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
       * @param  {string=} params.end - The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
       * @param  {string=} params.targetBucketWidth - The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param  {integer=} params.pageSize - The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}/coveragebuckets',
            method: 'GET'
          },
          params: params,
          requiredParams: ['readGroupSetId'],
          pathParams: ['readGroupSetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.reads = {

    /**
     * genomics.reads.search
     *
     * @desc Gets a list of reads for one or more read group sets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned. If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads. All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (reference sequence & position). Reads with equivalent genomic coordinates are returned in a deterministic order. Implements [GlobalAllianceApi.searchReads](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchReads).
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/reads/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.referencesets = {

    /**
     * genomics.referencesets.search
     *
     * @desc Searches for reference sets which match the given criteria. Implements [GlobalAllianceApi.searchReferenceSets](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchReferenceSets)
     *
     * @alias genomics.referencesets.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/referencesets/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.referencesets.get
     *
     * @desc Gets a reference set. Implements [GlobalAllianceApi.getReferenceSet](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.getReferenceSet").
     *
     * @alias genomics.referencesets.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.referenceSetId - The ID of the reference set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/referencesets/{referenceSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['referenceSetId'],
        pathParams: ['referenceSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.references = {

    /**
     * genomics.references.search
     *
     * @desc Searches for references which match the given criteria. Implements [GlobalAllianceApi.searchReferences](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchReferences).
     *
     * @alias genomics.references.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/references/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.references.get
     *
     * @desc Gets a reference. Implements [GlobalAllianceApi.getReference](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.getReference).
     *
     * @alias genomics.references.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.referenceId - The ID of the reference.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/references/{referenceId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    bases: {

      /**
       * genomics.references.bases.list
       *
       * @desc Lists the bases in a reference, optionally restricted to a range. Implements [GlobalAllianceApi.getReferenceBases](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.getReferenceBases).
       *
       * @alias genomics.references.bases.list
       * @memberOf! genomics(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.referenceId - The ID of the reference.
       * @param  {string=} params.start - The start position (0-based) of this query. Defaults to 0.
       * @param  {string=} params.end - The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param  {integer=} params.pageSize - Specifies the maximum number of bases to return in a single page.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://genomics.googleapis.com/v1/references/{referenceId}/bases',
            method: 'GET'
          },
          params: params,
          requiredParams: ['referenceId'],
          pathParams: ['referenceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.variants = {

    /**
     * genomics.variants.import
     *
     * @desc Creates variant data by asynchronously importing the provided information. The variants for import will be merged with any existing data and each other according to the behavior of mergeVariants. In particular, this means for merged VCF variants that have conflicting INFO fields, some data will be arbitrarily discarded. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
     *
     * @alias genomics.variants.import
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants:import',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.search
     *
     * @desc Gets a list of variants matching the criteria. Implements [GlobalAllianceApi.searchVariants](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchVariants).
     *
     * @alias genomics.variants.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.create
     *
     * @desc Creates a new variant.
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.patch
     *
     * @desc Updates a variant. This method supports patch semantics. Returns the modified variant without its calls.
     *
     * @alias genomics.variants.patch
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be updated.
     * @param  {string=} params.updateMask - An optional mask specifying which fields to update. At this time, mutable fields are [names][google.genomics.v1.Variant.names] and [info][google.genomics.v1.Variant.info]. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.delete
     *
     * @desc Deletes a variant.
     *
     * @alias genomics.variants.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.get
     *
     * @desc Gets a variant by ID.
     *
     * @alias genomics.variants.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.merge
     *
     * @desc Merges the given variants with existing variants. Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created. When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded.
     *
     * @alias genomics.variants.merge
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    merge: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants:merge',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.variantsets = {

    /**
     * genomics.variantsets.create
     *
     * @desc Creates a new variant set.
     *
     * @alias genomics.variantsets.create
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.export
     *
     * @desc Exports variant set data to an external destination.
     *
     * @alias genomics.variantsets.export
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}:export',
          method: 'POST'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.get
     *
     * @desc Gets a variant set by ID.
     *
     * @alias genomics.variantsets.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - Required. The ID of the variant set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.search
     *
     * @desc Returns a list of all variant sets matching search criteria. Implements [GlobalAllianceApi.searchVariantSets](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchVariantSets).
     *
     * @alias genomics.variantsets.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.delete
     *
     * @desc Deletes the contents of a variant set. The variant set object is not deleted.
     *
     * @alias genomics.variantsets.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.patch
     *
     * @desc Updates a variant set. This method supports patch semantics.
     *
     * @alias genomics.variantsets.patch
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant to be updated (must already exist).
     * @param  {string=} params.updateMask - An optional mask specifying which fields to update. At this time, the only mutable field is [metadata][google.genomics.v1.VariantSet.metadata]. The only acceptable value is "metadata". If unspecified, all mutable fields will be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.callsets = {

    /**
     * genomics.callsets.search
     *
     * @desc Gets a list of call sets matching the criteria. Implements [GlobalAllianceApi.searchCallSets](http://ga4gh.org/documentation/api/v0.5.1/ga4gh_api.html#/schema/org.ga4gh.searchCallSets).
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.create
     *
     * @desc Creates a new call set.
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.patch
     *
     * @desc Updates a call set. This method supports patch semantics.
     *
     * @alias genomics.callsets.patch
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set to be updated.
     * @param  {string=} params.updateMask - An optional mask specifying which fields to update. At this time, the only mutable field is [name][google.genomics.v1.CallSet.name]. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.delete
     *
     * @desc Deletes a call set.
     *
     * @alias genomics.callsets.delete
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.get
     *
     * @desc Gets a call set by ID.
     *
     * @alias genomics.callsets.get
     * @memberOf! genomics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Genomics object
 * @type Genomics
 */
module.exports = Genomics;