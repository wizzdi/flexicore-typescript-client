import { DeleteObjectRequest } from './deleteObjectRequest';
export interface DeleteResponse {
    deleted?: any[];
    failed?: DeleteObjectRequest[];
}
