"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadUtilsService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const SparkMD5 = require("spark-md5");
const configuration_1 = require("../configuration");
const rxjs_1 = require("rxjs");
let UploadUtilsService = class UploadUtilsService {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
    }
    upload(authenticationKey, body, onProgress, extraHttpRequestParams) {
        return rxjs_1.Observable.defer(() => __awaiter(this, void 0, void 0, function* () {
            let { file, name, chunkSize, chunkMd5 } = body;
            let chunkMD5String;
            let lastChunk = false;
            if (!chunkSize) { // if chunk size is not defined by the user in request body
                chunkSize = 2097152; //2MB
            }
            // calculating the MD5 hash of the complete file
            const md5 = yield this.computeChecksumMd5(file);
            // checking if the file was already uploaded using the calculated MD5 hash
            const offsetFileResource = yield this.uploadService.getFileResource(md5, authenticationKey).toPromise();
            // getting the size of already uploaded file
            const offset = offsetFileResource ? offsetFileResource.offset : 0;
            if (offset >= file.size) { // file is already completely uploaded
                return offsetFileResource;
            }
            for (let start = offset; start < file.size; start += chunkSize) {
                const chunk = file.slice(start, start + chunkSize);
                if (name === undefined || name === null) { // if user has not specified filename in request body
                    // use the uploaded file's original name
                    name = file.name;
                }
                if (chunkMd5) { // if need to calculate MD5 of each chunk, as specified in request body
                    const chunkFile = new File([chunk], file.name);
                    // calculating MD5 hash of the current chunk
                    chunkMD5String = yield this.computeChecksumMd5(chunkFile);
                }
                if ((start + chunkSize) >= file.size) { // this is the last chunk
                    // either the total file size is less than chunk size
                    // or most of the file was already uploaded and only 1 last chunk needs to be uploaded
                    lastChunk = true;
                }
                // uploading chunk
                const response = yield this.uploadService.uploadFileWithChunkMd5(authenticationKey, md5, name, chunkMD5String, lastChunk, chunk, extraHttpRequestParams).toPromise();
                // sending progress via callback
                const progress = Math.round((response.offset / file.size) * 100);
                if (onProgress) {
                    onProgress(progress + '%');
                }
                if (lastChunk) {
                    // if file is uploaded completely, return the complete fileResource
                    return response;
                }
            }
        }));
    }
    computeChecksumMd5(file) {
        return new Promise((resolve, reject) => {
            const chunkSize = 2097152;
            const spark = new SparkMD5.ArrayBuffer();
            const fileReader = new FileReader();
            let cursor = 0;
            fileReader.onerror = function () {
                reject('MD5 computation failed - error reading the file');
            };
            function processChunk(chunk_start) {
                const chunk_end = Math.min(file.size, chunk_start + chunkSize);
                fileReader.readAsArrayBuffer(file.slice(chunk_start, chunk_end));
            }
            fileReader.onload = function (e) {
                spark.append(e.target.result);
                cursor += chunkSize;
                if (cursor < file.size) {
                    processChunk(cursor);
                }
                else {
                    resolve(spark.end());
                }
            };
            processChunk(0);
        });
    }
};
UploadUtilsService = __decorate([
    core_1.Injectable()
], UploadUtilsService);
exports.UploadUtilsService = UploadUtilsService;
//# sourceMappingURL=uploadUtils.service.js.map