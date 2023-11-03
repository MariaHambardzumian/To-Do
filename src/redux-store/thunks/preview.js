import { createAsyncThunk } from '@reduxjs/toolkit';
import { getListItem } from '../../api/index.js';

export const previewDataThunk = createAsyncThunk(
  'preview/request',
  async ({ id, successCallback }, thunkAPI) => {
    const response = await getListItem(id)
    if (response.error) {
      return thunkAPI.requestId(id)
    }
    successCallback(response.data)
    return response
  }
);