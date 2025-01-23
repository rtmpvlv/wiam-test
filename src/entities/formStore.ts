import { makeAutoObservable } from "mobx";
import BaseApi from "../api/baseApi";
import RootStore from "../store/rootStore";

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  job: string;
  address: string;
  loanAmount: string;
  loanTerm: string;
}

class FormStore {
  _formData = {
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    job: "",
    address: "",
    loanAmount: "",
    loanTerm: "",
  };
  _categories: string[] = [];
  _api: BaseApi;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._api = rootStore.baseApi;
  }

  get formData() {
    return this._formData;
  }

  get categories() {
    return this._categories;
  }

  getCategories = async () => {
    try {
      const response: string[] = await this._api.fetchData("/products/category-list");
      this._categories = response;
    } catch (err) {
      this._api.handleRequestError();
      return null;
    }
  };

  setFormData = (data: FormData) => {
    this._formData = { ...this._formData, ...data };
  };

  createOrder = async (onSuccess) => {
    try {
      const params = {
        title: this._formData.firstName + " " + this._formData.lastName,
      };
      await this._api.postData("/products/add", params);
      onSuccess();
    } catch (err) {
      this._api.handleRequestError();
      return null;
    }
  };
}

export default FormStore;
